import { html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'
import { MOTION_EVENT, motionReduced } from '../motion'

/** Words shown on the symbol tiles. Taken from the client-approved concept. */
const DEFAULT_WORDS = [
  'sun', 'think', 'temperature', 'us', 'rise', 'using', 'Earth', 'absorb', 'people', 'problem',
  'harmful', 'reduce', 'sustainability', 'car', 'blanket', 'produce', 'scarce', 'ice', 'waste',
  'soil', 'environmental', 'melt', 'many', 'greenhouse gas', 'marine life', 'chemicals',
]

/** One curved row of tiles. Radius and spacing in px at desktop scale. */
const ROWS = [
  { radius: 900, step: 7.4, dir: 1 },
  { radius: 780, step: 8.6, dir: -1 },
  { radius: 660, step: 10.2, dir: 1 },
]

/**
 * Full-bleed band of symbol tiles laid out on three concentric arcs, from the client concept.
 * `variant="hero"`: dark band, big statement heading, one CTA, arc curving down below it.
 * `variant="band"`: light band used near the end of a page, arc curving the other way.
 * Rows turn slowly as the page scrolls. With reduced motion on (OS setting or the footer toggle)
 * the arc stays still. The tiles are decorative, so they are hidden from screen readers.
 */
@customElement('wf-symbol-arc')
export class WfSymbolArc extends Light {
  @property() variant: 'hero' | 'band' = 'hero'
  @property() heading = ''
  @property() body = ''
  @property({ attribute: 'cta-label' }) ctaLabel = ''
  @property({ attribute: 'cta-href' }) ctaHref = '#'
  @property({ attribute: 'cta-id' }) ctaId = ''
  @property({ attribute: false }) words: string[] = DEFAULT_WORDS

  private frame = 0
  private onScroll = () => {
    if (this.frame) return
    this.frame = requestAnimationFrame(() => {
      this.frame = 0
      this.updateRotation()
    })
  }
  private onMotion = () => this.updateRotation()

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener(MOTION_EVENT, this.onMotion)
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener(MOTION_EVENT, this.onMotion)
    if (this.frame) cancelAnimationFrame(this.frame)
    super.disconnectedCallback()
  }

  firstUpdated() {
    this.updateRotation()
  }

  /** Turns each row a few degrees per 100px scrolled, alternating direction, within a small range.
   *  The hero starts at rest and turns as it scrolls away; the band is at rest when centred on
   *  screen. Reduced motion holds every row at rest so the arc keeps its designed shape. */
  private updateRotation() {
    const reduce = motionReduced()
    const rect = this.getBoundingClientRect()
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))
    let progress = 0
    if (!reduce) {
      progress = this.variant === 'hero'
        ? clamp(-rect.top / 100, 0, 10)
        : clamp(-(rect.top + rect.height / 2 - window.innerHeight / 2) / 100, -5, 5)
    }
    this.querySelectorAll<HTMLElement>('[data-arc-row]').forEach((row, i) => {
      const dir = ROWS[i]?.dir ?? 1
      row.style.transform = `rotate(${(progress * 1.6 * dir).toFixed(2)}deg)`
    })
  }

  private renderArc(flip: boolean) {
    let w = 0
    return html`
      <div aria-hidden="true" class="relative w-full overflow-hidden h-[260px] sm:h-[400px]">
        <div class="absolute left-1/2 top-0 origin-top [--arc-s:0.62] sm:[--arc-s:1]"
             style="transform: translateX(-50%) scale(var(--arc-s)); width: 0; height: 400px;">
          ${ROWS.map((row) => {
            const count = Math.floor(180 / row.step)
            // Centre of the circle: below the band for a downward arc (hero), above it for an upward one (band).
            const centreY = flip ? 340 - ROWS[0].radius : 60 + ROWS[0].radius
            return html`
              <div data-arc-row class="absolute will-change-transform" style="left: 0; top: ${centreY}px; transition: none;">
                ${Array.from({ length: count + 1 }, (_, k) => {
                  const angle = -90 + k * row.step
                  const word = this.words[w++ % this.words.length]
                  const place = flip
                    ? `rotate(${-angle}deg) translateY(${row.radius}px)`
                    : `rotate(${angle}deg) translateY(${-row.radius}px)`
                  return html`
                    <div class="absolute" style="transform: ${place} translate(-50%, -50%);">
                      <div class="w-[104px] h-[84px] rounded-xl bg-white border border-gray-300 shadow-sm flex flex-col items-center justify-center gap-1.5">
                        <div class="w-8 h-8 rounded-md bg-gray-200"></div>
                        <span class="text-[13px] leading-none font-medium text-gray-700 whitespace-nowrap">${word}</span>
                      </div>
                    </div>`
                })}
              </div>`
          })}
        </div>
      </div>`
  }

  render() {
    const hero = this.variant === 'hero'
    const text = this.heading
      ? html`
        <div class="relative mx-auto max-w-4xl text-center flex flex-col items-center px-4">
          ${hero
            ? html`<h1 class="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-white text-balance">${this.heading}</h1>`
            : html`<h2 class="text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">${this.heading}</h2>`}
          ${this.body ? html`<p class="mt-5 max-w-xl text-base sm:text-lg ${hero ? 'text-gray-100' : 'text-gray-600'}">${this.body}</p>` : nothing}
          ${this.ctaLabel ? html`
            <div class="mt-8">
              <a href=${this.ctaHref} id=${this.ctaId || undefined}
                 class="rounded-lg px-5 py-2.5 text-sm font-medium ${hero
                   ? 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white focus:ring-offset-gray-800'
                   : 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-900'} focus:outline-none focus:ring-2 focus:ring-offset-2">
                ${this.ctaLabel}
              </a>
            </div>` : nothing}
        </div>`
      : nothing

    if (hero) {
      return html`
        <section class="relative left-1/2 -translate-x-1/2 w-screen bg-gray-800 -mt-12 sm:-mt-16 overflow-hidden">
          <div class="pt-20 sm:pt-28">${text}</div>
          <div class="mt-10 sm:mt-14">${this.renderArc(false)}</div>
          <div class="h-10 bg-gradient-to-b from-gray-800 to-gray-50"></div>
        </section>`
    }
    return html`
      <section class="relative left-1/2 -translate-x-1/2 w-screen bg-gray-100 overflow-hidden py-12 sm:py-16">
        ${text}
        <div class=${this.heading ? 'mt-8' : ''}>${this.renderArc(true)}</div>
      </section>`
  }
}
