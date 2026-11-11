// Config-driven site data for the Widgit website wireframes. Every page is `{ hero?, blocks }`,
// an ordered list of `{ component, props, anchorId? }` entries rendered by <wf-page-body>.
// Adding or editing a section is a data change here, not new markup.
// Source: Revised Sitemap v1 (Figma), Widgit User Personas (July 2026), Widgit audience priorities.

export const siteName = 'Widgit'
export const footerTagline = 'Widgit Symbols help people of all ages and abilities understand, communicate and take part. Used in schools, health services and public spaces.'
export const footerLegal = 'Widgit Software. Company details to be confirmed.'

export interface Block {
  component: string
  props?: Record<string, any>
  anchorId?: string
}

export interface Page {
  hero?: Block
  blocks: Block[]
}

export interface NavChild {
  label: string
  href: string
  description?: string
  children?: { label: string; href: string }[]
}

export interface NavItem {
  slug: string
  label: string
  href: string
  children?: NavChild[]
}

// ---------------------------------------------------------------------------
// Navigation. Ordered by audience priority: Who we help leads (agreed with E, 10 Nov 2026).
// ---------------------------------------------------------------------------

export const primaryNav: NavItem[] = [
  {
    slug: 'who-we-help', label: 'Who we help', href: 'who-we-help.html',
    children: [
      { label: 'Who we help', href: 'who-we-help.html', description: 'An overview of everyone Widgit supports.' },
      {
        label: 'Education', href: 'education.html', description: 'Symbols for inclusive classrooms, from primary to specialist settings.',
        children: [
          { label: 'School trusts and groups (MATs)', href: 'school-trusts.html' },
          { label: 'Single-site schools', href: 'single-site-schools.html' },
          { label: 'International schools', href: 'international-schools.html' },
        ],
      },
      { label: 'Health and Social Care', href: 'health-social-care.html', description: 'Clearer communication for patients, residents and carers.' },
      { label: 'Government and Local Authorities', href: 'government-local-authorities.html', description: 'Accessible information for every citizen.' },
      { label: 'Public Services', href: 'public-services.html', description: 'Symbol-supported signage and information for public spaces.' },
      { label: 'Leisure and Tourism', href: 'leisure-tourism.html', description: 'Welcoming, accessible visits for every guest.' },
      { label: 'Parents, Carers and Individuals', href: 'parents-carers.html', description: 'Support at home, at school and out and about.' },
    ],
  },
  {
    slug: 'products', label: 'Products', href: 'products.html',
    children: [
      { label: 'All products', href: 'products.html', description: 'Compare Widgit software, apps and partner products.' },
      { label: 'Widgit Online', href: 'widgit-online.html', description: 'Create symbol resources in your browser.' },
      { label: 'InPrint 4', href: 'inprint-4.html', description: 'Design professional printed symbol materials.' },
      { label: 'Symwriter', href: 'symwriter.html', description: 'Write with symbols as you type.' },
      { label: 'Digital Accessibility', href: 'digital-accessibility.html', description: 'Point and BeClear for accessible digital content.' },
      { label: 'Widgit Apps', href: 'widgit-apps.html', description: 'Widgit Writer, Widgit Go, Symbol2Write and Widgit Vocab.' },
      { label: 'Partner Products', href: 'partner-products.html', description: 'Trusted tools that work alongside Widgit Symbols.' },
      { label: 'Plans and pricing', href: 'plans-pricing.html', description: 'Subscriptions for individuals, schools and trusts.' },
      { label: 'Pricing for international schools', href: 'plans-pricing-international.html', description: 'Plans for schools outside the UK.' },
    ],
  },
  {
    slug: 'symbols', label: 'Widgit Symbols', href: 'widgit-symbols.html',
    children: [
      { label: 'Widgit Symbols', href: 'widgit-symbols.html', description: 'What our symbols are and why they work.' },
      { label: 'Symbols as a Universal Language', href: 'universal-language.html', description: 'How symbols support understanding across languages.' },
      { label: 'Become a Symbol-Friendly Organisation', href: 'symbol-friendly.html', description: 'Show your commitment to accessible communication.' },
      { label: 'Symbol copyright and licensing', href: 'symbol-licensing.html', description: 'Use Widgit Symbols in your own products and materials.' },
      { label: 'Symbol Services', href: 'symbol-services.html', description: 'Signage, custom symbols and accessible materials made for you.' },
      { label: 'Symbols in Action', href: 'symbols-in-action.html', description: 'Case studies from schools and organisations.' },
    ],
  },
  { slug: 'resources', label: 'Resources', href: 'resources.html' },
  {
    slug: 'support', label: 'Support', href: 'support.html',
    children: [
      { label: 'Support', href: 'support.html', description: 'Help, guidance and answers in one place.' },
      { label: 'Technical Support', href: 'technical-support.html', description: 'Fix installation, licence and account problems.' },
      { label: 'FAQs', href: 'faqs.html', description: 'Quick answers to common questions.' },
      { label: 'Training', href: 'training.html', description: 'Courses to get the most from Widgit.' },
      { label: 'Events', href: 'events.html', description: 'Webinars, exhibitions and study days.' },
      { label: 'Widgit Centres', href: 'widgit-centres.html', description: 'Find a local centre for advice and demos.' },
      { label: 'Support Docs', href: 'support-docs.html', description: 'Step-by-step product guides (Zendesk).' },
    ],
  },
]

/** Header buttons. Shop is a separate platform, so it's a secondary action, not a nav section. */
export const headerActions: {
  primary: { label: string; href: string; id?: string }
  secondary?: { label: string; href: string; id?: string }
} = {
  secondary: { label: 'Shop', href: 'shop.html', id: 'cta-header-shop' },
  primary: { label: 'Start free trial', href: 'free-trial.html', id: 'cta-header-trial' },
}

export const utilityLinks: { label: string; href: string; id?: string }[] = [
  { label: 'Contact us', href: 'contact.html' },
  { label: 'My Shop Account', href: 'shop-account.html' },
  { label: 'Log in to Widgit Online', href: 'login.html' },
]

/** Region switcher. Each country routes to its own landing page. */
export const currentRegion = 'United Kingdom'
export const regions: { label: string; href: string; description: string }[] = [
  { label: 'United Kingdom', href: 'index.html', description: 'Widgit UK' },
  { label: 'Sweden', href: 'sweden.html', description: 'Through our Swedish partner' },
  { label: 'Norway', href: 'norway.html', description: 'Through our Norwegian partner' },
  { label: 'Finland', href: 'finland.html', description: 'Through our Finnish partner' },
  { label: 'Italy', href: 'italy.html', description: 'Through our Italian partner' },
  { label: 'Canada', href: 'canada.html', description: 'Schools and organisations in Canada' },
  { label: 'Australia', href: 'australia.html', description: 'Schools and organisations in Australia' },
  { label: 'International schools', href: 'international-schools.html', description: 'Middle East, Southeast Asia and beyond' },
]

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footerColumns = [
  {
    heading: 'Who we help', links: [
      { label: 'Education', href: 'education.html' },
      { label: 'Health and Social Care', href: 'health-social-care.html' },
      { label: 'Government and Local Authorities', href: 'government-local-authorities.html' },
      { label: 'Parents and Carers', href: 'parents-carers.html' },
    ],
  },
  {
    heading: 'Products', links: [
      { label: 'Widgit Online', href: 'widgit-online.html' },
      { label: 'InPrint 4', href: 'inprint-4.html' },
      { label: 'Plans and pricing', href: 'plans-pricing.html' },
      { label: 'Shop', href: 'shop.html' },
    ],
  },
  {
    heading: 'Symbols', links: [
      { label: 'Widgit Symbols', href: 'widgit-symbols.html' },
      { label: 'Licensing', href: 'symbol-licensing.html' },
      { label: 'Symbol-Friendly', href: 'symbol-friendly.html' },
      { label: 'Symbols in Action', href: 'symbols-in-action.html' },
    ],
  },
  {
    heading: 'Help', links: [
      { label: 'Support', href: 'support.html' },
      { label: 'Training', href: 'training.html' },
      { label: 'Events', href: 'events.html' },
      { label: 'Contact us', href: 'contact.html' },
    ],
  },
]

