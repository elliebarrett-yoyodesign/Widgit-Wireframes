import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'
import { mediaPlaceholder } from './utils'

@customElement('wf-promo')
export class WfPromo extends Light {
  @property() heading = ''
  @property() body = ''
  @property() side: 'left' | 'right' = 'left'
  @property({ attribute: 'cta-label' }) ctaLabel = ''
  @property({ attribute: 'cta-href' }) ctaHref = ''
  @property({ attribute: 'cta-id' }) ctaId = ''
  @property({ attribute: 'media-label' }) mediaLabel = 'Promo image'

  render() {
    const textCol = html`
      <div class="p-6 sm:p-10 flex flex-col justify-center">
        <h3 class="text-xl sm:text-2xl font-semibold text-gray-900">${this.heading}</h3>
        <p class="mt-3 text-sm sm:text-base text-gray-600">${this.body}</p>
        ${this.ctaLabel ? html`
          <a href=${this.ctaHref} id=${this.ctaId || undefined}
             class="mt-5 self-start rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            ${this.ctaLabel}
          </a>` : ''}
      </div>`
    const mediaCol = html`<div>${mediaPlaceholder(this.mediaLabel, 'aspect-[4/3]', '', 'rounded-none')}</div>`
    return html`
      <div class="rounded-xl border border-gray-200 bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-2">
        ${this.side === 'right' ? html`${textCol}${mediaCol}` : html`${mediaCol}${textCol}`}
      </div>`
  }
}
