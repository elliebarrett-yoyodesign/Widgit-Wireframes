import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Light } from '../base'
import { primaryNav, siteName, headerActions, utilityLinks, regions, currentRegion } from '../config'
import { chevronIcon, hamburgerIcon, closeIcon } from './utils'

@customElement('wf-header-nav')
export class WfHeaderNav extends Light {
  /** slug of the current page's top-level nav section, for active-state styling */
  @property() active = ''
  /** Region label shown in the switcher. Country landing pages pass their own. */
  @property() region = currentRegion
  /** Stripped-down header: brand + a single "Return to homepage" link, no nav/CTAs/hamburger.
   *  Used on tooling pages (Component List) that aren't part of the site's own IA. */
  @property({ type: Boolean }) minimal = false
  @state() private openMenu: string | null = null
  @state() private mobileOpen = false

  /** display:contents (not the base class's default display:block): the host must not
   *  generate its own box, or it becomes <header>'s sticky containing block and the header
   *  scrolls away immediately. See lit.md's sticky gotcha. */
  connectedCallback() {
    this.style.display = 'contents'
    super.connectedCallback()
  }

  /** Mouse clicks (detail >= 1) only open, matching hover. Keyboard clicks (detail === 0) toggle,
   *  since there's no keyboard equivalent of mouseleave. See lit.md. */
  private handleTriggerClick(e: MouseEvent, label: string) {
    this.openMenu = e.detail === 0 ? (this.openMenu === label ? null : label) : label
  }

  private menuWrapper(key: string, trigger: unknown, panel: unknown, alignRight = false) {
    const open = this.openMenu === key
    return html`
      <div class="relative flex items-center"
        @mouseenter=${() => { this.openMenu = key }}
        @mouseleave=${() => { if (this.openMenu === key) this.openMenu = null }}>
        ${trigger}
        ${open ? html`
          <div role="menu" class="absolute ${alignRight ? 'right-0' : 'left-0'} top-full pt-2 z-50">${panel}</div>` : ''}
      </div>`
  }

  private renderRegionSwitcher() {
    const key = '__region'
    const open = this.openMenu === key
    const trigger = html`
      <button type="button" aria-haspopup="menu" aria-expanded=${open}
        @click=${(e: MouseEvent) => this.handleTriggerClick(e, key)}
        class="flex items-center gap-1 py-1 text-xs font-medium text-gray-700 hover:text-gray-900">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
        <span>Region: ${this.region}</span>
        ${chevronIcon(open)}
      </button>`
    const panel = html`
      <div class="w-72 rounded-xl border border-gray-200 bg-white shadow-lg p-2">
        <p class="px-3 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-400">Choose your region</p>
        ${regions.map((r) => html`
          <a role="menuitem" href=${r.href}
            class="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 ${r.label === this.region ? 'bg-gray-50' : ''}">
            <span>
              <span class="block text-sm font-semibold text-gray-900">${r.label}</span>
              <span class="block text-xs text-gray-500">${r.description}</span>
            </span>
            ${r.label === this.region ? html`<span class="text-xs text-gray-500">Current</span>` : ''}
          </a>`)}
      </div>`
    return this.menuWrapper(key, trigger, panel)
  }

  private renderNavPanel(item: (typeof primaryNav)[number]) {
    const children = item.children || []
    const wide = children.length > 5
    const card = (child: (typeof children)[number]) => html`
      <div class="py-0.5">
        <a role="menuitem" href=${child.href} class="block rounded-md px-3 py-2.5 hover:bg-gray-50">
          <span class="block text-sm font-semibold text-gray-900">${child.label}</span>
          ${child.description ? html`<span class="block mt-0.5 text-xs text-gray-500">${child.description}</span>` : ''}
        </a>
        ${child.children?.length ? html`
          <ul class="ml-3 mt-0.5 mb-1 space-y-0.5 border-l border-gray-200 pl-3">
            ${child.children.map((sub) => html`
              <li><a href=${sub.href} class="block rounded-md px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900">${sub.label}</a></li>`)}
          </ul>` : ''}
      </div>`
    if (!wide) {
      return html`<div class="w-80 max-w-[90vw] rounded-xl border border-gray-200 bg-white shadow-lg p-2">${children.map(card)}</div>`
    }
    // Mega-style panel: two columns of links for sections with many children.
    return html`
      <div class="w-[40rem] max-w-[90vw] rounded-xl border border-gray-200 bg-white shadow-lg p-2 grid grid-cols-2 gap-x-2">
        ${children.map(card)}
      </div>`
  }

