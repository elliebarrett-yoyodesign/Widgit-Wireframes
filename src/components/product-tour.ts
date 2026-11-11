import { html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Light } from '../base'

export interface TourHotspot {
  /** Position of the marker over the screenshot, as percentages from the top-left. */
  x: number
  y: number
  title: string
  body: string
}

export interface TourTab {
  key: string
  label: string
  screenshotLabel: string
  hotspots: TourHotspot[]
  features: { heading: string; description: string }[]
  ctaLabel?: string
  ctaHref?: string
  ctaId?: string
}

/**
 * Interactive product tour, from the client concept. Tabs switch product; each shows a
 * screenshot placeholder with numbered hotspots and a row of three feature cards.
 * Hotspots are real buttons (click or keyboard), and their captions show in a panel below the
 * screenshot rather than on hover, so they work for touch, keyboard and screen reader users.
 * With a single tab the tab list is hidden, for use on an individual product page.
 */
@customElement('wf-product-tour')
export class WfProductTour extends Light {
  @property() heading = ''
  @property() intro = ''
  @property({ attribute: false }) tabs: TourTab[] = []
  @property({ attribute: 'link-label' }) linkLabel = ''
  @property({ attribute: 'link-href' }) linkHref = ''
  @state() private active = 0
  @state() private spot = 0

  private uid = `tour-${Math.random().toString(36).slice(2, 8)}`

  private select(i: number, focus = false) {
    this.active = i
    this.spot = 0
    if (focus) {
      this.updateComplete.then(() => this.querySelector<HTMLButtonElement>(`#${this.uid}-tab-${i}`)?.focus())
    }
  }

  /** Arrow keys move between tabs, as the ARIA tabs pattern expects. */
  private onTabKey(e: KeyboardEvent) {
    const n = this.tabs.length
    let next = -1
    if (e.key === 'ArrowRight') next = (this.active + 1) % n
    else if (e.key === 'ArrowLeft') next = (this.active - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next >= 0) {
      e.preventDefault()
      this.select(next, true)
    }
  }

  render() {
    const tab = this.tabs[this.active]
    if (!tab) return nothing
    const multi = this.tabs.length > 1
    const current = tab.hotspots[this.spot]
    return html`
      <section>
        ${this.heading ? html`
          <div class="max-w-3xl ${multi ? 'mx-auto text-center' : ''}">
            <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900">${this.heading}</h2>
            ${this.intro ? html`<p class="mt-3 text-base text-gray-600">${this.intro}</p>` : nothing}
          </div>` : nothing}

        ${multi ? html`
          <div role="tablist" aria-label="Products" @keydown=${this.onTabKey}
               class="mt-8 grid grid-cols-1 ${this.tabs.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-2 rounded-2xl bg-gray-100 p-2">
            ${this.tabs.map((t, i) => html`
              <button type="button" role="tab" id="${this.uid}-tab-${i}"
                aria-selected=${i === this.active} aria-controls="${this.uid}-panel" tabindex=${i === this.active ? 0 : -1}
                @click=${() => this.select(i)}
                class="rounded-xl px-4 py-4 text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900
                  ${i === this.active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'}">
                ${t.label}
              </button>`)}
          </div>` : nothing}

        <div id="${this.uid}-panel" role=${multi ? 'tabpanel' : nothing}
             aria-labelledby=${multi ? `${this.uid}-tab-${this.active}` : nothing} class="mt-6">
          <div class="relative rounded-2xl border border-gray-200 bg-gray-200 aspect-[4/3] sm:aspect-[2/1] overflow-hidden">
            <span class="absolute left-3 bottom-3 rounded-md bg-white/80 px-3 py-1.5 text-xs sm:text-sm text-gray-600">${tab.screenshotLabel}</span>
            ${tab.hotspots.map((h, i) => html`
              <button type="button"
                aria-label="Feature ${i + 1}: ${h.title}" aria-pressed=${i === this.spot}
                aria-controls="${this.uid}-caption"
                @click=${() => (this.spot = i)}
                style="left:${h.x}%; top:${h.y}%;"
                class="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full text-sm font-semibold
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-900 focus-visible:ring-offset-2
                  ${i === this.spot ? 'bg-gray-900 text-white ring-4 ring-white' : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100'}">
                ${i + 1}
              </button>`)}
          </div>

          ${current ? html`
            <div id="${this.uid}-caption" aria-live="polite"
                 class="mt-3 flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center" aria-hidden="true">${this.spot + 1}</span>
              <p class="text-sm text-gray-700"><span class="font-semibold text-gray-900">${current.title}.</span> ${current.body}</p>
            </div>` : nothing}

          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            ${tab.features.map((f) => html`
              <div class="rounded-xl border border-gray-200 bg-white p-5">
                <div class="w-10 h-10 rounded-lg bg-gray-200" aria-hidden="true"></div>
                <h3 class="mt-4 text-base font-semibold text-gray-900">${f.heading}</h3>
                <p class="mt-1.5 text-sm text-gray-600">${f.description}</p>
              </div>`)}
          </div>

          ${tab.ctaLabel || this.linkLabel ? html`
            <div class="mt-6 flex flex-wrap items-center gap-3 ${multi ? 'justify-center' : ''}">
              ${tab.ctaLabel ? html`
                <a href=${tab.ctaHref || '#'} id=${tab.ctaId || undefined}
                   class="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">${tab.ctaLabel}</a>` : nothing}
              ${this.linkLabel ? html`
                <a href=${this.linkHref} class="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">${this.linkLabel}</a>` : nothing}
            </div>` : nothing}
        </div>
      </section>`
  }
}
