import { html, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Light } from '../base'
import { siteName } from '../config'

/** Tooling page — ships the whole wf-* kit at a glance. The one place a heading-scale
 *  specimen and a full variant matrix belong (components.md → "Component palette page"). */
@customElement('wf-palette-page')
export class WfPalettePage extends Light {
  /** Every specimen gets the same `rounded-xl border border-gray-200 p-6` frame by default, so the
   *  page reads as one consistent catalogue rather than each component styled ad hoc. Two escapes:
   *  `noFrame` for a component that's full-bleed by design (wf-homepage-hero, wf-signup-form) — a
   *  border/padding around a full-bleed component would visibly contradict what it's demonstrating.
   *  `noPadding` for a component that already supplies its own edge-to-edge surface (wf-site-footer)
   *  — padding around it would just double up on spacing it already has. */
  private specimen(n: number, label: string, tag: string, body: TemplateResult, opts?: { note?: string; noFrame?: boolean; noPadding?: boolean }): TemplateResult {
    const frameClass = opts?.noFrame ? '' : opts?.noPadding ? 'rounded-xl border border-gray-200 overflow-hidden' : 'rounded-xl border border-gray-200 p-6'
    return html`
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">${n}. ${label}: ${tag}</h2>
        ${opts?.note ? html`<p class="mb-4 text-sm text-gray-500">${opts.note}</p>` : ''}
        <div class=${frameClass}>${body}</div>
      </section>`
  }

