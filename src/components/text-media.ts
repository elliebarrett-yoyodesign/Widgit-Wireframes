import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'
import { mediaPlaceholder } from './utils'

@customElement('wf-text-media')
export class WfTextMedia extends Light {
  @property() heading = ''
  @property({ attribute: false }) body: string[] = []
  @property() side: 'left' | 'right' = 'left'
  @property({ attribute: 'media-label' }) mediaLabel = 'Section image'
  /** CTA is always rendered as a button (optionally paired with a `secondaryLabel` button) — there
   *  is no bare-text-link rendering mode. A block with no CTA at all is fine (omit ctaLabel); a
   *  block that does have a next step should read as one, the same weight as every other CTA in the
   *  kit, not a smaller/quieter underlined link. */
  @property({ attribute: 'cta-label' }) ctaLabel = ''
  @property({ attribute: 'cta-href' }) ctaHref = '#'
  @property({ attribute: 'secondary-label' }) secondaryLabel = ''
  @property({ attribute: 'secondary-href' }) secondaryHref = '#'

  render() {
    const textCol = html`
      <div>
        ${this.heading ? html`<h2 class="text-2xl sm:text-3xl font-semibold text-gray-900">${this.heading}</h2>` : ''}
        <div class="mt-4 space-y-4">${this.body.map((p) => html`<p class="text-base text-gray-700">${p}</p>`)}</div>
        ${this.ctaLabel ? html`
          <div class="mt-5 flex flex-wrap items-center gap-3">
            <a href=${this.ctaHref} class="inline-block rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">${this.ctaLabel}</a>
            ${this.secondaryLabel ? html`
              <a href=${this.secondaryHref} class="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">${this.secondaryLabel}</a>` : ''}
          </div>` : ''}
      </div>`
    const mediaCol = html`<div>${mediaPlaceholder(this.mediaLabel, 'aspect-square sm:aspect-[4/3]')}</div>`
    return html`
      <section class="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
        ${this.side === 'right' ? html`${textCol}${mediaCol}` : html`${mediaCol}${textCol}`}
      </section>`
  }
}
