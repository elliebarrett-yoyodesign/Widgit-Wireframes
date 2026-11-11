import { html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { Light } from '../base'
import { MOTION_EVENT, motionReduced, setMotionReduced } from '../motion'
import { footerColumns, footerTagline, footerLegal, footerLegalLinks, siteName } from '../config'

@customElement('wf-site-footer')
export class WfSiteFooter extends Light {
  @state() private reduce = motionReduced()
  private onMotion = () => { this.reduce = motionReduced() }

  connectedCallback() {
    super.connectedCallback()
    this.reduce = motionReduced()
    window.addEventListener(MOTION_EVENT, this.onMotion)
  }

  disconnectedCallback() {
    window.removeEventListener(MOTION_EVENT, this.onMotion)
    super.disconnectedCallback()
  }

  /** Accessible on/off switch. Follows the OS reduced-motion setting until the viewer chooses. */
  private renderMotionToggle() {
    return html`
      <div class="flex items-center gap-3">
        <button type="button" role="switch" id="footer-reduce-motion" aria-checked=${this.reduce}
          aria-describedby="footer-reduce-motion-hint"
          @click=${() => setMotionReduced(!this.reduce)}
          class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${this.reduce ? 'bg-gray-800' : 'bg-white'}">
          <span class="sr-only">Reduce motion</span>
          <span aria-hidden="true" class="inline-block h-4 w-4 rounded-full transition-transform ${this.reduce ? 'translate-x-[22px] bg-white' : 'translate-x-[2px] bg-gray-800'}"></span>
        </button>
        <span class="text-sm">
          <span class="block font-medium text-gray-900" aria-hidden="true">Reduce motion</span>
          <span id="footer-reduce-motion-hint" class="block text-xs text-gray-500">${this.reduce ? 'On: animations are switched off' : 'Off: animations are on'}</span>
        </span>
      </div>`
  }

  render() {
    return html`
      <footer class="mt-20 border-t border-gray-200 bg-white">
        <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <div class="min-w-0">
              <a href="index.html" class="text-base font-semibold text-gray-900">${siteName}</a>
              <p class="mt-3 max-w-xs text-sm text-gray-500">${footerTagline}</p>
              <form class="mt-5 max-w-sm" @submit=${(e: Event) => e.preventDefault()}>
                <label for="footer-subscribe" class="text-xs font-medium text-gray-700">Subscribe for updates</label>
                <div class="mt-1.5 flex gap-2">
                  <input id="footer-subscribe" type="email" placeholder="you@example.com" required
                    class="w-full min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  <button type="submit"
                    class="shrink-0 rounded-lg bg-gray-800 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            ${footerColumns.map((col) => html`
              <div>
                <h3 class="text-xs font-semibold uppercase tracking-wide text-gray-400">${col.heading}</h3>
                <ul class="mt-3 space-y-2">
                  ${col.links.map((l) => html`<li><a href=${l.href} class="text-sm text-gray-600 hover:text-gray-900">${l.label}</a></li>`)}
                </ul>
              </div>
            `)}
          </div>
          <div class="mt-12 border-t border-gray-200 pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <p class="text-xs text-gray-500">&copy; ${new Date().getFullYear()} ${footerLegal}</p>
            ${this.renderMotionToggle()}
            <ul class="flex flex-wrap gap-x-5 gap-y-2">
              ${footerLegalLinks.map((l) => html`<li><a href=${l.href} class="text-xs text-gray-500 hover:text-gray-900">${l.label}</a></li>`)}
            </ul>
          </div>
        </div>
      </footer>`
  }
}
