import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Light } from '../base'
import { chevronIcon } from './utils'

export interface AccordionItem { heading: string; body: string }

@customElement('wf-accordion')
export class WfAccordion extends Light {
  @property() heading = ''
  @property({ attribute: false }) items: AccordionItem[] = []
  @property({ type: Boolean, attribute: 'multi-open' }) multiOpen = false
  @state() private openIndexes = new Set<number>([0])

  private toggle(i: number) {
    const next = new Set(this.multiOpen ? this.openIndexes : [])
    if (this.openIndexes.has(i)) next.delete(i)
    else next.add(i)
    this.openIndexes = next
  }

  render() {
    return html`
      <section class="max-w-3xl">
        ${this.heading ? html`<h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">${this.heading}</h2>` : ''}
        <div class="rounded-xl border border-gray-200 bg-white divide-y divide-gray-200 px-5">
          ${this.items.map((item, i) => {
            const open = this.openIndexes.has(i)
            return html`
              <div>
                <h3>
                  <button type="button" aria-expanded=${open} @click=${() => this.toggle(i)}
                    class="w-full flex items-center justify-between gap-4 py-5 text-left text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900">
                    ${item.heading} ${chevronIcon(open)}
                  </button>
                </h3>
                ${open ? html`<div class="pb-5 text-sm text-gray-600">${item.body}</div>` : ''}
              </div>`
          })}
        </div>
      </section>`
  }
}