export const footerLegalLinks = [
  { label: 'Terms and Conditions', href: 'terms.html' },
  { label: 'Privacy Policy', href: 'privacy-policy.html' },
  { label: 'Widgit Symbol Copyright', href: 'symbol-copyright.html' },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Crumb = { label: string; href: string }
const bc = (...items: Crumb[]) => [{ label: 'Home', href: 'index.html' }, ...items]
const whoCrumb = { label: 'Who we help', href: 'who-we-help.html' }
const eduCrumb = { label: 'Education', href: 'education.html' }
const prodCrumb = { label: 'Products', href: 'products.html' }
const symCrumb = { label: 'Widgit Symbols', href: 'widgit-symbols.html' }
const supCrumb = { label: 'Support', href: 'support.html' }

const trialPromo = (id: string, side: 'left' | 'right' = 'left'): Block => ({
  component: 'wf-promo', props: {
    heading: 'Try Widgit Online free for 21 days',
    body: 'Make your first symbol resource in minutes. No installation, and you can cancel any time.',
    side, ctaLabel: 'Start free trial', ctaHref: 'free-trial.html', ctaId: id, mediaLabel: 'Widgit Online editor screenshot',
  },
})

const contactPromo = (id: string, heading: string, body: string, href: string, label = 'Get in touch'): Block => ({
  component: 'wf-promo', props: { heading, body, side: 'right', ctaLabel: label, ctaHref: href, ctaId: id, mediaLabel: 'Widgit team photo' },
})

/** Contact deep links. Each query param auto-selects a tab on the Contact form. */
const contactLink = (route: 'general' | 'quote' | 'licensing' | 'symbolfriendly' | 'support' | 'training', extra = '') =>
  `contact.html?${route}${extra ? '&' + extra : ''}#contact-form`

const quote = (q: string, role: string) => ({ quote: q, attribution: 'Placeholder quote', role })

// --- Sector page template (Who we help children) ---
function sectorPage(o: {
  slug: string; name: string; intro: string; challenge: string[]; how: { heading: string; description: string; href: string }[]
  caseHref: string; caseTitle: string; ctaLabel: string; ctaHref: string; ctaId: string; parent?: Crumb
}): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Who we help', heading: o.name, body: o.intro, ctaLabel: o.ctaLabel, ctaHref: o.ctaHref, ctaId: o.ctaId,
      secondaryLabel: 'See Symbols in Action', secondaryHref: 'symbols-in-action.html', mediaLabel: `${o.name} hero image`,
      breadcrumb: bc(o.parent || whoCrumb, { label: o.name, href: `${o.slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text-media', props: { heading: 'Why symbols matter here', body: o.challenge, side: 'left', mediaLabel: `Symbols in use: ${o.name}` } },
      { component: 'wf-cards', props: { heading: 'How Widgit can help', cols: 3, items: o.how.map((h) => ({ ...h, linkText: 'Find out more', imageLabel: h.heading })) } },
      { component: 'wf-quote', props: { items: [quote('Symbols have changed how we share information. People ask fewer questions because they understand the first time.', `${o.name} customer`)] } },
      { component: 'wf-cards', props: { heading: 'See it in action', cols: 1, items: [{ href: o.caseHref, heading: o.caseTitle, description: 'Read how one organisation put symbols to work.', linkText: 'Read the case study', imageLabel: 'Case study image', category: 'Case study' }] } },
      contactPromo(`cta-${o.slug}-promo`, `Talk to us about ${o.name.toLowerCase()}`, 'Tell us what you need and the right person at Widgit will get back to you.', contactLink('general')),
    ],
  }
}

// --- Product page template ---
function productPage(o: {
  slug: string; name: string; eyebrow: string; intro: string; what: string[]; features: { heading: string; description: string }[]
  who: string[]; faqs: { heading: string; body: string }[]; primary: { label: string; href: string }; extraBlocks?: Block[]
  tour?: { hotspots: { x: number; y: number; title: string; body: string }[]; screenshotLabel: string }
}): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: o.eyebrow, heading: o.name, body: o.intro, ctaLabel: o.primary.label, ctaHref: o.primary.href, ctaId: `cta-${o.slug}-hero`,
      secondaryLabel: 'See plans and pricing', secondaryHref: 'plans-pricing.html', mediaLabel: `${o.name} product screenshot`,
      breadcrumb: bc(prodCrumb, { label: o.name, href: `${o.slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text-media', props: { heading: `What is ${o.name}?`, body: o.what, side: 'left', mediaLabel: `${o.name} in use`, ctaLabel: '' } },
      o.tour
        ? { component: 'wf-product-tour', anchorId: 'features', props: { heading: 'Take a look around', intro: 'Select a number on the screen to find out about each feature.',
            tabs: [{ key: o.slug, label: o.name, screenshotLabel: o.tour.screenshotLabel, hotspots: o.tour.hotspots, features: o.features }] } }
        : { component: 'wf-cards', anchorId: 'features', props: { heading: 'Key features', cols: o.features.length === 4 ? 4 : 3, items: o.features.map((f) => ({ ...f, imageLabel: f.heading })) } },
      ...(o.extraBlocks || []),
      { component: 'wf-media', props: { type: 'video', label: `${o.name} 2-minute overview video` } },
      { component: 'wf-text-media', props: { heading: 'Who uses it', body: o.who, side: 'right', mediaLabel: 'Teacher creating a resource' } },
      { component: 'wf-accordion', props: { heading: `${o.name} questions`, items: o.faqs } },
      { component: 'wf-promo', props: {
        heading: 'Plans for every setting', body: 'Compare plans for individuals, single schools and whole trusts, with discounts for multiple sites.',
        side: 'left', ctaLabel: 'Compare plans', ctaHref: 'plans-pricing.html', ctaId: `cta-${o.slug}-pricing`, mediaLabel: 'Plans overview',
      } },
    ],
  }
}

// --- Country landing page template ---
function countryPage(o: { slug: string; country: string; partner: boolean; language: string; note: string }): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `Widgit in ${o.country}`, heading: o.partner ? `Widgit Symbols in ${o.country}, through our local partner` : `Widgit Symbols for ${o.country}`,
      body: o.note, ctaLabel: o.partner ? `Contact our ${o.country} partner` : 'Talk to our international team',
      ctaHref: contactLink('general', `country=${o.country}`), ctaId: `cta-${o.slug}-hero`, mediaLabel: `${o.country} landing image`,
      breadcrumb: bc({ label: o.country, href: `${o.slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text-media', props: {
        heading: o.partner ? 'Buy and get support locally' : 'Support across time zones',
        body: o.partner
          ? [`In ${o.country}, Widgit products are sold and supported by our partner [Partner name]. They offer training, invoicing and support in ${o.language}.`, 'Your licence works with the same Widgit Online account and symbol set used worldwide.']
          : [`Schools and organisations in ${o.country} buy directly from Widgit. Our international team can help with pricing, training and setup.`, 'Symbol vocabularies are available in English, with more languages on request.'],
        side: 'left', mediaLabel: o.partner ? 'Partner logo and team' : 'International team',
        ctaLabel: o.partner ? 'Get partner contact details' : 'See international pricing',
        ctaHref: o.partner ? contactLink('general', `country=${o.country}`) : 'plans-pricing-international.html',
      } },
      { component: 'wf-cards', props: { heading: `Available in ${o.country}`, cols: 3, items: [
        { href: 'widgit-online.html', heading: 'Widgit Online', description: `Create symbol resources in ${o.language}.`, imageLabel: 'Widgit Online', linkText: 'Explore Widgit Online' },
        { href: 'inprint-4.html', heading: 'InPrint 4', description: 'Design printed materials with symbols.', imageLabel: 'InPrint 4', linkText: 'Explore InPrint 4' },
        { href: 'resources.html', heading: 'Free resources', description: 'Ready-made symbol resources to download.', imageLabel: 'Resources', linkText: 'Browse resources' },
      ] } },
      contactPromo(`cta-${o.slug}-promo`, `Questions about Widgit in ${o.country}?`, 'Send us a message and we will route it to the right local contact.', contactLink('general', `country=${o.country}`)),
    ],
  }
}

// --- External hand-off page template ---
function handoffPage(o: { slug: string; name: string; destination: string; body: string; detail: string[]; backLabel: string; backHref: string; cards?: { heading: string; description: string }[] }): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'External hand-off', heading: o.name, body: o.body, ctaLabel: `Continue to ${o.destination}`, ctaHref: '#handoff-note', ctaId: `cta-handoff-${o.slug}`,
      secondaryLabel: o.backLabel, secondaryHref: o.backHref, mediaLabel: `${o.destination} screen`, breadcrumb: bc({ label: o.name, href: `${o.slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text', anchorId: 'handoff-note', props: { heading: 'What happens here in the live site', body: o.detail } },
      ...(o.cards ? [{ component: 'wf-cards', props: { heading: 'What you will find there', cols: o.cards.length > 3 ? 3 : o.cards.length, items: o.cards.map((c) => ({ ...c, imageLabel: c.heading })) } } as Block] : []),
      trialPromo(`cta-${o.slug}-promo`),
    ],
  }
}

function legalPage(heading: string, subtitle: string, slug: string, sections: { heading: string; body: string[] }[]): Page {
  return {
    hero: { component: 'wf-page-header', props: { heading, subtitle, breadcrumb: bc({ label: heading, href: `${slug}.html` }) } },
    blocks: sections.map((s) => ({ component: 'wf-text', props: s })),
  }
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

export const pages: Record<string, Page> = {
  // ===================== HOMEPAGE =====================
  homepage: {
    // Hero, mission line, product tour and closing symbol band follow the client-approved concept
    // (widgit.yoyoqa.site). Audience routing stays high up because UK education is the top priority.
    hero: { component: 'wf-symbol-arc', props: {
      heading: 'Remove barriers with symbols',
      ctaLabel: 'Find support for your setting', ctaHref: 'who-we-help.html', ctaId: 'cta-home-hero',
    } },
    blocks: [
      { component: 'wf-text', props: { statement: true, heading: 'We believe in empowering individuals',
        body: ['Our products use symbols to support text, helping people read, understand and communicate with ease.'] } },
      { component: 'wf-cards', props: { heading: 'Who we help', cols: 4, items: [
        { href: 'education.html', id: 'card-home-education', heading: 'Education', description: 'Inclusive classrooms where every pupil can follow, join in and succeed.', imageLabel: 'Classroom', linkText: 'Symbols for schools' },
        { href: 'health-social-care.html', heading: 'Health and Social Care', description: 'Clearer appointments, care plans and patient information.', imageLabel: 'Clinic', linkText: 'Symbols for health' },
        { href: 'government-local-authorities.html', heading: 'Government and Local Authorities', description: 'Accessible public information that everyone can act on.', imageLabel: 'Council office', linkText: 'Symbols for the public sector' },
        { href: 'parents-carers.html', heading: 'Parents and Carers', description: 'Routines, visits and conversations made easier at home.', imageLabel: 'Family at home', linkText: 'Support for families' },
      ] } },
      { component: 'wf-product-tour', anchorId: 'products', props: {
        heading: 'Explore our products',
        intro: 'Choose a product to see how it works. Select a number on the screen to find out about each feature.',
        linkLabel: 'See all products', linkHref: 'products.html',
        tabs: [
          { key: 'online', label: 'Widgit Online', screenshotLabel: 'Widgit Online dashboard screenshot',
            hotspots: [
              { x: 5, y: 40, title: 'Personalised sidebar', body: 'Move between files, layouts and resources from your own sidebar.' },
              { x: 38, y: 10, title: 'Search', body: 'Find files, layouts or resources in seconds.' },
              { x: 42, y: 52, title: 'Widgit Prompt', body: 'Describe what you need and create new symbol resources in seconds.' },
              { x: 88, y: 82, title: 'Inspiration Bank', body: 'Stuck for ideas? Browse real examples to find the right starting point.' },
            ],
            features: [
              { heading: 'Symbols as you type', description: 'Symbols appear above your text automatically.' },
              { heading: 'Ready-made templates', description: 'Timetables, social stories, worksheets and more.' },
              { heading: 'Share with colleagues', description: 'Shared folders for teams, schools and trusts.' },
            ],
            ctaLabel: 'Explore Widgit Online', ctaHref: 'widgit-online.html', ctaId: 'cta-home-tour-online' },
          { key: 'inprint', label: 'Widgit InPrint 4', screenshotLabel: 'InPrint 4 document editor screenshot',
            hotspots: [
              { x: 12, y: 45, title: 'Symbol library', body: 'Drag symbols straight into your document, filtered by category or keyword.' },
              { x: 55, y: 35, title: 'Document editor', body: 'Symbols follow your text as you type, ready for print.' },
              { x: 85, y: 20, title: 'Templates', body: 'Start from worksheets, schedules or communication boards.' },
            ],
            features: [
              { heading: '[15,000+] Widgit symbols', description: 'Drag and drop symbols, filtered by category or keyword.' },
              { heading: 'Symbols follow your text', description: 'Ideal for printed resources and visual schedules.' },
              { heading: 'Hundreds of smart templates', description: 'Worksheets, schedules and boards with symbols built in.' },
            ],
            ctaLabel: 'Explore InPrint 4', ctaHref: 'inprint-4.html', ctaId: 'cta-home-tour-inprint' },
          { key: 'health', label: 'Widgit Health', screenshotLabel: 'Widgit Health screenshot (product to be confirmed)',
            hotspots: [
              { x: 20, y: 30, title: 'Clinical symbols', body: 'Symbol sets designed for patient communication.' },
              { x: 60, y: 50, title: 'Patient profiles', body: 'Keep a communication profile for each patient so the whole care team uses the same symbols.' },
              { x: 85, y: 75, title: 'Easy Read', body: 'Create easy-read versions of clinical documents.' },
            ],
            features: [
              { heading: 'Clinical symbol sets', description: 'For patient communication in health and care settings. Approvals to be confirmed.' },
              { heading: 'Personalised communication', description: 'Consistent, familiar symbols for every patient.' },
              { heading: 'One-click Easy Read', description: 'Easy-read versions of clinical documents.' },
            ],
            ctaLabel: 'Symbols in health and care', ctaHref: 'health-social-care.html', ctaId: 'cta-home-tour-health' },
        ],
      } },
      { component: 'wf-statistics', props: { heading: 'Widgit at a glance (figures to be confirmed)', items: [
        { value: '[00,000+]', label: 'Widgit Symbols' },
        { value: '[0,000+]', label: 'Free and premium resources' },
        { value: '[00+]', label: 'Countries using Widgit' },
        { value: '[00,000+]', label: 'Schools and organisations' },
      ] } },
      { component: 'wf-promo', props: {
        heading: 'Widgit Symbols: a visual language for everyone',
        body: 'Learn how our symbol set works, license it for your own products, or become a Symbol-Friendly Organisation.',
        side: 'right', ctaLabel: 'Explore Widgit Symbols', ctaHref: 'widgit-symbols.html', ctaId: 'cta-home-symbols', mediaLabel: 'Symbol grid',
      } },
      { component: 'wf-quote', props: { items: [
        quote('Every child in my class can now follow the day. The visual timetable took me ten minutes to make.', 'Year 2 teacher, primary school'),
        quote('Rolling Widgit out across our trust gave every school the same language for inclusion.', 'Head of Inclusion, multi-academy trust'),
        quote('My daughter uses symbols to tell me how she feels. It has changed our evenings.', 'Parent'),
      ] } },
      { component: 'wf-cards', props: { heading: 'Already using Widgit?', cols: 4, items: [
        { href: 'support.html', id: 'card-home-support', heading: 'Get support', description: 'Fix a problem or find a guide.', linkText: 'Visit Support' },
        { href: 'resources.html', heading: 'Find resources', description: 'Download ready-made symbol materials.', linkText: 'Browse resources' },
        { href: 'training.html', heading: 'Book training', description: 'Courses for staff and whole schools.', linkText: 'See training' },
        { href: 'events.html', heading: 'Join an event', description: 'Webinars, study days and exhibitions.', linkText: 'See events' },
      ] } },
      { component: 'wf-logos', props: { heading: 'Trusted by schools, trusts and organisations', names: ['Customer logo', 'Customer logo', 'Customer logo', 'Customer logo', 'Customer logo'] } },
      { component: 'wf-symbol-arc', props: { heading: 'One visual language for everyone' } },
      trialPromo('cta-home-promo'),
    ],
  },

  // ===================== WHO WE HELP =====================
  'who-we-help': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Who we help', heading: 'Clear communication, wherever people need it',
      body: 'From classrooms to hospitals and museums, Widgit Symbols help people understand information and say what they need.',
      mediaLabel: 'Montage of settings using symbols', breadcrumb: bc(whoCrumb),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Education', cols: 4, items: [
        { href: 'education.html', heading: 'Education overview', description: 'How Widgit supports inclusion across a whole school.', imageLabel: 'Classroom', linkText: 'Explore education' },
        { href: 'school-trusts.html', id: 'card-who-trusts', heading: 'School trusts and groups (MATs)', description: 'One approach to symbols across every school in your trust.', imageLabel: 'Trust leaders meeting', linkText: 'For trusts' },
        { href: 'single-site-schools.html', heading: 'Single-site schools', description: 'Get every class using symbols, quickly and affordably.', imageLabel: 'Primary school', linkText: 'For schools' },
        { href: 'international-schools.html', heading: 'International schools', description: 'Support pupils learning in English as an additional language.', imageLabel: 'International school', linkText: 'For international schools' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Organisations and families', cols: 3, items: [
        { href: 'health-social-care.html', heading: 'Health and Social Care', description: 'Clearer appointments, care plans and patient leaflets.', imageLabel: 'Clinic', linkText: 'Symbols for health' },
        { href: 'government-local-authorities.html', heading: 'Government and Local Authorities', description: 'Accessible public information and consultations.', imageLabel: 'Council', linkText: 'Symbols for government' },
        { href: 'public-services.html', heading: 'Public Services', description: 'Libraries, transport and emergency services.', imageLabel: 'Public building', linkText: 'Symbols for public services' },
      ] } },
      { component: 'wf-cards', props: { cols: 2, items: [
        { href: 'leisure-tourism.html', heading: 'Leisure and Tourism', description: 'Museums, attractions and venues that welcome everyone.', imageLabel: 'Museum', linkText: 'Symbols for venues' },
        { href: 'parents-carers.html', id: 'card-who-parents', heading: 'Parents, Carers and Individuals', description: 'Routines, appointments and conversations at home.', imageLabel: 'Family', linkText: 'Support for families' },
      ] } },
      contactPromo('cta-who-promo', 'Not sure where to start?', 'Tell us about your setting and we will point you to the right products and people.', contactLink('general')),
    ],
  },

  education: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Education', heading: 'Inclusion for every pupil, not just some',
      body: 'Widgit Symbols support pupils with SEND, pupils learning English and anyone who benefits from seeing information as well as reading it.',
      ctaLabel: 'Start free trial', ctaHref: 'free-trial.html', ctaId: 'cta-edu-hero', secondaryLabel: 'See plans and pricing', secondaryHref: 'plans-pricing.html',
      mediaLabel: 'Primary classroom with symbol displays', breadcrumb: bc(whoCrumb, eduCrumb),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'What kind of school are you?', cols: 3, items: [
        { href: 'school-trusts.html', id: 'card-edu-trusts', heading: 'School trusts and groups (MATs)', description: 'Trust-wide licences, central admin and consistent practice.', imageLabel: 'Trust', linkText: 'For trusts' },
        { href: 'single-site-schools.html', id: 'card-edu-single-site', heading: 'Single-site schools', description: 'Primary, secondary and specialist schools.', imageLabel: 'School', linkText: 'For schools' },
        { href: 'international-schools.html', id: 'card-edu-international', heading: 'International schools', description: 'EAL support and pricing for schools outside the UK.', imageLabel: 'International school', linkText: 'For international schools' },
      ] } },
      { component: 'wf-text-media', props: {
        heading: 'More than a specialist tool',
        body: ['Symbols help the whole school: visual timetables in every classroom, clearer signage in corridors and accessible letters home to parents.', 'Teachers like Isobel use them to support a mixed class. SENCOs use them to build consistent practice across staff.'],
        side: 'left', mediaLabel: 'Symbol signage in a school corridor',
      } },
      { component: 'wf-statistics', props: { heading: 'Impact in schools (figures to be confirmed)', items: [
        { value: '[00%]', label: 'of UK special schools use Widgit' }, { value: '[0,000+]', label: 'Mainstream primary schools' }, { value: '[00]', label: 'Minutes to make a first resource' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Get started', cols: 3, items: [
        { href: 'resources.html', heading: 'Free classroom resources', description: 'Timetables, social stories and topic packs.', imageLabel: 'Resource pack', linkText: 'Browse resources' },
        { href: 'training.html', heading: 'Staff training', description: 'INSET and online courses for every role.', imageLabel: 'Training session', linkText: 'See training' },
        { href: 'symbols-in-action.html', heading: 'School case studies', description: 'How other schools use Widgit.', imageLabel: 'Case study', linkText: 'Read case studies' },
      ] } },
      trialPromo('cta-edu-promo', 'right'),
    ],
  },

  'school-trusts': sectorPage({
    slug: 'school-trusts', name: 'School trusts and groups (MATs)', parent: eduCrumb,
    intro: 'Give every school in your trust the same symbol tools, with central billing, admin and training.',
    challenge: ['Inclusion leads like Jane need consistent practice across many schools, without negotiating separate licences for each one.', 'A trust-wide Widgit licence gives every school the same tools and lets staff share resources between sites.'],
    how: [
      { heading: 'Trust-wide licensing', description: 'One agreement covering every school, priced by number of sites.', href: 'plans-pricing.html' },
      { heading: 'Central training', description: 'Train leads once and roll out across the trust.', href: 'training.html' },
      { heading: 'Shared resources', description: 'Build a resource library every school can use.', href: 'widgit-online.html' },
    ],
    caseHref: 'case-study-trust.html', caseTitle: 'How a 14-school trust standardised visual support',
    ctaLabel: 'Request a trust quote', ctaHref: contactLink('quote', 'orgType=School trust / MAT'), ctaId: 'cta-trusts-quote',
  }),

  'single-site-schools': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Education', heading: 'Symbols for your whole school',
      body: 'Help every class follow the day, understand instructions and take part, whether you are a primary, secondary or specialist school.',
      ctaLabel: 'Explore Widgit Online', ctaHref: 'widgit-online.html', ctaId: 'cta-single-site-online', secondaryLabel: 'See plans and pricing', secondaryHref: 'plans-pricing.html',
      mediaLabel: 'Pupils using a visual timetable', breadcrumb: bc(whoCrumb, eduCrumb, { label: 'Single-site schools', href: 'single-site-schools.html' }),
    } },
    blocks: [
      { component: 'wf-text-media', props: {
        heading: 'Quick to start, easy to share',
        body: ['Most schools start with Widgit Online. Staff can log in from anywhere and make a resource in minutes.', 'Add InPrint 4 for professional signage and printed materials, or Symwriter for pupils who write with symbols.'],
        side: 'left', mediaLabel: 'Teacher making a resource at home',
      } },
      { component: 'wf-cards', props: { heading: 'Products for schools', cols: 3, items: [
        { href: 'widgit-online.html', heading: 'Widgit Online', description: 'Make and share symbol resources in your browser.', imageLabel: 'Widgit Online', linkText: 'Explore Widgit Online' },
        { href: 'inprint-4.html', heading: 'InPrint 4', description: 'Design signage and printed materials.', imageLabel: 'InPrint 4', linkText: 'Explore InPrint 4' },
        { href: 'symwriter.html', heading: 'Symwriter', description: 'Symbol-supported writing for pupils.', imageLabel: 'Symwriter', linkText: 'Explore Symwriter' },
      ] } },
      { component: 'wf-quote', props: { items: [quote('We started with one class and within a term every teacher was using it.', 'SENCO, primary school')] } },
      trialPromo('cta-single-site-promo'),
    ],
  },

  'international-schools': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'International schools', heading: 'Support pupils learning in English',
      body: 'International schools across the Middle East, Southeast Asia and beyond use Widgit Symbols to help pupils with English as an additional language.',
      ctaLabel: 'See international pricing', ctaHref: 'plans-pricing-international.html', ctaId: 'cta-intl-pricing', secondaryLabel: 'Talk to our team', secondaryHref: contactLink('quote', 'orgType=International school'),
      mediaLabel: 'International school classroom', breadcrumb: bc(whoCrumb, eduCrumb, { label: 'International schools', href: 'international-schools.html' }),
    } },
    blocks: [
      { component: 'wf-text-media', props: {
        heading: 'One visual language for a multilingual school',
        body: ['When pupils speak many home languages, symbols give everyone a shared way to understand routines, instructions and topic vocabulary.', 'Widgit Online works anywhere with an internet connection, with licences priced in your currency.'],
        side: 'left', mediaLabel: 'Multilingual classroom',
      } },
      { component: 'wf-links', props: { heading: 'Looking for a specific country?', cols: 3, items: [
        { href: 'canada.html', label: 'Canada', description: 'Schools and organisations in Canada' },
        { href: 'australia.html', label: 'Australia', description: 'Schools and organisations in Australia' },
        { href: 'sweden.html', label: 'Nordic countries and Italy', description: 'Buy through our local partners' },
      ] } },
      contactPromo('cta-intl-promo', 'Plan a rollout across your school', 'Our international team can help with pricing, training and time zones.', contactLink('quote', 'orgType=International school')),
    ],
  },

  'health-social-care': sectorPage({
    slug: 'health-social-care', name: 'Health and Social Care',
    intro: 'Help patients, residents and service users understand appointments, treatments and their own care.',
    challenge: ['Health information is often complex and written for people who read easily. Symbols make leaflets, consent forms and care plans easier to follow.', 'Clearer information means fewer missed appointments and more confident conversations.'],
    how: [
      { heading: 'Accessible patient leaflets', description: 'Symbol-supported information made with InPrint 4.', href: 'inprint-4.html' },
      { heading: 'Hospital signage', description: 'Wayfinding and ward signs designed for you.', href: 'symbol-services.html' },
      { heading: 'Become Symbol-Friendly', description: 'Show patients you are committed to clear communication.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'case-study-nhs.html', caseTitle: 'Clearer appointments at an NHS trust',
    ctaLabel: 'Talk to our health team', ctaHref: contactLink('general', 'orgType=Health or social care'), ctaId: 'cta-health-hero',
  }),

  'government-local-authorities': sectorPage({
    slug: 'government-local-authorities', name: 'Government and Local Authorities',
    intro: 'Make public information, consultations and services accessible to every resident.',
    challenge: ['Councils and public bodies have a duty to communicate clearly with everyone, including people with learning disabilities and limited English.', 'Symbol-supported versions of key documents help more people understand and respond.'],
    how: [
      { heading: 'Easy-read documents', description: 'Create symbol-supported versions of public information.', href: 'inprint-4.html' },
      { heading: 'Authority-wide licences', description: 'Licences covering schools and services in your area.', href: 'plans-pricing.html' },
      { heading: 'Accessible digital content', description: 'Add symbols to your website with Point and BeClear.', href: 'digital-accessibility.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: public sector stories',
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general', 'orgType=Local authority'), ctaId: 'cta-gov-hero',
  }),

  'public-services': sectorPage({
    slug: 'public-services', name: 'Public Services',
    intro: 'Libraries, transport, police and emergency services that everyone can understand and use.',
    challenge: ['Public spaces can be confusing and stressful. Clear symbol signage helps people find their way and know what to expect.', 'Frontline staff can use symbol cards to communicate in difficult moments.'],
    how: [
      { heading: 'Symbol signage', description: 'Designed, produced and installed for you.', href: 'symbol-services.html' },
      { heading: 'Communication cards', description: 'Printable cards for frontline staff.', href: 'resources.html' },
      { heading: 'Become Symbol-Friendly', description: 'Show your commitment to accessible services.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: public services',
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general'), ctaId: 'cta-public-hero',
  }),

  'leisure-tourism': sectorPage({
    slug: 'leisure-tourism', name: 'Leisure and Tourism',
    intro: 'Help every visitor plan, enjoy and feel welcome at your museum, attraction or venue.',
    challenge: ['Visitors with autism, learning disabilities or limited English often need to know what to expect before they arrive.', 'Symbol-supported visit guides, maps and signage make days out easier for everyone.'],
    how: [
      { heading: 'Visit guides and maps', description: 'Symbol-supported guides your visitors can download.', href: 'symbol-services.html' },
      { heading: 'On-site signage', description: 'Clear wayfinding through your venue.', href: 'symbol-services.html' },
      { heading: 'Become Symbol-Friendly', description: 'Promote your venue as accessible.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'case-study-museum.html', caseTitle: 'A museum visit everyone can plan',
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general'), ctaId: 'cta-leisure-hero',
  }),

  'parents-carers': sectorPage({
    slug: 'parents-carers', name: 'Parents, Carers and Individuals',
    intro: 'Make routines, appointments and big changes easier to understand at home.',
    challenge: ['Parents like Jerome often hear about symbols from school or a speech and language therapist, but do not know where to start.', 'Free resources and simple tools let you use the same symbols at home that your child sees at school.'],
    how: [
      { heading: 'Free resources', description: 'Visual timetables and social stories to download.', href: 'resources.html' },
      { heading: 'Widgit Apps', description: 'Symbols on your phone or tablet.', href: 'widgit-apps.html' },
      { heading: 'Widgit Online for families', description: 'Make your own resources at home.', href: 'widgit-online.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: families',
    ctaLabel: 'Browse free resources', ctaHref: 'resources.html', ctaId: 'cta-parents-resources',
  }),

  // ===================== PRODUCTS =====================
  products: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Products', heading: 'Tools for making information clear',
      body: 'Software, apps and services that bring Widgit Symbols into classrooms, offices and homes.',
      ctaLabel: 'Compare plans', ctaHref: 'plans-pricing.html', ctaId: 'cta-products-hero', mediaLabel: 'Product family', breadcrumb: bc(prodCrumb),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Create with symbols', cols: 3, items: [
        { href: 'widgit-online.html', heading: 'Widgit Online', description: 'Make, store and share resources in your browser.', imageLabel: 'Widgit Online', linkText: 'Explore Widgit Online' },
        { href: 'inprint-4.html', heading: 'InPrint 4', description: 'Design professional printed materials.', imageLabel: 'InPrint 4', linkText: 'Explore InPrint 4' },
        { href: 'symwriter.html', heading: 'Symwriter', description: 'A word processor that adds symbols as you type.', imageLabel: 'Symwriter', linkText: 'Explore Symwriter' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Digital and mobile', cols: 3, items: [
        { href: 'digital-accessibility.html', heading: 'Digital Accessibility', description: 'Point and BeClear for websites and documents.', imageLabel: 'Point on a website', linkText: 'Explore digital tools' },
        { href: 'widgit-apps.html', heading: 'Widgit Apps', description: 'Widgit Writer, Widgit Go, Symbol2Write and Widgit Vocab.', imageLabel: 'Apps on a tablet', linkText: 'Explore the apps' },
        { href: 'partner-products.html', heading: 'Partner Products', description: 'Communication aids and tools that use Widgit Symbols.', imageLabel: 'Partner products', linkText: 'See partner products' },
      ] } },
      { component: 'wf-links', props: { heading: 'Pricing', cols: 2, items: [
        { href: 'plans-pricing.html', label: 'Plans and pricing', description: 'For UK individuals, schools and trusts' },
        { href: 'plans-pricing-international.html', label: 'Pricing for international schools', description: 'For schools outside the UK' },
      ] } },
      trialPromo('cta-products-promo'),
    ],
  },

  'widgit-online': productPage({
    slug: 'widgit-online', name: 'Widgit Online', eyebrow: 'Products',
    intro: 'Create symbol-supported resources in your browser. Nothing to install, and your work is saved to the cloud.',
    what: ['Widgit Online is our browser-based tool for making symbol resources. Type text and symbols appear automatically, then adjust the layout and print or share.', 'It includes thousands of templates, from visual timetables to social stories.'],
    features: [
      { heading: 'Symbols as you type', description: 'Automatic symbol support with easy word and symbol swaps.' },
      { heading: 'Ready-made templates', description: 'Start from timetables, stories, worksheets and more.' },
      { heading: 'Share with colleagues', description: 'Shared folders for teams, schools and trusts.' },
    ],
    who: ['Teachers, SENCOs and teaching assistants making daily classroom resources.', 'Speech and language therapists, carers and parents who need quick, clear materials.'],
    faqs: [
      { heading: 'Do I need to install anything?', body: 'No. Widgit Online runs in any modern browser on Windows, Mac and Chromebook.' },
      { heading: 'Can I try it before I buy?', body: 'Yes. Start a free trial and create resources straight away.' },
      { heading: 'Can my whole school share resources?', body: 'Yes. School and trust plans include shared folders and central user management.' },
    ],
    primary: { label: 'Start free trial', href: 'free-trial.html' },
    tour: { screenshotLabel: 'Widgit Online dashboard screenshot', hotspots: [
      { x: 5, y: 40, title: 'Personalised sidebar', body: 'Move between files, layouts and resources from your own sidebar.' },
      { x: 38, y: 10, title: 'Search', body: 'Find files, layouts or resources in seconds.' },
      { x: 42, y: 52, title: 'Widgit Prompt', body: 'Describe what you need and create new symbol resources in seconds.' },
      { x: 88, y: 82, title: 'Inspiration Bank', body: 'Browse real examples to find the right starting point.' },
    ] },
  }),

  'inprint-4': productPage({
    slug: 'inprint-4', name: 'InPrint 4', eyebrow: 'Products',
    intro: 'Design professional symbol-supported signage, books and printed materials.',
    what: ['InPrint 4 gives you full control over layout for printed materials, from classroom signs to patient leaflets.', 'Position text, symbols and images freely, and work with layers and styles.'],
    features: [
      { heading: 'Free-form layout', description: 'Place text, symbols and images anywhere on the page.' },
      { heading: 'Templates for print', description: 'Signs, books, worksheets and communication boards.' },
      { heading: 'Consistent styles', description: 'Apply your house style across documents.' },
    ],
    who: ['Specialist teachers and SENCOs producing printed classroom materials.', 'Health and public sector teams producing accessible leaflets and signs.'],
    faqs: [
      { heading: 'How is InPrint 4 different from Widgit Online?', body: 'Widgit Online is quick and template-led. InPrint 4 gives more design control for print.' },
      { heading: 'Can I upgrade from InPrint 3?', body: 'Upgrade options to be confirmed with Widgit.' },
    ],
    primary: { label: 'Buy InPrint 4', href: 'shop.html' },
    tour: { screenshotLabel: 'InPrint 4 document editor screenshot', hotspots: [
      { x: 12, y: 45, title: 'Symbol library', body: 'Drag symbols straight into your document, filtered by category or keyword.' },
      { x: 55, y: 35, title: 'Document editor', body: 'Place text, symbols and images anywhere on the page.' },
      { x: 85, y: 20, title: 'Templates', body: 'Start from signs, books, worksheets and communication boards.' },
    ] },
  }),

  symwriter: productPage({
    slug: 'symwriter', name: 'Symwriter', eyebrow: 'Products',
    intro: 'A word processor that adds symbols as you type, supporting emerging readers and writers.',
    what: ['Symwriter supports writing with symbols, giving learners visual feedback on every word.', 'It includes speech and word lists to help learners build sentences independently.'],
    features: [
      { heading: 'Symbols as you write', description: 'Immediate visual feedback for each word.' },
      { heading: 'Speech support', description: 'Hear words and sentences read aloud.' },
      { heading: 'Word grids', description: 'Topic vocabulary for independent writing.' },
    ],
    who: ['Learners developing literacy, and the teachers and TAs supporting them.'],
    faqs: [
      { heading: 'Who is Symwriter for?', body: 'Learners who benefit from visual support while writing, in mainstream and specialist settings.' },
      { heading: 'Does it work offline?', body: 'Platform and offline details to be confirmed with Widgit.' },
    ],
    primary: { label: 'Buy Symwriter', href: 'shop.html' },
  }),

  'digital-accessibility': productPage({
    slug: 'digital-accessibility', name: 'Digital Accessibility', eyebrow: 'Products',
    intro: 'Make websites and digital content easier to understand with Point and BeClear.',
    what: ['Point adds symbol support to web content so visitors can see a symbol for a word.', 'BeClear helps organisations write clearer, more accessible content.'],
    features: [
      { heading: 'Point', description: 'Symbol support for website visitors.' },
      { heading: 'BeClear', description: 'Clearer, accessible digital content.' },
      { heading: 'Easy setup', description: 'Add to your site with support from our team.' },
    ],
    who: ['Councils, health organisations and venues with public-facing websites.'],
    faqs: [
      { heading: 'Does this replace an easy-read version?', body: 'It supports understanding, but some content still benefits from a dedicated easy-read version.' },
      { heading: 'How does setup work?', body: 'Our team works with your web team to add it. Details to be confirmed.' },
    ],
    primary: { label: 'Talk to us about Point and BeClear', href: contactLink('general') },
  }),

  'widgit-apps': productPage({
    slug: 'widgit-apps', name: 'Widgit Apps', eyebrow: 'Products',
    intro: 'Widgit Symbols on phones and tablets, for communication and learning on the go.',
    what: ['Our apps bring symbols wherever people need them, from writing support to vocabulary and everyday communication.'],
    features: [
      { heading: 'Widgit Writer', description: 'Symbol-supported writing on a tablet.' },
      { heading: 'Widgit Go', description: 'Communication and learning activities on the go.' },
      { heading: 'Symbol2Write', description: 'Build sentences from symbols.' },
      { heading: 'Widgit Vocab', description: 'Build and practise topic vocabulary with symbols.' },
    ],
    who: ['Individuals, families and schools using tablets for communication and learning.'],
    faqs: [
      { heading: 'Which devices are supported?', body: 'Device support for each app to be confirmed with Widgit.' },
      { heading: 'Where do I download the apps?', body: 'From the relevant app store. Links to be added.' },
    ],
    primary: { label: 'Compare the apps', href: '#features' },
  }),

  'partner-products': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Products', heading: 'Partner Products',
      body: 'Communication aids, software and resources from trusted partners that work with Widgit Symbols.',
      ctaLabel: 'Visit the shop', ctaHref: 'shop.html', ctaId: 'cta-partner-hero', mediaLabel: 'Partner products', breadcrumb: bc(prodCrumb, { label: 'Partner Products', href: 'partner-products.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Communication aids', cols: 3, items: [
        { heading: 'GoTalk Now', description: 'From Attainment.', imageLabel: 'GoTalk Now' },
        { heading: 'Communication aids', description: 'From Liberator.', imageLabel: 'Liberator' },
        { heading: 'Smartbox AAC software and communication boards', description: 'From Smartbox.', imageLabel: 'Smartbox' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Learning and literacy', cols: 3, items: [
        { heading: 'Clicker', description: 'From Crick Software.', imageLabel: 'Clicker' },
        { heading: 'Read&Write', description: 'From Everway.', imageLabel: 'Read&Write' },
        { heading: 'Symplify', description: 'Partner product.', imageLabel: 'Symplify' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Environments', cols: 3, items: [
        { heading: 'Fun and Active Playgrounds', description: 'Symbol-supported playground equipment.', imageLabel: 'Playground' },
        { heading: 'Wall art', description: 'From Promote Your School.', imageLabel: 'Wall art' },
        { heading: 'Talk Stars', description: 'Partner product.', imageLabel: 'Talk Stars' },
      ] } },
      trialPromo('cta-partner-promo'),
    ],
  },

  'plans-pricing': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Plans and pricing', heading: 'Plans for every setting',
      body: 'Start with a free trial, then choose a plan for yourself, your school or your whole trust. Prices exclude VAT.',
      ctaLabel: 'Start a free trial', ctaHref: 'free-trial.html', ctaId: 'cta-pricing-trial', secondaryLabel: 'Request a quote', secondaryHref: contactLink('quote'),
      mediaLabel: 'Pricing illustration', breadcrumb: bc(prodCrumb, { label: 'Plans and pricing', href: 'plans-pricing.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Widgit Online plans', cols: 3, items: [
        { href: 'free-trial.html', heading: 'Individual: £[00] / year', description: 'One user. All symbols and templates. Ideal for parents, therapists and individual teachers.', linkText: 'Start free trial' },
        { href: 'free-trial.html', heading: 'School: £[000] / year', description: 'Unlimited staff at one school. Shared folders and admin tools.', linkText: 'Start free trial' },
        { href: contactLink('quote', 'orgType=School trust / MAT'), heading: 'Trust: priced per school', description: 'Every school in your trust, with central billing and admin.', linkText: 'Request a trust quote' },
      ] } },
      { component: 'wf-accordion', props: { heading: 'Pricing questions', items: [
        { heading: 'What happens when my trial ends?', body: 'You can choose a plan and keep everything you made. Nothing is charged automatically.' },
        { heading: 'Can I pay by invoice?', body: 'Yes, schools and organisations can pay by invoice or purchase order.' },
        { heading: 'Do you offer discounts?', body: 'Multi-site and trust discounts are available. Request a quote for details.' },
        { heading: 'Are you outside the UK?', body: 'See our pricing for international schools, or choose your region at the top of the page.' },
      ] } },
      { component: 'wf-links', props: { cols: 2, items: [
        { href: 'plans-pricing-international.html', label: 'Pricing for international schools', description: 'Plans in your currency' },
        { href: 'shop.html', label: 'Buy InPrint 4 and Symwriter', description: 'Desktop software in the Widgit Shop' },
      ] } },
      contactPromo('cta-pricing-promo', 'Need a bigger plan?', 'Tell us about your organisation and we will put together a quote.', contactLink('quote'), 'Request a quote'),
    ],
  },

  'plans-pricing-international': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Plans and pricing', heading: 'Pricing for international schools',
      body: 'Widgit Online plans for schools outside the UK, priced in your currency with support from our international team.',
      ctaLabel: 'Request a quote', ctaHref: contactLink('quote', 'orgType=International school'), ctaId: 'cta-intl-quote',
      secondaryLabel: 'Start a free trial', secondaryHref: 'free-trial.html', mediaLabel: 'International pricing illustration',
      breadcrumb: bc(prodCrumb, { label: 'Pricing for international schools', href: 'plans-pricing-international.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Plans', cols: 2, items: [
        { href: 'free-trial.html', heading: 'School: [currency] [000] / year', description: 'Unlimited staff at one school.', linkText: 'Start free trial' },
        { href: contactLink('quote', 'orgType=International school'), heading: 'School group: priced per school', description: 'For groups of international schools.', linkText: 'Request a quote' },
      ] } },
      { component: 'wf-text', props: { heading: 'Buying in a partner country?', body: ['If you are in Sweden, Norway, Finland or Italy, please buy through our local partner using the region switcher at the top of the page.'] } },
      contactPromo('cta-intlpricing-promo', 'Talk to our international team', 'We can help with pricing, invoicing and training across time zones.', contactLink('quote', 'orgType=International school')),
    ],
  },

  // ===================== WIDGIT SYMBOLS =====================
  'widgit-symbols': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'A visual language designed for understanding',
      body: 'Widgit Symbols are designed to be clear, consistent and easy to learn, supporting people of all ages and abilities.',
      ctaLabel: 'Explore licensing', ctaHref: 'symbol-licensing.html', ctaId: 'cta-symbols-hero', mediaLabel: 'Symbol set overview', breadcrumb: bc(symCrumb),
    } },
    blocks: [
      { component: 'wf-text-media', props: {
        heading: 'Designed with a clear structure',
        body: ['Every symbol follows the same design rules, so once people learn a few, they can understand many more.', 'Our symbols cover everyday vocabulary as well as curriculum topics, health and public life.'],
        side: 'left', mediaLabel: 'Symbol design schema',
      } },
      { component: 'wf-cards', props: { heading: 'Use Widgit Symbols', cols: 4, items: [
        { href: 'universal-language.html', heading: 'Symbols as a Universal Language', description: 'Supporting understanding across languages.', imageLabel: 'Globe of symbols', linkText: 'Learn more' },
        { href: 'symbol-licensing.html', id: 'card-symbols-licensing', heading: 'Copyright and licensing', description: 'Use our symbols in your own products.', imageLabel: 'Licensing', linkText: 'Licensing options' },
        { href: 'symbol-friendly.html', heading: 'Become Symbol-Friendly', description: 'Show your commitment to accessibility.', imageLabel: 'Symbol-Friendly badge', linkText: 'Find out how' },
        { href: 'symbol-services.html', heading: 'Symbol Services', description: 'Signage and materials made for you.', imageLabel: 'Signage', linkText: 'See services' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Symbols in Action', cols: 3, items: [
        { href: 'case-study-trust.html', heading: 'A 14-school trust standardises visual support', category: 'Education', imageLabel: 'Trust case study', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', heading: 'Clearer appointments at an NHS trust', category: 'Health', imageLabel: 'NHS case study', linkText: 'Read the story' },
        { href: 'case-study-museum.html', heading: 'A museum visit everyone can plan', category: 'Leisure', imageLabel: 'Museum case study', linkText: 'Read the story' },
      ] } },
      contactPromo('cta-symbols-promo', 'Want to use Widgit Symbols in your work?', 'Tell us what you have in mind and our licensing team will get back to you.', contactLink('licensing'), 'Make a licensing enquiry'),
    ],
  },

  'universal-language': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'Symbols as a Universal Language',
      body: 'Symbols help people understand information whatever language they speak, and whatever their reading level.',
      mediaLabel: 'Symbols with multiple languages', breadcrumb: bc(symCrumb, { label: 'Symbols as a Universal Language', href: 'universal-language.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'One picture, many languages', body: ['Widgit Symbols are used alongside many languages around the world. A symbol for "lunch" means the same thing to a pupil in Leeds, Stockholm or Dubai.', 'This makes them valuable in multilingual classrooms, international organisations and public spaces with visitors from many countries.'] } },
      { component: 'wf-text-media', props: { heading: 'Supporting new arrivals', body: ['Symbols give refugees and newly arrived families a way to understand key information before they learn the local language.'], side: 'right', mediaLabel: 'Welcome pack with symbols' } },
      { component: 'wf-links', props: { heading: 'Explore further', cols: 3, items: [
        { href: 'international-schools.html', label: 'International schools' },
        { href: 'symbols-in-action.html', label: 'Symbols in Action' },
        { href: 'symbol-licensing.html', label: 'Licensing Widgit Symbols' },
      ] } },
      trialPromo('cta-universal-promo'),
    ],
  },

  'symbol-friendly': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'Become a Symbol-Friendly® Organisation',
      body: 'Show visitors, patients and staff that you are committed to clear, accessible communication.',
      ctaLabel: 'Apply to become Symbol-Friendly', ctaHref: contactLink('symbolfriendly'), ctaId: 'cta-symbol-friendly-apply',
      mediaLabel: 'Symbol-Friendly badge on a building', breadcrumb: bc(symCrumb, { label: 'Become a Symbol-Friendly Organisation', href: 'symbol-friendly.html' }),
    } },
    blocks: [
      { component: 'wf-text-media', props: { heading: 'What it means', body: ['Symbol-Friendly Organisations use Widgit Symbols to make key information accessible, and display the Symbol-Friendly mark so people know what to expect.'], side: 'left', mediaLabel: 'Symbol-Friendly mark' } },
      { component: 'wf-cards', props: { heading: 'How it works', cols: 3, items: [
        { heading: '1. Tell us about your organisation', description: 'Send an enquiry and we will arrange a conversation.' },
        { heading: '2. Make your information accessible', description: 'We help you plan signage, documents and staff training.' },
        { heading: '3. Display the mark', description: 'Use the Symbol-Friendly mark on your site and materials.' },
      ] } },
      { component: 'wf-accordion', props: { heading: 'Questions', items: [
        { heading: 'Who can become Symbol-Friendly?', body: 'Any organisation that serves the public, from GP surgeries to museums.' },
        { heading: 'Is there a cost?', body: 'Costs depend on the size of your organisation. Details to be confirmed.' },
      ] } },
      contactPromo('cta-symbol-friendly-promo', 'Ready to start?', 'Your enquiry goes straight to our Symbol-Friendly team.', contactLink('symbolfriendly'), 'Apply now'),
    ],
  },

  'symbol-licensing': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'Symbol copyright and licensing',
      body: 'Use Widgit Symbols in your own publications, products and services, from a single leaflet to a commercial app.',
      ctaLabel: 'Make a licensing enquiry', ctaHref: contactLink('licensing'), ctaId: 'cta-licensing-enquire',
      mediaLabel: 'Symbols in a published book', breadcrumb: bc(symCrumb, { label: 'Symbol copyright and licensing', href: 'symbol-licensing.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'When do you need a licence?', body: ['If you use Widgit Symbols beyond your own classroom or organisation, for example in something you sell, publish or distribute widely, you need a licence.', 'Our full copyright terms explain what is allowed without a licence.'] } },
      { component: 'wf-cards', props: { heading: 'Licence types', cols: 3, items: [
        { heading: 'Publishing', description: 'Books, leaflets and printed materials for distribution.', imageLabel: 'Publishing' },
        { heading: 'Product and app integration', description: 'Integrate Widgit Symbols into your own software or devices.', imageLabel: 'App integration' },
        { heading: 'Signage and environments', description: 'Symbols on buildings, transport and public spaces.', imageLabel: 'Signage' },
      ] } },
      { component: 'wf-links', props: { cols: 2, items: [
        { href: 'symbol-copyright.html', label: 'Read the Widgit Symbol Copyright terms', description: 'What you can do without a licence' },
        { href: 'symbol-services.html', label: 'Prefer us to make it for you?', description: 'See Symbol Services' },
      ] } },
      contactPromo('cta-licensing-promo', 'Tell us about your project', 'Licensing enquiries go straight to our licensing team.', contactLink('licensing'), 'Make a licensing enquiry'),
    ],
  },

  'symbol-services': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'Symbol Services',
      body: 'Our team designs and produces accessible symbol materials, signage and custom symbols for your organisation.',
      ctaLabel: 'Discuss a project', ctaHref: contactLink('licensing', 'licenceUse=Signage'), ctaId: 'cta-services-hero',
      mediaLabel: 'Symbol signage installation', breadcrumb: bc(symCrumb, { label: 'Symbol Services', href: 'symbol-services.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'What we offer', cols: 3, items: [
        { heading: 'Signage', description: 'Wayfinding and room signs, designed and produced.', imageLabel: 'Signage' },
        { heading: 'Individual symbol design', description: 'New symbols for your specific vocabulary.', imageLabel: 'Symbol design' },
        { heading: 'Accessible symbol materials', description: 'Leaflets, guides and documents made accessible.', imageLabel: 'Accessible leaflet' },
      ] } },
      { component: 'wf-cards', props: { cols: 2, items: [
        { heading: 'Symbol surveys', description: 'An audit of where symbols would help most.', imageLabel: 'Survey' },
        { heading: 'Product design and manufacture', description: 'Symbol-supported products made to order.', imageLabel: 'Product' },
      ] } },
      { component: 'wf-quote', props: { items: [quote('The new signage made our building easier for everyone to navigate.', 'Facilities manager, hospital')] } },
      contactPromo('cta-services-promo', 'Start a project', 'Tell us what you need and we will come back with options.', contactLink('licensing', 'licenceUse=Signage'), 'Discuss a project'),
    ],
  },

  'symbols-in-action': {
    hero: { component: 'wf-page-header', props: {
      heading: 'Symbols in Action', subtitle: 'Stories from schools, health services and organisations using Widgit Symbols.',
      breadcrumb: bc(symCrumb, { label: 'Symbols in Action', href: 'symbols-in-action.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { cols: 3, filters: ['All', 'Education', 'Health', 'Leisure', 'Public sector'], items: [
        { href: 'case-study-trust.html', category: 'Education', heading: 'A 14-school trust standardises visual support', description: 'One licence, one approach, every school.', imageLabel: 'Trust', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', category: 'Health', heading: 'Clearer appointments at an NHS trust', description: 'Symbol-supported letters reduce missed appointments.', imageLabel: 'Hospital', linkText: 'Read the story' },
        { href: 'case-study-museum.html', category: 'Leisure', heading: 'A museum visit everyone can plan', description: 'Visual guides for visitors with autism.', imageLabel: 'Museum', linkText: 'Read the story' },
        { href: 'case-study-trust.html', category: 'Education', heading: 'Symbols across a primary school', description: 'From one classroom to the whole school.', imageLabel: 'Primary school', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', category: 'Public sector', heading: 'Easy-read council consultation', description: 'More residents had their say.', imageLabel: 'Council', linkText: 'Read the story' },
        { href: 'case-study-museum.html', category: 'Leisure', heading: 'Accessible signage at a visitor attraction', description: 'Wayfinding for every visitor.', imageLabel: 'Attraction', linkText: 'Read the story' },
      ] } },
      trialPromo('cta-sia-promo'),
    ],
  },

  'case-study-trust': caseStudy('case-study-trust', 'Education', 'A 14-school trust standardises visual support',
    'How one multi-academy trust gave every school the same tools and approach to symbols.',
    ['Before Widgit, each school in the trust bought its own resources. Practice varied, and staff moving between schools had to relearn tools.', 'The Head of Inclusion set a goal: one consistent approach to visual support across all 14 schools.'],
    ['The trust moved to a single Widgit Online licence with shared folders. Inclusion leads were trained centrally and cascaded training to staff.', 'Within a year, every school used the same visual timetable format, and resources were shared across sites.'],
    'school-trusts.html', 'For school trusts'),
  'case-study-nhs': caseStudy('case-study-nhs', 'Health', 'Clearer appointments at an NHS trust',
    'Symbol-supported appointment letters helped patients understand what to expect.',
    ['Patients with learning disabilities were missing appointments because letters were hard to follow.', 'The trust worked with Widgit to redesign key letters and signage.'],
    ['Appointment letters now use symbols to explain the time, place and what to bring.', 'Staff report fewer phone calls asking for clarification. Figures to be confirmed with the client.'],
    'health-social-care.html', 'For health and social care'),
  'case-study-museum': caseStudy('case-study-museum', 'Leisure', 'A museum visit everyone can plan',
    'A visual guide helped visitors with autism plan their day before they arrived.',
    ['Families told the museum that not knowing what to expect stopped them visiting.', 'The museum commissioned a symbol-supported visit guide and wayfinding signs.'],
    ['Visitors can now download the guide before their visit and follow the same symbols on site.', 'The museum became a Symbol-Friendly Organisation.'],
    'leisure-tourism.html', 'For leisure and tourism'),

  // ===================== RESOURCES =====================
  resources: {
    hero: { component: 'wf-page-header', props: {
      heading: 'Resources', subtitle: 'Ready-made symbol resources for classrooms, homes and organisations. Filter by subscription, format or topic.',
      breadcrumb: bc({ label: 'Resources', href: 'resources.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'Filter resources', body: ['Subscription tier: Free · Widgit Online subscribers', 'Format: Printable PDF · Widgit Online template · Communication board', 'The tabs below filter by topic. Tier and format filters will appear as dropdowns in design.'] } },
      { component: 'wf-cards', props: { cols: 4, filters: ['All', 'Routines', 'Social stories', 'Literacy', 'Health'], items: [
        { href: 'resource-visual-timetable.html', id: 'card-res-visual-timetable', category: 'Routines', heading: 'Daily visual timetable', description: 'Free · Printable PDF', imageLabel: 'Visual timetable', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Social stories', heading: 'Going to the dentist', description: 'Free · Printable PDF', imageLabel: 'Dentist social story', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Literacy', heading: 'Phonics word mat', description: 'Subscribers · Widgit Online template', imageLabel: 'Phonics mat', linkText: 'View resource' },
        { href: 'resource-visual-timetable.html', category: 'Routines', heading: 'Morning routine strip', description: 'Free · Printable PDF', imageLabel: 'Morning routine', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Health', heading: 'Feelings board', description: 'Free · Communication board', imageLabel: 'Feelings board', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Social stories', heading: 'Starting a new school', description: 'Subscribers · Widgit Online template', imageLabel: 'New school story', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Literacy', heading: 'Story sequencing cards', description: 'Subscribers · Printable PDF', imageLabel: 'Sequencing cards', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Health', heading: 'Hand-washing steps', description: 'Free · Printable PDF', imageLabel: 'Hand-washing', linkText: 'View resource' },
      ] } },
      trialPromo('cta-resources-promo'),
    ],
  },

  'resource-visual-timetable': resourcePage('resource-visual-timetable', 'Routines', 'Daily visual timetable', 'Free · Printable PDF',
    'A printable timetable that helps children see and follow the shape of their day at school or at home.',
    ['Print and cut out the symbol cards, then arrange them in order for the day.', 'Move each card to the "finished" box as the activity ends, so your child can see what comes next.']),
  'resource-dentist-story': resourcePage('resource-dentist-story', 'Social stories', 'Going to the dentist', 'Free · Printable PDF',
    'A symbol-supported social story that explains what happens at a dental appointment.',
    ['Read the story together a few days before the appointment, and again on the day.', 'Each page shows one step, from the waiting room to going home.']),
  'resource-phonics-mat': resourcePage('resource-phonics-mat', 'Literacy', 'Phonics word mat', 'Subscribers · Widgit Online template',
    'An editable phonics mat with symbol-supported words for each sound.',
    ['Open the template in Widgit Online to change the words for your class.', 'Print it as a desk mat or display it on the board.']),

  // ===================== SUPPORT =====================
  support: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'How can we help?',
      body: 'Find answers, guides and training, or get in touch with our support team.',
      ctaLabel: 'Search Support Docs', ctaHref: 'support-docs.html', ctaId: 'cta-support-hero', mediaLabel: 'Support team', breadcrumb: bc(supCrumb),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Get help', cols: 3, items: [
        { href: 'technical-support.html', id: 'card-support-technical', heading: 'Technical Support', description: 'Installation, licence keys and account problems.', imageLabel: 'Technical support', linkText: 'Get technical help' },
        { href: 'faqs.html', heading: 'FAQs', description: 'Quick answers to common questions.', imageLabel: 'FAQs', linkText: 'Read FAQs' },
        { href: 'support-docs.html', heading: 'Support Docs', description: 'Step-by-step guides for every product.', imageLabel: 'Support docs', linkText: 'Open Support Docs' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Learn and connect', cols: 3, items: [
        { href: 'training.html', heading: 'Training', description: 'Courses for individuals and whole schools.', imageLabel: 'Training', linkText: 'See training' },
        { href: 'events.html', heading: 'Events', description: 'Webinars, exhibitions and study days.', imageLabel: 'Events', linkText: 'See events' },
        { href: 'widgit-centres.html', heading: 'Widgit Centres', description: 'Local centres for advice and demos.', imageLabel: 'Widgit Centre', linkText: 'Find a centre' },
      ] } },
      contactPromo('cta-support-promo', 'Still need help?', 'Send a message to our support team and include your licence number if you have it.', contactLink('support'), 'Contact support'),
    ],
  },

  'technical-support': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'Technical Support',
      body: 'Help with installing software, activating licences and managing your Widgit Online account.',
      ctaLabel: 'Contact technical support', ctaHref: contactLink('support'), ctaId: 'cta-tech-hero', mediaLabel: 'Technical support',
      breadcrumb: bc(supCrumb, { label: 'Technical Support', href: 'technical-support.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Try these first', cols: 3, items: [
        { href: 'faqs.html', id: 'card-tech-faqs', heading: 'Common fixes', description: 'Answers to the problems we see most.', linkText: 'Read FAQs' },
        { href: 'support-docs.html', heading: 'Installation guides', description: 'Step-by-step installs for InPrint 4 and Symwriter.', linkText: 'Open guides' },
        { href: 'login.html', heading: 'Reset your password', description: 'Get back into Widgit Online.', linkText: 'Go to log in' },
      ] } },
      { component: 'wf-text', props: { heading: 'Before you contact us', body: ['Please have your licence number or Widgit Online email address ready, plus the product name and version.', 'Support hours: [to be confirmed].'] } },
      contactPromo('cta-tech-promo', 'Still stuck?', 'Our support team will reply by email.', contactLink('support'), 'Contact support'),
    ],
  },

  faqs: {
    hero: { component: 'wf-page-header', props: { heading: 'Frequently asked questions', subtitle: 'Quick answers about accounts, licences and products.', breadcrumb: bc(supCrumb, { label: 'FAQs', href: 'faqs.html' }) } },
    blocks: [
      { component: 'wf-accordion', props: { heading: 'Accounts and licences', items: [
        { heading: 'How do I add staff to our school account?', body: 'School admins can invite staff from the Widgit Online admin area.' },
        { heading: 'Where do I find my licence number?', body: 'It is in your order confirmation email and in My Shop Account.' },
        { heading: 'Can I move my licence to a new computer?', body: 'Yes. Deactivate it on the old computer first. See Support Docs for steps.' },
      ] } },
      { component: 'wf-accordion', props: { heading: 'Products', items: [
        { heading: 'Which product should I choose?', body: 'Most schools start with Widgit Online. InPrint 4 suits detailed print design.' },
        { heading: 'Do Widgit products work on Chromebooks?', body: 'Widgit Online works in Chrome. Desktop software requires Windows or Mac.' },
      ] } },
      contactPromo('cta-faqs-contact', 'Did not find your answer?', 'Send your question to our support team.', contactLink('support'), 'Contact support'),
    ],
  },

  training: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'Training',
      body: 'Courses for teachers, support staff, therapists and whole organisations, online or in person.',
      ctaLabel: 'Enquire about training', ctaHref: contactLink('training'), ctaId: 'cta-training-hero', mediaLabel: 'Training session',
      breadcrumb: bc(supCrumb, { label: 'Training', href: 'training.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Courses', cols: 3, items: [
        { href: 'events.html', heading: 'Getting started with Widgit Online', description: 'Online · 1 hour', imageLabel: 'Course', linkText: 'See dates' },
        { href: 'events.html', heading: 'Symbols for inclusive classrooms', description: 'Online or in school · Half day', imageLabel: 'Course', linkText: 'See dates' },
        { href: contactLink('training'), heading: 'Whole-school INSET', description: 'In person · Tailored to your school', imageLabel: 'INSET', linkText: 'Enquire' },
      ] } },
      { component: 'wf-quote', props: { items: [quote('The INSET gave every member of staff the confidence to start the next day.', 'Deputy Head, primary school')] } },
      contactPromo('cta-training-promo', 'Plan training for your team', 'Tell us about your team and we will suggest the right course.', contactLink('training'), 'Enquire about training'),
    ],
  },

  events: {
    hero: { component: 'wf-page-header', props: { heading: 'Events', subtitle: 'Webinars, exhibitions, presentations, conferences, study days and training. Filter by type.', breadcrumb: bc(supCrumb, { label: 'Events', href: 'events.html' }) } },
    blocks: [
      { component: 'wf-cards', props: { cols: 3, filters: ['All', 'Online', 'In person'], items: [
        { href: 'event-webinar.html', category: 'Online', heading: 'Webinar: Symbols in the mainstream classroom', description: 'Webinar · [Date] · Free', imageLabel: 'Webinar', linkText: 'View event' },
        { href: 'event-exhibition.html', category: 'In person', heading: 'Widgit at the Education Show', description: 'Exhibition · [Date] · [Venue]', imageLabel: 'Exhibition', linkText: 'View event' },
        { href: 'event-webinar.html', category: 'Online', heading: 'Getting started with Widgit Online', description: 'Training · [Date] · Free', imageLabel: 'Training', linkText: 'View event' },
        { href: 'event-exhibition.html', category: 'In person', heading: 'SEND study day', description: 'Study day · [Date] · [Venue]', imageLabel: 'Study day', linkText: 'View event' },
        { href: 'event-exhibition.html', category: 'In person', heading: 'Inclusive communication conference', description: 'Conference · [Date] · [Venue]', imageLabel: 'Conference', linkText: 'View event' },
        { href: 'event-webinar.html', category: 'Online', heading: 'Presentation: symbols in healthcare', description: 'Presentation · [Date] · Free', imageLabel: 'Presentation', linkText: 'View event' },
      ] } },
      trialPromo('cta-events-promo'),
    ],
  },

  'event-webinar': eventPage('event-webinar', 'Online · Webinar', 'Webinar: Symbols in the mainstream classroom',
    'A free 45-minute webinar for primary teachers on using symbols with the whole class.',
    ['Learn simple ways to use symbols for routines, instructions and vocabulary in a mixed class.', 'Includes a live demo of Widgit Online and time for questions.'], '[Date] · [Time] UK · Online'),
  'event-exhibition': eventPage('event-exhibition', 'In person · Exhibition', 'Widgit at the Education Show',
    'Visit our stand to see the latest Widgit products and talk to our team.',
    ['Get a hands-on demo of Widgit Online and InPrint 4.', 'Book a time with our education team in advance, or just drop by.'], '[Date] · [Venue] · Stand [00]'),

  'widgit-centres': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'Widgit Centres',
      body: 'Widgit Centres are local organisations offering advice, demonstrations and training in using symbols.',
      ctaLabel: 'Ask about your nearest centre', ctaHref: contactLink('general'), ctaId: 'cta-centres-hero', mediaLabel: 'Map of Widgit Centres',
      breadcrumb: bc(supCrumb, { label: 'Widgit Centres', href: 'widgit-centres.html' }),
    } },
    blocks: [
      { component: 'wf-media', props: { type: 'image', label: 'Interactive map of centres (placeholder)' } },
      { component: 'wf-cards', props: { heading: 'Centres', cols: 3, items: [
        { heading: '[Centre name], North West', description: 'Advice and demos. By appointment.' },
        { heading: '[Centre name], Midlands', description: 'Training and resource days.' },
        { heading: '[Centre name], South East', description: 'Advice for families and schools.' },
      ] } },
      trialPromo('cta-centres-promo'),
    ],
  },

  // ===================== CONTACT (routed form) =====================
  contact: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Contact us', heading: 'Get in touch',
      body: 'Choose what your message is about and it will go straight to the right team.',
      mediaLabel: 'Widgit office', breadcrumb: bc({ label: 'Contact us', href: 'contact.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { body: ['Pick a topic below. Sales, licensing, Symbol-Friendly, support and training enquiries are each routed to a dedicated team, so you will hear from someone who can help. We aim to reply within [2] working days.'] } },
      { component: 'wf-form', anchorId: 'contact-form', props: {
        variantsLabel: 'Enquiry type',
        variants: [
          { key: 'general', tabLabel: 'General', autoSelectParam: 'general', heading: 'General enquiry', intro: 'Goes to our customer team.', submitLabel: 'Send message', submitId: 'submit-contact-general',
            successHeading: 'Message sent', successBody: 'Our customer team will reply within 2 working days.',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Email address', type: 'email', required: true },
              { name: 'orgType', label: 'Type of organisation', type: 'select', options: ['Single school', 'School trust / MAT', 'International school', 'Local authority', 'Health or social care', 'Parent or carer', 'Other'] },
              { name: 'country', label: 'Country', type: 'text', defaultValue: 'United Kingdom' },
              { name: 'message', label: 'Message', type: 'textarea', required: true },
            ] },
          { key: 'quote', tabLabel: 'Sales and quotes', autoSelectParam: 'quote', heading: 'Request a quote', intro: 'Goes to our sales team.', submitLabel: 'Request quote', submitId: 'submit-contact-quote',
            successHeading: 'Quote request sent', successBody: 'Our sales team will be in touch with a quote within 2 working days.',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Work email', type: 'email', required: true },
              { name: 'organisation', label: 'Organisation name', type: 'text', required: true },
              { name: 'orgType', label: 'Type of organisation', type: 'select', required: true, options: ['Single school', 'School trust / MAT', 'International school', 'Local authority', 'Health or social care', 'Other'] },
              { name: 'sites', label: 'Number of schools or sites', type: 'number' },
              { name: 'product', label: 'Products you are interested in', type: 'select', options: ['Widgit Online', 'InPrint 4', 'Symwriter', 'Digital Accessibility', 'Not sure yet'] },
              { name: 'message', label: 'Anything else we should know?', type: 'textarea' },
            ] },
          { key: 'licensing', tabLabel: 'Symbol licensing', autoSelectParam: 'licensing', heading: 'Licensing enquiry', intro: 'Goes to our licensing team.', submitLabel: 'Send licensing enquiry', submitId: 'submit-contact-licensing',
            successHeading: 'Enquiry sent', successBody: 'Our licensing team will review your project and reply within 5 working days.',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Work email', type: 'email', required: true },
              { name: 'organisation', label: 'Organisation name', type: 'text', required: true },
              { name: 'licenceUse', label: 'How do you want to use the symbols?', type: 'select', required: true, options: ['Publishing', 'Product or app integration', 'Signage', 'Website or digital', 'Other'] },
              { name: 'message', label: 'Tell us about your project', type: 'textarea', required: true },
            ] },
          { key: 'symbolfriendly', tabLabel: 'Symbol-Friendly', autoSelectParam: 'symbolfriendly', heading: 'Become Symbol-Friendly', intro: 'Goes to our Symbol-Friendly team.', submitLabel: 'Send application', submitId: 'submit-contact-symbolfriendly',
            successHeading: 'Application received', successBody: 'Our Symbol-Friendly team will arrange a conversation with you.',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Work email', type: 'email', required: true },
              { name: 'organisation', label: 'Organisation name', type: 'text', required: true },
              { name: 'orgType', label: 'Type of organisation', type: 'select', options: ['School', 'Health or social care', 'Local authority', 'Public service', 'Leisure or tourism', 'Other'] },
              { name: 'message', label: 'What would you like to make accessible?', type: 'textarea' },
            ] },
          { key: 'support', tabLabel: 'Technical support', autoSelectParam: 'support', heading: 'Technical support', intro: 'Goes to our support team.', submitLabel: 'Send to support', submitId: 'submit-contact-support',
            successHeading: 'Support request sent', successBody: 'Our support team will reply by email. Your reference number is [WS-00000].',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Email address', type: 'email', required: true },
              { name: 'product', label: 'Product', type: 'select', required: true, options: ['Widgit Online', 'InPrint 4', 'Symwriter', 'Widgit Apps', 'Point or BeClear', 'Other'] },
              { name: 'licence', label: 'Licence number (if you have it)', type: 'text' },
              { name: 'message', label: 'Describe the problem', type: 'textarea', required: true },
            ] },
          { key: 'training', tabLabel: 'Training', autoSelectParam: 'training', heading: 'Training enquiry', intro: 'Goes to our training team.', submitLabel: 'Send training enquiry', submitId: 'submit-contact-training',
            successHeading: 'Enquiry sent', successBody: 'Our training team will be in touch to plan your session.',
            fields: [
              { name: 'name', label: 'Your name', type: 'text', required: true },
              { name: 'email', label: 'Email address', type: 'email', required: true },
              { name: 'organisation', label: 'Organisation name', type: 'text' },
              { name: 'attendees', label: 'Number of attendees', type: 'number' },
              { name: 'format', label: 'Preferred format', type: 'radio', options: ['Online', 'In person', 'Not sure'] },
              { name: 'message', label: 'What would you like to cover?', type: 'textarea' },
            ] },
        ],
      } },
    ],
  },

  // ===================== SEARCH =====================
  search: {
    hero: { component: 'wf-page-header', props: { heading: 'Search', subtitle: 'Showing 8 results for "visual timetable". Search box sits here in design.', breadcrumb: bc({ label: 'Search', href: 'search.html' }) } },
    blocks: [
      { component: 'wf-cards', props: { cols: 4, filters: ['All', 'Resources', 'Products', 'Support', 'Symbols'], items: [
        { href: 'resource-visual-timetable.html', category: 'Resources', heading: 'Daily visual timetable', description: 'Free printable timetable.', linkText: 'View resource' },
        { href: 'resource-visual-timetable.html', category: 'Resources', heading: 'Morning routine strip', description: 'Free printable routine.', linkText: 'View resource' },
        { href: 'widgit-online.html', category: 'Products', heading: 'Widgit Online', description: 'Make timetables in your browser.', linkText: 'View product' },
        { href: 'inprint-4.html', category: 'Products', heading: 'InPrint 4', description: 'Print-ready timetable templates.', linkText: 'View product' },
        { href: 'faqs.html', category: 'Support', heading: 'How do I edit a timetable template?', description: 'FAQ', linkText: 'Read answer' },
        { href: 'support-docs.html', category: 'Support', heading: 'Guide: printing timetables', description: 'Support Docs', linkText: 'Open guide' },
        { href: 'case-study-trust.html', category: 'Symbols', heading: 'A trust standardises visual timetables', description: 'Symbols in Action', linkText: 'Read the story' },
        { href: 'universal-language.html', category: 'Symbols', heading: 'Symbols as a Universal Language', description: 'Widgit Symbols', linkText: 'Learn more' },
      ] } },
      contactPromo('cta-search-promo', 'Can\'t find what you need?', 'Ask our team and we will point you in the right direction.', contactLink('general')),
    ],
  },

  // ===================== COUNTRY LANDING PAGES =====================
  sweden: countryPage({ slug: 'sweden', country: 'Sweden', partner: true, language: 'Swedish', note: 'Schools and organisations in Sweden buy Widgit through our local partner, with Swedish symbol vocabulary and support.' }),
  norway: countryPage({ slug: 'norway', country: 'Norway', partner: true, language: 'Norwegian', note: 'Schools and organisations in Norway buy Widgit through our local partner, with Norwegian symbol vocabulary and support.' }),
  finland: countryPage({ slug: 'finland', country: 'Finland', partner: true, language: 'Finnish', note: 'Schools and organisations in Finland buy Widgit through our local partner, with Finnish symbol vocabulary and support.' }),
  italy: countryPage({ slug: 'italy', country: 'Italy', partner: true, language: 'Italian', note: 'Schools and organisations in Italy buy Widgit through our local partner, with Italian symbol vocabulary and support.' }),
  canada: countryPage({ slug: 'canada', country: 'Canada', partner: false, language: 'English', note: 'Widgit Symbols for schools, health services and organisations across Canada.' }),
  australia: countryPage({ slug: 'australia', country: 'Australia', partner: false, language: 'English', note: 'Widgit Symbols for schools, health services and organisations across Australia.' }),

  // ===================== EXTERNAL HAND-OFFS =====================
  'free-trial': handoffPage({ slug: 'free-trial', name: 'Start your free trial', destination: 'Widgit Online sign-up',
    body: 'Free trial sign-up happens inside Widgit Online, so this button hands you over to the Widgit Online sign-up flow.',
    detail: ['In the live site, "Continue to Widgit Online sign-up" opens the Widgit Online registration flow. No account is created on widgit.com.', 'To confirm with Widgit: the sign-up URL, whether it opens in the same tab, and whether we pass the visitor\'s chosen plan or region along.'],
    backLabel: 'Back to plans and pricing', backHref: 'plans-pricing.html' }),
  login: handoffPage({ slug: 'login', name: 'Log in to Widgit Online', destination: 'Widgit Online',
    body: 'Widgit Online has its own login. This hands you over to it.',
    detail: ['In the live site this goes straight to the Widgit Online login screen.', 'To confirm with Widgit: whether Shop and Widgit Online accounts will share a single sign-on.'],
    backLabel: 'Back to homepage', backHref: 'index.html' }),
  shop: handoffPage({ slug: 'shop', name: 'Widgit Shop', destination: 'the Widgit Shop',
    body: 'Books, communication aids, boards, signage and software add-ons are sold through the Widgit Shop.',
    detail: ['In the live site this opens the Widgit Shop, which runs on a separate e-commerce platform.', 'To confirm with Widgit: whether the shop is restyled to match the new site.'],
    backLabel: 'Back to products', backHref: 'products.html',
    cards: [
      { heading: 'Books', description: 'Including Puffin on the Beach, Autism and Nature.' },
      { heading: 'Communication guides', description: 'From Visual Strategies.' },
      { heading: 'Communication aids', description: 'From The Play Doctors.' },
      { heading: 'Boards', description: 'Symbol communication boards.' },
      { heading: 'Signage', description: 'Ready-made symbol signs.' },
      { heading: 'Software add-ons', description: 'Makaton, Let\'s Sign BSL.' },
    ] }),
  'shop-account': handoffPage({ slug: 'shop-account', name: 'My Shop Account', destination: 'My Shop Account',
    body: 'View orders, invoices and licence numbers in your Widgit Shop account.',
    detail: ['In the live site this opens the account area of the Widgit Shop.', 'Licence numbers shown here are needed when contacting technical support.'],
    backLabel: 'Back to Support', backHref: 'support.html' }),
  'support-docs': handoffPage({ slug: 'support-docs', name: 'Support Docs', destination: 'Support Docs (Zendesk)',
    body: 'Step-by-step product guides live in our Zendesk help centre.',
    detail: ['In the live site this opens the Widgit help centre on Zendesk.', 'To confirm with Widgit: whether Zendesk search can be surfaced in the site search results.'],
    backLabel: 'Back to Support', backHref: 'support.html' }),

  // ===================== LEGAL =====================
  terms: legalPage('Terms and Conditions', 'Last updated [date].', 'terms', [
    { heading: 'About these terms', body: ['These terms apply to your use of widgit.com and the purchase of Widgit products. Final legal copy to be supplied by Widgit.'] },
    { heading: 'Orders and licences', body: ['Placeholder section for ordering, payment, licences and refunds.'] },
  ]),
  'privacy-policy': legalPage('Privacy Policy', 'Last updated [date].', 'privacy-policy', [
    { heading: 'How we use your information', body: ['Placeholder for Widgit\'s privacy policy. Final copy to be supplied by Widgit.'] },
    { heading: 'Cookies', body: ['Placeholder for cookie information and preferences.'] },
  ]),
  'symbol-copyright': legalPage('Widgit Symbol Copyright', 'What you can and cannot do with Widgit Symbols without a licence.', 'symbol-copyright', [
    { heading: 'Using symbols you have made', body: ['Placeholder for Widgit\'s symbol copyright terms. Final copy to be supplied by Widgit.'] },
    { heading: 'When you need a licence', body: ['Commercial, published or widely distributed use requires a licence. See Symbol copyright and licensing.'] },
  ]),
}

