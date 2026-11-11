import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'
import { mediaPlaceholder } from './utils'

interface Crumb { label: string; href: string }

@customElement('wf-standard-hero')
export class WfStandardHero extends Light {
  @property() eyebrow = ''
  @property() heading = ''
  @property() body = ''
  @property({ attribute: 'cta-label' }) ctaLabel = ''
  @property({ attribute: 'cta-href' }) ctaHref = ''
  @property({ attribute: 'cta-id' }) ctaId = ''
  @property({ attribute: 'secondary-label' }) secondaryLabel = ''
  @property({ attribute: 'secondary-href' }) secondaryHref = '#'
  @property({ attribute: false }) breadcrumb: Crumb[] = []
  @property({ attribute: 'media-label' }) mediaLabel = 'Section image'

  render() {
    return html`
      <section>
        ${this.breadcrumb?.length ? html`
          <nav aria-label="Breadcrumb" class="mb-4">
            <ol class="flex flex-wrap items-center gap-1 text-xs text-gray-500">
              ${this.breadcrumb.map((c, i) => html`
                <li class="flex items-center gap-1">
                  ${i > 0 ? html`<span aria-hidden="true">/</span>` : ''}
                  ${i === this.breadcrumb.length - 1
                    ? html`<span aria-current="page" class="text-gray-700">${c.label}</span>`
                    : html`<a href=${c.href} class="hover:text-gray-900">${c.label}</a>`}
                </li>`)}
            </ol>
          </nav>` : ''}
        <div class="max-w-3xl">
          ${this.eyebrow ? html`<p class="text-sm font-semibold uppercase tracking-wide text-gray-500">${this.eyebrow}</p>` : ''}
          <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">${this.heading}</h1>
          <p class="mt-4 text-base sm:text-lg text-gray-600">${this.body}</p>
          ${this.ctaLabel ? html`
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <a href=${this.ctaHref} id=${this.ctaId || undefined}
                 class="inline-block rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                ${this.ctaLabel}
              </a>
              ${this.secondaryLabel ? html`
                <a href=${this.secondaryHref}
                   class="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                  ${this.secondaryLabel}
                </a>` : ''}
            </div>` : ''}
        </div>
        <div class="mt-10">${mediaPlaceholder(this.mediaLabel, 'aspect-[21/9]')}</div>
      </section>`
  }
}