  render() {
    return html`
      <div class="space-y-16 pb-4">
        <section>
          <p class="text-sm font-semibold uppercase tracking-wide text-gray-500">Wireframe kit</p>
          <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">Component List</h1>
          <p class="mt-4 max-w-2xl text-base text-gray-600">All 18 components in the ${siteName} wireframe kit, with their key variants. Real pages use realistic, page-specific copy; this page is the one exception, for reference.</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Typography specimen</h2>
          <div class="rounded-xl border border-gray-200 p-6 space-y-3">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">Heading level 1</h1>
            <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900">Heading level 2</h2>
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900">Heading level 3</h3>
            <h4 class="text-lg font-semibold text-gray-900">Heading level 4</h4>
            <h5 class="text-base font-semibold text-gray-900">Heading level 5</h5>
            <h6 class="text-sm font-semibold uppercase tracking-wide text-gray-500">Heading level 6</h6>
            <p class="text-base text-gray-700">Body text, used for paragraph copy throughout the site.</p>
            <p class="text-xs text-gray-500">Caption text, used for supporting labels and fine print.</p>
          </div>
        </section>

        ${this.specimen(1, 'Header navigation', 'wf-header-nav',
          html`<wf-header-nav></wf-header-nav>`,
          { note: "Rendered without a clipping frame around its own bar so its dropdown menus can open past this demo's edges, exactly as on a real page." })}

        <div class="pt-8 sm:pt-8">
          <!-- wf-homepage-hero cancels a real page's <main> top padding with its own negative
               top margin (see lit.md) so it sits flush under the header. This demo isn't inside
               that padded <main> context, so it needs the matching padding added back here —
               otherwise the hero's negative margin eats into this section's own heading above,
               bleeding the hero's dark background up over the title text. No border frame here —
               it's full-bleed by design and a border would contradict that. -->
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Homepage hero: wf-homepage-hero</h2>
          <p class="mb-4 text-sm text-gray-500">Full-bleed by design: it intentionally breaks out to the true viewport edges here too, not just on the homepage.</p>
          <div class="pt-12 sm:pt-16"><wf-homepage-hero heading="Full-bleed homepage hero" body="Centred heading, short body, a single primary CTA, dark legibility overlay." cta-label="Primary action" cta-href="#"></wf-homepage-hero></div>
        </div>

        ${this.specimen(3, 'Standard hero', 'wf-standard-hero',
          html`<wf-standard-hero eyebrow="Section" heading="Standard hero (stacked)" body="Text first, full-width image below. Used on every non-homepage page. Optional secondary action next to the primary." cta-label="Primary action" cta-href="#" secondary-label="Secondary action" secondary-href="#" .breadcrumb=${[{ label: 'Home', href: 'index.html' }, { label: 'Section', href: '#' }, { label: 'Standard hero', href: '#' }]}></wf-standard-hero>`,
          { note: 'Breadcrumb is optional. It\'s shown here to confirm it renders. Leave it off pages that don\'t need one, such as those one level below Home.' })}

        ${this.specimen(4, 'Page header', 'wf-page-header',
          html`<wf-page-header heading="Page header" subtitle="Minimal intro block for legal/utility pages, no image."></wf-page-header>`)}

        ${this.specimen(5, 'Text', 'wf-text',
          html`<wf-text heading="Standalone rich text" .body=${['A heading plus one or more paragraphs of body copy, left- or center-aligned.']}></wf-text>`)}

        ${this.specimen(6, 'Text & Media', 'wf-text-media',
          html`
            <div class="space-y-8">
              <wf-text-media heading="Text left, media right" side="left" .body=${['Alternate the side prop on successive instances down a page. CTA is always a button (or a primary and secondary pair), never a bare text link.']} cta-label="Primary action" cta-href="#" secondary-label="Secondary action" secondary-href="#"></wf-text-media>
              <wf-text-media heading="Text right, media left" side="right" .body=${['This is the flipped variant, shown here with a single primary action instead of a pair.']} cta-label="Primary action" cta-href="#"></wf-text-media>
            </div>`)}

        ${this.specimen(7, 'Media', 'wf-media',
          html`
            <div class="grid sm:grid-cols-2 gap-6">
              <wf-media type="image" label="Image variant" caption="Image, with caption"></wf-media>
              <wf-media type="video" label="Video variant" caption="Video: play button has a brief pop-in on mount; opens a modal with traditional bottom controls, no separate image icon"></wf-media>
            </div>`)}

        ${this.specimen(8, 'Quote', 'wf-quote',
          html`
            <div class="space-y-8">
              <wf-quote .items=${[{ quote: 'Single quote variant.', attribution: 'Attribution', role: 'Role' }]}></wf-quote>
              <wf-quote .items=${[{ quote: 'Carousel quote, one of two.', attribution: 'Attribution A' }, { quote: 'Carousel quote, two of two.', attribution: 'Attribution B' }]}></wf-quote>
            </div>`)}

        ${this.specimen(9, 'Logos', 'wf-logos',
          html`<wf-logos heading="Partner logos" .names=${['Logo one', 'Logo two', 'Logo three', 'Logo four', 'Logo five']}></wf-logos>`,
          { note: 'Always a text label in a box, never an image icon. A name is readable, but a generic icon tells the reviewer nothing about which partner it stands for.' })}

        ${this.specimen(10, 'Statistics', 'wf-statistics',
          html`<wf-statistics heading="Key figures" .items=${[{ value: '123', label: 'Metric one' }, { value: '45%', label: 'Metric two' }, { value: '6,789', label: 'Metric three' }]}></wf-statistics>`,
          { note: 'The eyebrow heading sits above the bordered stat card, not inside it. The card holds only the numbers.' })}

        ${this.specimen(11, 'Cards', 'wf-cards',
          html`
            <div class="space-y-10">
              <div>
                <p class="mb-2 text-xs text-gray-500">With a real destination page: fixed columns, link shown</p>
                <wf-cards heading="Grid fills to the item count, no Load more" .items=${[
                  { href: '#', heading: 'Card one', description: 'Card description text.', imageLabel: 'Card image', linkText: 'View' },
                  { href: '#', heading: 'Card two', description: 'Card description text.', imageLabel: 'Card image', linkText: 'View' },
                  { href: '#', heading: 'Card three', description: 'Card description text.', imageLabel: 'Card image', linkText: 'View' },
                ]}></wf-cards>
              </div>
              <div>
                <p class="mb-2 text-xs text-gray-500">Display only, no destination page: no link shown</p>
                <wf-cards .cols=${2} .items=${[
                  { heading: 'Person one', description: 'Role or title.', imageLabel: 'Card image' },
                  { heading: 'Person two', description: 'Role or title.', imageLabel: 'Card image' },
                ]}></wf-cards>
              </div>
            </div>`)}

        ${this.specimen(12, 'Links', 'wf-links',
          html`<wf-links heading="Simple link list" .items=${[{ href: '#', label: 'Link one', description: 'Optional one-line description' }, { href: '#', label: 'Link two' }]}></wf-links>`,
          { note: 'Always has a right-aligned arrow, matching Cards\' link affordance.' })}

        ${this.specimen(13, 'Form', 'wf-form',
          html`<wf-form heading="Standard multi-field form" submit-label="Submit" .fields=${[
            { name: 'name', label: 'Full name', type: 'text', required: true },
            { name: 'email', label: 'Email address', type: 'email', required: true },
            { name: 'topic', label: 'Select field', type: 'select', options: ['Option A', 'Option B'] },
            { name: 'message', label: 'Textarea field', type: 'textarea' },
          ]}></wf-form>`)}

        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">14. Signup form: wf-signup-form</h2>
          <p class="mb-4 text-sm text-gray-500">Full-bleed banner by design, so no border frame, same as the homepage hero above.</p>
          <wf-signup-form></wf-signup-form>
        </div>

        ${this.specimen(15, 'Promo', 'wf-promo',
          html`<wf-promo heading="Landscape promo card" body="Text + media side by side, its own CTA." side="left" cta-label="Primary action" cta-href="#"></wf-promo>`)}

        ${this.specimen(16, 'Accordion', 'wf-accordion',
          html`<wf-accordion heading="FAQ-style expandable list" .items=${[{ heading: 'Question one', body: 'Answer one.' }, { heading: 'Question two', body: 'Answer two.' }]}></wf-accordion>`)}

        ${this.specimen(17, 'Share', 'wf-share',
          html`<wf-share heading="Share this story"></wf-share>`,
          { note: 'Facebook, LinkedIn, Email and Copy link all show an icon alongside the label.' })}

        ${this.specimen(18, 'Footer', 'wf-site-footer',
          html`<div class="[&_footer]:mt-0"><wf-site-footer></wf-site-footer></div>`,
          { noPadding: true, note: 'Includes an email signup under the description, and the legal links in the bottom bar.' })}
      </div>
    `
  }
}