// Templates declared as functions below `pages` are hoisted, so they can be used above.
function caseStudy(slug: string, category: string, title: string, standfirst: string, challenge: string[], result: string[], sectorHref: string, sectorLabel: string): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `Case study · ${category}`, heading: title, body: standfirst, mediaLabel: `${title} hero image`,
      breadcrumb: bc(symCrumb, { label: 'Symbols in Action', href: 'symbols-in-action.html' }, { label: title, href: `${slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'The challenge', body: challenge, centered: true } },
      { component: 'wf-media', props: { type: 'image', label: 'Symbols in use on site', caption: 'Caption to be supplied.', centered: true } },
      { component: 'wf-text', props: { heading: 'What changed', body: result, centered: true } },
      { component: 'wf-quote', props: { items: [quote('Symbols are now part of how we work, not an extra.', `Project lead, ${category.toLowerCase()} organisation`)] } },
      { component: 'wf-share', props: { centered: true } },
      { component: 'wf-cards', props: { heading: 'Related', cols: 3, items: [
        { href: sectorHref, heading: sectorLabel, description: 'See how Widgit supports organisations like this.', imageLabel: 'Sector', linkText: 'Find out more' },
        { href: 'symbols-in-action.html', heading: 'More Symbols in Action', description: 'Read more stories.', imageLabel: 'Case studies', linkText: 'See all stories' },
        { href: 'symbol-friendly.html', heading: 'Become Symbol-Friendly', description: 'Show your commitment to clear communication.', imageLabel: 'Symbol-Friendly', linkText: 'Find out how' },
      ] } },
      trialPromo(`cta-${slug}-promo`),
    ],
  }
}

function resourcePage(slug: string, topic: string, title: string, meta: string, summary: string, howTo: string[]): Page {
  const free = meta.startsWith('Free')
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `Resource · ${topic}`, heading: title, body: `${summary} ${meta}.`,
      ctaLabel: free ? 'Log in to download' : 'Open in Widgit Online', ctaHref: 'login.html', ctaId: 'cta-resource-download',
      secondaryLabel: 'Back to resources', secondaryHref: 'resources.html', mediaLabel: `${title} preview`,
      breadcrumb: bc({ label: 'Resources', href: 'resources.html' }, { label: title, href: `${slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'How to use it', body: howTo } },
      { component: 'wf-media', props: { type: 'image', label: 'Page-by-page preview of the resource' } },
      { component: 'wf-cards', props: { heading: 'Related resources', cols: 3, items: [
        { href: 'resource-visual-timetable.html', heading: 'Daily visual timetable', description: 'Free · Printable PDF', imageLabel: 'Timetable', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', heading: 'Going to the dentist', description: 'Free · Printable PDF', imageLabel: 'Social story', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', heading: 'Phonics word mat', description: 'Subscribers · Widgit Online template', imageLabel: 'Phonics mat', linkText: 'View resource' },
      ] } },
      { component: 'wf-promo', props: {
        heading: 'Make your own version', body: 'Edit this resource or create your own in Widgit Online. Try it free for 21 days.',
        side: 'left', ctaLabel: 'Start free trial', ctaHref: 'free-trial.html', ctaId: `cta-${slug}-promo`, mediaLabel: 'Editing a resource',
      } },
    ],
  }
}