  render() {
    if (this.minimal) {
      return html`
        <header class="sticky mt-[var(--wf-bar-h)] top-[var(--wf-bar-h)] z-40 border-b border-gray-200 bg-white">
          <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
            <span class="text-base font-semibold text-gray-900">${siteName}: Component List</span>
            <a href="index.html"
               class="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">Return to homepage</a>
          </div>
        </header>`
    }
    return html`
      <header class="sticky mt-[var(--wf-bar-h)] top-[var(--wf-bar-h)] z-40 border-b border-gray-200 bg-white">
        <!-- Utility bar: region switcher + account/contact links -->
        <div class="hidden lg:block border-b border-gray-100 bg-gray-50">
          <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-6">
            ${this.renderRegionSwitcher()}
            <nav aria-label="Utility" class="flex items-center gap-5">
              ${utilityLinks.map((l) => html`
                <a href=${l.href} id=${l.id || undefined} class="text-xs font-medium text-gray-700 hover:text-gray-900 hover:underline">${l.label}</a>`)}
            </nav>
          </div>
        </div>

        <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          <a href="index.html" class="text-base font-semibold text-gray-900 shrink-0">${siteName}</a>

          <nav aria-label="Primary" class="hidden lg:flex items-center gap-1 flex-1 justify-center relative">
            ${primaryNav.map((item) => {
              const isActive = this.active === item.slug
              if (!item.children?.length) {
                return html`
                  <a href=${item.href}
                     class="px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}">
                    ${item.label}
                  </a>`
              }
              const open = this.openMenu === item.label
              const trigger = html`
                <button type="button" aria-haspopup="menu" aria-expanded=${open}
                  @click=${(e: MouseEvent) => this.handleTriggerClick(e, item.label)}
                  class="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}">
                  ${item.label}
                  ${chevronIcon(open)}
                </button>`
              return this.menuWrapper(item.label, trigger, this.renderNavPanel(item))
            })}
          </nav>

          <div class="hidden lg:flex items-center gap-3 shrink-0">
            <a href="search.html" aria-label="Search the site" class="p-2 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            </a>
            ${headerActions.secondary ? html`
              <a href=${headerActions.secondary.href} id=${headerActions.secondary.id || undefined}
                 class="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">${headerActions.secondary.label}</a>` : ''}
            <a href=${headerActions.primary.href} id=${headerActions.primary.id || undefined}
               class="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              ${headerActions.primary.label}
            </a>
          </div>

          <button type="button" class="lg:hidden p-2 text-gray-700" aria-label="Open menu" aria-expanded=${this.mobileOpen}
            @click=${() => (this.mobileOpen = true)}>
            ${hamburgerIcon()}
          </button>
        </div>
      </header>

      ${this.mobileOpen ? html`
        <div class="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto" @keydown=${(e: KeyboardEvent) => { if (e.key === 'Escape') this.mobileOpen = false }}>
          <div class="flex items-center justify-between px-4 h-16 border-b border-gray-200">
            <span class="text-base font-semibold text-gray-900">${siteName}</span>
            <button type="button" aria-label="Close menu" class="p-2 text-gray-700" @click=${() => (this.mobileOpen = false)}>
              ${closeIcon()}
            </button>
          </div>
          <nav aria-label="Primary mobile" class="px-4 py-4 space-y-1">
            ${primaryNav.map((item) => html`
              <div class="border-b border-gray-100 py-2">
                ${item.children?.length
                  ? html`<span class="block text-base font-medium text-gray-900 py-1">${item.label}</span>`
                  : html`<a href=${item.href} class="block text-base font-medium text-gray-900 py-1">${item.label}</a>`}
                ${item.children?.length ? html`
                  <ul class="mt-1 ml-3 space-y-1">
                    ${item.children.map((child) => html`<li><a href=${child.href} class="block text-sm text-gray-600 py-1">${child.label}</a></li>`)}
                  </ul>` : ''}
              </div>
            `)}
            <div class="border-b border-gray-100 py-2">
              <span class="block text-base font-medium text-gray-900 py-1">Region: ${this.region}</span>
              <ul class="mt-1 ml-3 space-y-1">
                ${regions.map((r) => html`<li><a href=${r.href} class="block text-sm text-gray-600 py-1">${r.label}</a></li>`)}
              </ul>
            </div>
            <ul class="py-2 space-y-1">
              <li><a href="search.html" class="block text-sm text-gray-600 py-1">Search</a></li>
              ${utilityLinks.map((l) => html`<li><a href=${l.href} class="block text-sm text-gray-600 py-1">${l.label}</a></li>`)}
            </ul>
            ${headerActions.secondary ? html`
              <a href=${headerActions.secondary.href} class="mt-3 block text-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-800 border border-gray-300">${headerActions.secondary.label}</a>` : ''}
            <a href=${headerActions.primary.href} class="mt-2 block text-center rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-white">${headerActions.primary.label}</a>
          </nav>
        </div>` : ''}
    `
  }
}
