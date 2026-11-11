import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Light } from '../base'
import { arrowIcon, type LinkItem } from './utils'

const COLS: Record<number, string> = {
  1: '',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

@customElement('wf-links')
export class WfLinks extends Light {
  @property() heading = ''
  @property({ attribute: false }) items: LinkItem[] = []
  /** Fixed column count for the row — 1, 2, 3, or 4 (tablet always caps at 2, except cols=1).
   *  Set this to the block's real, statically-authored item count (capped at 4) so a short row
   *  fills the available width instead of leaving empty cells — e.g. 2 known items is `cols: 2`,
   *  not the default. This only applies to a fixed/known item list; a *filterable* listing keeps
   *  a `cols` sized for its largest expected result (see wf-cards' doc) since the visible count
   *  changes at runtime and stretching a filtered-down result is the bug this fixed-cols model
   *  exists to prevent. When a real item count doesn't divide evenly into one row, compose
   *  multiple <wf-links> (or mix with <wf-cards>) rows instead — smaller row first. */
  @property({ type: Number }) cols: 1 | 2 | 3 | 4 = 3

  render() {
    const cols = COLS[this.cols] ?? COLS[3]
    return html`
      <section>
        ${this.heading ? html`<h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">${this.heading}</h2>` : ''}
        <div class="grid grid-cols-1 ${cols} gap-4">
          ${this.items.map((l) => html`
            <a href=${l.href} aria-label=${l.label}
               class="rounded-lg border border-gray-200 bg-white px-5 py-4 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center justify-between">
              <span>
                <span class="block text-sm font-medium text-gray-900">${l.label}</span>
                ${l.description ? html`<span class="block mt-0.5 text-xs text-gray-500">${l.description}</span>` : ''}
              </span>
              ${arrowIcon()}
            </a>`)}
        </div>
      </section>`
  }
}