function eventPage(slug: string, eyebrow: string, title: string, summary: string, body: string[], when: string): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow, heading: title, body: `${summary} ${when}.`,
      ctaLabel: 'Register your place', ctaHref: contactLink('training'), ctaId: `cta-${slug}-register`,
      secondaryLabel: 'All events', secondaryHref: 'events.html', mediaLabel: `${title} image`,
      breadcrumb: bc(supCrumb, { label: 'Events', href: 'events.html' }, { label: title, href: `${slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'About this event', body } },
      { component: 'wf-statistics', props: { heading: 'Event details', items: [
        { value: '[Date]', label: 'Date' }, { value: '[Time]', label: 'Time (UK)' }, { value: eyebrow.startsWith('Online') ? 'Online' : '[Venue]', label: 'Location' },
      ] } },
      { component: 'wf-share', props: {} },
      { component: 'wf-cards', props: { heading: 'Other events', cols: 2, items: [
        { href: 'event-webinar.html', heading: 'Webinar: Symbols in the mainstream classroom', description: 'Online · Free', linkText: 'View event' },
        { href: 'event-exhibition.html', heading: 'Widgit at the Education Show', description: 'In person · Exhibition', linkText: 'View event' },
      ] } },
      trialPromo(`cta-${slug}-promo`),
    ],
  }
}

// ---------------------------------------------------------------------------
// Prototype navigator: core pages (grouped by template type), user flows, changelog.
// ---------------------------------------------------------------------------

export type CorePageType = 'Homepage' | 'Content' | 'Country landing' | 'Listing' | 'Article' | 'Detail' | 'Form' | 'Hand-off' | 'Utility'
export const CORE_PAGE_TYPES: CorePageType[] = ['Homepage', 'Content', 'Country landing', 'Listing', 'Article', 'Detail', 'Form', 'Hand-off', 'Utility']

export interface CorePage { label: string; href: string; type: CorePageType; inferred?: boolean }

export const corePages: CorePage[] = [
  { label: 'Homepage (UK)', href: 'index.html', type: 'Homepage' },
  { label: 'Who we help', href: 'who-we-help.html', type: 'Content' },
  { label: 'Education', href: 'education.html', type: 'Content' },
  { label: 'Sector page (e.g. School trusts)', href: 'school-trusts.html', type: 'Content' },
  { label: 'Single-site schools', href: 'single-site-schools.html', type: 'Content' },
  { label: 'International schools', href: 'international-schools.html', type: 'Content' },
  { label: 'Products', href: 'products.html', type: 'Content' },
  { label: 'Product page (e.g. Widgit Online)', href: 'widgit-online.html', type: 'Content' },
  { label: 'Partner Products', href: 'partner-products.html', type: 'Content' },
  { label: 'Plans and pricing', href: 'plans-pricing.html', type: 'Content' },
  { label: 'Plans and pricing (international)', href: 'plans-pricing-international.html', type: 'Content' },
  { label: 'Widgit Symbols', href: 'widgit-symbols.html', type: 'Content' },
  { label: 'Symbols as a Universal Language', href: 'universal-language.html', type: 'Content' },
  { label: 'Become a Symbol-Friendly Organisation', href: 'symbol-friendly.html', type: 'Content' },
  { label: 'Symbol copyright and licensing', href: 'symbol-licensing.html', type: 'Content' },
  { label: 'Symbol Services', href: 'symbol-services.html', type: 'Content' },
  { label: 'Support', href: 'support.html', type: 'Content' },
  { label: 'Technical Support', href: 'technical-support.html', type: 'Content' },
  { label: 'FAQs', href: 'faqs.html', type: 'Content' },
  { label: 'Training', href: 'training.html', type: 'Content' },
  { label: 'Widgit Centres', href: 'widgit-centres.html', type: 'Content' },
  { label: 'Country landing (e.g. Sweden)', href: 'sweden.html', type: 'Country landing' },
  { label: 'Country landing (e.g. Australia)', href: 'australia.html', type: 'Country landing' },
  { label: 'Symbols in Action', href: 'symbols-in-action.html', type: 'Listing' },
  { label: 'Resources', href: 'resources.html', type: 'Listing' },
  { label: 'Events', href: 'events.html', type: 'Listing' },
  { label: 'Case study', href: 'case-study-trust.html', type: 'Article', inferred: true },
  { label: 'Resource page', href: 'resource-visual-timetable.html', type: 'Detail', inferred: true },
  { label: 'Event page', href: 'event-webinar.html', type: 'Detail', inferred: true },
  { label: 'Contact us (routed form)', href: 'contact.html', type: 'Form' },
  { label: 'Free trial (Widgit Online sign-up)', href: 'free-trial.html', type: 'Hand-off', inferred: true },
  { label: 'Log in to Widgit Online', href: 'login.html', type: 'Hand-off' },
  { label: 'Shop', href: 'shop.html', type: 'Hand-off' },
  { label: 'My Shop Account', href: 'shop-account.html', type: 'Hand-off' },
  { label: 'Support Docs (Zendesk)', href: 'support-docs.html', type: 'Hand-off' },
  { label: 'Search results', href: 'search.html', type: 'Utility', inferred: true },
  { label: 'Terms and Conditions', href: 'terms.html', type: 'Utility' },
  { label: 'Privacy Policy', href: 'privacy-policy.html', type: 'Utility' },
  { label: 'Widgit Symbol Copyright', href: 'symbol-copyright.html', type: 'Utility' },
]

export interface WalkStep { href: string; targetId: string; label: string; instruction: string }
export interface Flow { name: string; description: string; steps: WalkStep[] }

export const flows: Flow[] = [
  {
    name: 'New primary school starts a trial (Isobel)',
    description: 'Homepage → Education → Single-site schools → Widgit Online → Plans and pricing → Free trial hand-off',
    steps: [
      { href: 'index.html', targetId: 'card-home-education', label: 'Homepage', instruction: 'Isobel is a primary teacher. Click the Education card under "Who we help".' },
      { href: 'education.html', targetId: 'card-edu-single-site', label: 'Education', instruction: 'Choose "Single-site schools".' },
      { href: 'single-site-schools.html', targetId: 'cta-single-site-online', label: 'Single-site schools', instruction: 'Click "Explore Widgit Online".' },
      { href: 'widgit-online.html', targetId: 'cta-widgit-online-pricing', label: 'Widgit Online', instruction: 'Scroll down and click "Compare plans".' },
      { href: 'plans-pricing.html', targetId: 'cta-pricing-trial', label: 'Plans and pricing', instruction: 'Click "Start a free trial".' },
      { href: 'free-trial.html', targetId: 'cta-handoff-free-trial', label: 'Free trial hand-off', instruction: 'This button hands Isobel to the Widgit Online sign-up. End of flow.' },
    ],
  },
  {
    name: 'Trust leader requests a quote (Jane)',
    description: 'Homepage → Who we help → School trusts → Contact (Sales and quotes)',
    steps: [
      { href: 'index.html', targetId: 'cta-home-hero', label: 'Homepage', instruction: 'Jane leads inclusion for a MAT. Click "Find support for your setting".' },
      { href: 'who-we-help.html', targetId: 'card-who-trusts', label: 'Who we help', instruction: 'Click "School trusts and groups (MATs)".' },
      { href: 'school-trusts.html', targetId: 'cta-trusts-quote', label: 'School trusts', instruction: 'Click "Request a trust quote".' },
      { href: 'contact.html?quote&orgType=School%20trust%20%2F%20MAT', targetId: 'submit-contact-quote', label: 'Contact: quote', instruction: 'The Sales tab is pre-selected and the organisation type pre-filled. Fill in the fields and submit.' },
    ],
  },
  {
    name: 'Company enquires about symbol licensing',
    description: 'Homepage → Widgit Symbols → Copyright and licensing → Contact (Symbol licensing)',
    steps: [
      { href: 'index.html', targetId: 'cta-home-symbols', label: 'Homepage', instruction: 'A product company wants to use Widgit Symbols. Click "Explore Widgit Symbols".' },
      { href: 'widgit-symbols.html', targetId: 'card-symbols-licensing', label: 'Widgit Symbols', instruction: 'Click "Copyright and licensing".' },
      { href: 'symbol-licensing.html', targetId: 'cta-licensing-enquire', label: 'Licensing', instruction: 'Click "Make a licensing enquiry".' },
      { href: 'contact.html?licensing', targetId: 'submit-contact-licensing', label: 'Contact: licensing', instruction: 'The Licensing tab is pre-selected, so the enquiry routes to the licensing team. Fill in and submit.' },
    ],
  },
  {
    name: 'Existing customer needs help (Sidra)',
    description: 'Homepage → Support → Technical Support → FAQs → Contact (Technical support)',
    steps: [
      { href: 'index.html', targetId: 'card-home-support', label: 'Homepage', instruction: 'Sidra uses InPrint 4 and has a licence problem. Click "Get support".' },
      { href: 'support.html', targetId: 'card-support-technical', label: 'Support', instruction: 'Click "Technical Support".' },
      { href: 'technical-support.html', targetId: 'card-tech-faqs', label: 'Technical Support', instruction: 'Try self-help first: click "Common fixes".' },
      { href: 'faqs.html', targetId: 'cta-faqs-contact', label: 'FAQs', instruction: 'Her answer is not here. Scroll down and click "Contact support".' },
      { href: 'contact.html?support', targetId: 'submit-contact-support', label: 'Contact: support', instruction: 'The Technical support tab is pre-selected. Fill in and submit.' },
    ],
  },
  {
    name: 'Parent finds a free resource (Jerome)',
    description: 'Homepage → Who we help → Parents and Carers → Resources → Resource page',
    steps: [
      { href: 'index.html', targetId: 'cta-home-hero', label: 'Homepage', instruction: 'Jerome\'s daughter uses symbols at school. Click "Find support for your setting".' },
      { href: 'who-we-help.html', targetId: 'card-who-parents', label: 'Who we help', instruction: 'Click "Parents, Carers and Individuals".' },
      { href: 'parents-carers.html', targetId: 'cta-parents-resources', label: 'Parents and Carers', instruction: 'Click "Browse free resources".' },
      { href: 'resources.html', targetId: 'card-res-visual-timetable', label: 'Resources', instruction: 'Click "Daily visual timetable".' },
      { href: 'resource-visual-timetable.html', targetId: 'cta-resource-download', label: 'Resource page', instruction: 'Click "Log in to download". End of flow.' },
    ],
  },
  {
    name: 'International school asks for pricing',
    description: 'Homepage → Education → International schools → International pricing → Contact (Sales and quotes)',
    steps: [
      { href: 'index.html', targetId: 'card-home-education', label: 'Homepage', instruction: 'A school in Dubai is exploring Widgit. Click the Education card.' },
      { href: 'education.html', targetId: 'card-edu-international', label: 'Education', instruction: 'Click "International schools".' },
      { href: 'international-schools.html', targetId: 'cta-intl-pricing', label: 'International schools', instruction: 'Click "See international pricing".' },
      { href: 'plans-pricing-international.html', targetId: 'cta-intl-quote', label: 'International pricing', instruction: 'Click "Request a quote".' },
      { href: 'contact.html?quote&orgType=International%20school', targetId: 'submit-contact-quote', label: 'Contact: quote', instruction: 'Sales tab pre-selected with "International school" filled in. Submit.' },
    ],
  },
]

export interface ChangelogEntry { date: string; type: 'Added' | 'Changed' | 'Removed' | 'Fixed'; text: string }

export const changelog: ChangelogEntry[] = [
  { date: '2026-11-11', type: 'Added', text: 'Homepage hero now shows the symbol arc from the approved concept.' },
  { date: '2026-11-11', type: 'Added', text: 'Mission statement band below the homepage hero.' },
  { date: '2026-11-11', type: 'Added', text: 'Interactive product tour on the homepage, with numbered feature hotspots.' },
  { date: '2026-11-11', type: 'Added', text: 'Single-product tours on the Widgit Online and InPrint 4 pages.' },
  { date: '2026-11-11', type: 'Added', text: 'Closing symbol band near the end of the homepage.' },
  { date: '2026-11-11', type: 'Added', text: 'Reduce motion switch in the footer, which also follows the device setting.' },
  { date: '2026-11-11', type: 'Removed', text: 'Homepage "Our products" cards and Widgit Online text block, replaced by the product tour.' },
  { date: '2026-11-11', type: 'Fixed', text: 'Component List hero no longer covers its own heading.' },
  { date: '2026-11-11', type: 'Fixed', text: 'Footer Subscribe button no longer spills out on narrow screens.' },
  { date: '2026-11-11', type: 'Fixed', text: 'Who we help menu no longer has a gap beside Education.' },
  { date: '2026-11-11', type: 'Fixed', text: 'Widgit Apps features now sit in one row.' },
  { date: '2026-11-10', type: 'Added', text: 'First build from the revised sitemap, personas and audience priorities.' },
  { date: '2026-11-10', type: 'Added', text: 'Region switcher in the header, routing to country landing pages.' },
  { date: '2026-11-10', type: 'Added', text: 'Contact form routes enquiries by topic, with deep links from other pages.' },
  { date: '2026-11-10', type: 'Added', text: 'Free trial hands off to Widgit Online sign-up.' },
  { date: '2026-11-10', type: 'Added', text: 'Six user flows based on the personas.' },
  { date: '2026-11-10', type: 'Changed', text: 'Who we help leads the main navigation.' },
]
