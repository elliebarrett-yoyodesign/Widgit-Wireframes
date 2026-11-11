import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'

@customElement('wf-homepage-hero')
export class WfHomepageHero extends Light {
  @property() heading = ''
  @property() body = ''
  @property({ attribute: 'cta-label' }) ctaLabel = ''
  @property({ attribute: 'cta-href' }) ctaHref = '#'
  @property({ attribute: 'cta-id' }) ctaId = ''

  render() {
    return html`
      <section class="relative left-1/2 -translate-x-1/2 w-screen bg-gray-800 -mt-12 sm:-mt-16">
        <div class="relative py-24 sm:py-32 lg:py-40 px-4">
          <div class="absolute inset-0 bg-gray-200"></div>
          <div class="absolute inset-0 bg-gray-900/55"></div>
          <div class="relative mx-auto max-w-3xl text-center flex flex-col items-center">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">${this.heading}</h1>
            <p class="mt-5 max-w-xl text-base sm:text-lg text-gray-100">${this.body}</p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href=${this.ctaHref} id=${this.ctaId || undefined}
                 class="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                ${this.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>`
  }
}
