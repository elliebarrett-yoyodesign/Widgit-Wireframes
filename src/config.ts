// Config-driven site data for the Widgit website wireframes. Every page is `{ hero?, blocks }`,
// an ordered list of `{ component, props, anchorId? }` entries rendered by <wf-page-body>.
// Adding or editing a section is a data change here, not new markup.
// Source: Revised Sitemap v1 (Figma), Widgit User Personas (July 2026), Widgit audience priorities.

export const siteName = 'Widgit'
export const footerTagline = 'Widgit Symbols help people of all ages and abilities understand, communicate and take part. Used in schools, health services and public spaces.'
export const footerLegal = 'Widgit Software Ltd. Registered in England and Wales, no. 07739412. VAT no. GB 118 9493 79.'

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
      { label: 'Widgit Apps', href: 'widgit-apps.html', description: 'Widgit Writer, Widgit Go, Symbols2Write and Widgit Vocab.' },
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
    slug: 'about', label: 'About', href: 'about.html',
    children: [
      { label: 'About Widgit', href: 'about.html', description: 'Who we are and what we stand for.' },
      { label: 'About us', href: 'about-us.html', description: 'Our mission, values, team and B Corp commitment.' },
      { label: 'News', href: 'news.html', description: 'Company news, staff spotlights and community stories.' },
    ],
  },
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
  { label: 'Canada', href: 'canada.html', description: 'Through our Canadian partner' },
  { label: 'Australia', href: 'australia.html', description: 'Through our Australian partner' },
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
/** A real testimonial, taken from the current widgit.com. */
const rq = (q: string, attribution: string, role?: string) => ({ quote: q, attribution, role })
const Q = {
  headteacher: rq('Without having access to the symbols and the programs we would not be able to function as a school. These children would not be able to go through the day as they do independently.', 'A headteacher'),
  parent: rq('Your symbols have been life savers for my severely autistic son. The quality of life for our family is so much better.', 'Parent of a child on the autism spectrum'),
  responder: rq('Being able to reassure someone in an emergency is key to my role. Widgit Medical Communication Aids make me more confident that I can bring calm in the widest range of situations.', 'A Community First Responder'),
  commissioner: rq('By using Widgit symbols, people who have speech and language difficulties or are non-verbal were able to access and understand what participation means to them.', 'Sarah-Louise Davies', 'Children and Young People\'s Commissioner, Scotland'),
  theatre: rq('We are delighted with the symbol resources. They are professional, engaging and attractive to our customers.', 'Zoë Briggs', 'Ambassador Theatre Group'),
  tfl: rq('The people who have used it have found it an easy document to follow and it clearly shows what is expected of them, and of us.', 'Charlotte Eade', 'HR Project Manager, Transport for London'),
  signage: rq('The aim of including symbols on the directional signage was to provide simple, identifiable objects that all members of the community would be able to recognise.', 'Mark Owers', 'Chelmsford Borough Council'),
  point: rq('Widgit\'s Point tool meets the requirement for making websites more accessible to people with cognitive difficulties.', 'Joe Chidzik', 'AbilityNet'),
}

/** Titles of the built news articles, for related-article cards. */
const NEWS_TITLES: Record<string, { title: string; date: string; category: string }> = {
  'news-bcorp': { title: 'A balance of purpose and profit: Widgit\'s B Corp journey', date: 'October 2025', category: 'B Corp' },
  'news-staff-spotlight-sophie': { title: 'Staff spotlight: Sophie Clarke, Signage and Symbol Design Support', date: 'June 2026', category: 'Staff spotlight' },
  'news-widgit-wilding': { title: 'Widgit Wilding Part IV: Gardening at Painting\'s Plantation', date: 'June 2025', category: 'Widgit Wilding' },
}

// --- Sector page template (Who we help children) ---
function sectorPage(o: {
  slug: string; name: string; intro: string; challenge: string[]; how: { heading: string; description: string; href: string }[]
  caseHref: string; caseTitle: string; ctaLabel: string; ctaHref: string; ctaId: string; parent?: Crumb
  quote?: { quote: string; attribution: string; role?: string }
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
      { component: 'wf-quote', props: { items: [o.quote || quote('Symbols have changed how we share information. People ask fewer questions because they understand the first time.', `${o.name} customer`)] } },
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
function countryPage(o: {
  slug: string; country: string; partner: string; address: string; email: string; phone: string; web: string
  language: string; products: string[]
}): Page {
  const site = `https://${o.web}`
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `Widgit in ${o.country}`, heading: `Widgit Symbols in ${o.country}, through ${o.partner}`,
      body: `Schools and organisations in ${o.country} buy Widgit products through our local partner, ${o.partner}, who also provide support in ${o.language}.`,
      ctaLabel: `Visit ${o.partner}`, ctaHref: site, ctaId: `cta-${o.slug}-hero`, mediaLabel: `${o.country} landing image`,
      breadcrumb: bc({ label: o.country, href: `${o.slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text-media', props: {
        heading: 'Buy and get support locally',
        body: [`${o.partner} can help with orders, free trials, software updates, manuals and installation guides.`,
          `Products available through ${o.partner}: ${o.products.join(', ')}.`],
        side: 'left', mediaLabel: `${o.partner} logo`, ctaLabel: `Contact ${o.partner}`, ctaHref: site,
      } },
      { component: 'wf-text', props: { heading: `Contact ${o.partner}`, body: [o.address, `Email: ${o.email}`, `Phone: ${o.phone}`, `Website: ${o.web}`] } },
      contactPromo(`cta-${o.slug}-promo`, `Questions about Widgit in ${o.country}?`, 'Send us a message and we will put you in touch with the right local contact.', contactLink('general', `country=${o.country}`)),
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
              { heading: '100,000+ Widgit symbols', description: 'The complete Widgit Symbol Library, with symbols as you type.' },
              { heading: 'Symbols follow your text', description: 'Ideal for printed resources and visual schedules.' },
              { heading: '400+ templates', description: 'From forms and questionnaires to emotional support.' },
            ],
            ctaLabel: 'Explore InPrint 4', ctaHref: 'inprint-4.html', ctaId: 'cta-home-tour-inprint' },
        ],
      } },
      { component: 'wf-statistics', props: { heading: 'Widgit at a glance', items: [
        { value: '100,000+', label: 'Widgit Symbols' },
        { value: '10,000+', label: 'Schools using Widgit Symbols' },
        { value: '80+', label: 'Languages for dual-language resources' },
        { value: '40+', label: 'Years of Widgit Symbols' },
      ] } },
      { component: 'wf-promo', props: {
        heading: 'Widgit Symbols: a visual language for everyone',
        body: 'Learn how our symbol set works, license it for your own products, or become a Symbol-Friendly Organisation.',
        side: 'right', ctaLabel: 'Explore Widgit Symbols', ctaHref: 'widgit-symbols.html', ctaId: 'cta-home-symbols', mediaLabel: 'Symbol grid',
      } },
      { component: 'wf-quote', props: { items: [
        Q.headteacher,
        Q.parent,
        Q.responder,
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
        body: ['Symbols help the whole school: visual timetables in every classroom, clearer signage in corridors and accessible letters home to parents.', 'Teachers use them to support a mixed class, and SENCOs use them to build consistent practice across staff.'],
        side: 'left', mediaLabel: 'Symbol signage in a school corridor',
      } },
      { component: 'wf-statistics', props: { heading: 'Widgit in schools', items: [
        { value: '10,000+', label: 'Schools using Widgit Symbols' }, { value: '100,000+', label: 'Symbols in the Widgit library' }, { value: '21 days', label: 'Free trial of Widgit Online' },
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
    challenge: ['Inclusion leads need consistent practice across many schools, without managing separate licences for each one.', 'A Widgit Enterprise plan is built around your trust, so every school has the same tools and staff can share resources between sites.'],
    how: [
      { heading: 'Enterprise plans', description: 'One plan for every school in your trust, tailored to your needs.', href: 'plans-pricing.html' },
      { heading: 'Central training', description: 'Train leads once and roll out across the trust.', href: 'training.html' },
      { heading: 'Shared resources', description: 'Build a resource library every school can use.', href: 'widgit-online.html' },
    ],
    caseHref: 'case-study-trust.html', caseTitle: 'A whole-school approach at Ark Boulton Academy',
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
      { component: 'wf-quote', props: { items: [Q.headteacher] } },
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
        body: ['When pupils speak many home languages, symbols give everyone a shared way to understand routines, instructions and topic vocabulary.', 'Widgit Online includes over 100,000 symbols covering more than 60,000 words and phrases, with translations in 83+ languages for dual-language resources. GEMS Winchester School in Dubai uses it to support English and Arabic speakers.'],
        side: 'left', mediaLabel: 'Multilingual classroom',
      } },
      { component: 'wf-links', props: { heading: 'Looking for a specific country?', cols: 3, items: [
        { href: 'canada.html', label: 'Canada', description: 'Through our partner, Bridges' },
        { href: 'australia.html', label: 'Australia', description: 'Through our partner, Spectronics' },
        { href: 'sweden.html', label: 'Nordic countries and Italy', description: 'Buy through our local partners' },
      ] } },
      contactPromo('cta-intl-promo', 'Plan a rollout across your school', 'Our international team can help with pricing, training and time zones.', contactLink('quote', 'orgType=International school')),
    ],
  },

  'health-social-care': sectorPage({
    slug: 'health-social-care', name: 'Health and Social Care',
    intro: 'Help patients, residents and service users understand appointments, treatments and their own care.',
    challenge: ['Being able to communicate with someone quickly and clearly is vital. Clear communication improves diagnosis and treatment, leading to quicker and more successful recovery.', 'Giving clear information and gathering accurate facts helps keep situations calm and reduces risks. Widgit Symbols add visual support to information, making it easier to understand.'],
    how: [
      { heading: 'Accessible patient leaflets', description: 'Symbol-supported information made with InPrint 4.', href: 'inprint-4.html' },
      { heading: 'Hospital signage', description: 'Wayfinding and ward signs designed for you.', href: 'symbol-services.html' },
      { heading: 'Become Symbol-Friendly', description: 'Show patients you are committed to clear communication.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: health and care stories', quote: Q.responder,
    ctaLabel: 'Talk to our health team', ctaHref: contactLink('general', 'orgType=Health or social care'), ctaId: 'cta-health-hero',
  }),

  'government-local-authorities': sectorPage({
    slug: 'government-local-authorities', name: 'Government and Local Authorities',
    intro: 'Make public information, consultations and services accessible to every resident.',
    challenge: ['Communicating well with everyone is vital to a sense of belonging in a community. Every local authority service needs to be accessible, regardless of language or literacy barriers.', 'From local offer websites and signage in public buildings to advice leaflets and surveys, Widgit works with local organisations to translate information into symbols and easy read text.'],
    how: [
      { heading: 'Easy-read documents', description: 'Create symbol-supported versions of public information.', href: 'inprint-4.html' },
      { heading: 'Authority-wide licences', description: 'License symbols for not-for-profit use across your area, from schools to GP surgeries.', href: 'symbol-licensing.html' },
      { heading: 'Accessible digital content', description: 'Add symbols to your website with Point and BeClear.', href: 'digital-accessibility.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: public sector stories', quote: Q.commissioner,
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general', 'orgType=Local authority'), ctaId: 'cta-gov-hero',
  }),

  'public-services': sectorPage({
    slug: 'public-services', name: 'Public Services',
    intro: 'Libraries, transport, police and emergency services that everyone can understand and use.',
    challenge: ['Signs, posters and leaflets in public places need to be accessible to everyone, regardless of language or literacy barriers.', 'For people who find text difficult, symbols can be their main way of accessing information. For confident readers, they give a quick reference to the key points.'],
    how: [
      { heading: 'Symbol signage', description: 'Designed, produced and installed for you.', href: 'symbol-services.html' },
      { heading: 'Communication cards', description: 'Printable cards for frontline staff.', href: 'resources.html' },
      { heading: 'Become Symbol-Friendly', description: 'Show your commitment to accessible services.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'case-study-nhs.html', caseTitle: 'How the States of Jersey Police use symbols in custody', quote: Q.tfl,
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general'), ctaId: 'cta-public-hero',
  }),

  'leisure-tourism': sectorPage({
    slug: 'leisure-tourism', name: 'Leisure and Tourism',
    intro: 'Help every visitor plan, enjoy and feel welcome at your museum, attraction or venue.',
    challenge: ['Attractions welcome a wide range of visitors, including tourists from abroad, school groups and people who find text hard to access.', 'Symbols that capture the main idea of an exhibit get information across quickly, and symbol-supported signage helps visitors find their way around.'],
    how: [
      { heading: 'Visit guides and maps', description: 'Symbol-supported guides your visitors can download.', href: 'symbol-services.html' },
      { heading: 'On-site signage', description: 'Clear wayfinding through your venue.', href: 'symbol-services.html' },
      { heading: 'Become Symbol-Friendly', description: 'Promote your venue as accessible.', href: 'symbol-friendly.html' },
    ],
    caseHref: 'case-study-museum.html', caseTitle: 'Woburn: the UK\'s first symbol-friendly safari park', quote: Q.theatre,
    ctaLabel: 'Talk to our team', ctaHref: contactLink('general'), ctaId: 'cta-leisure-hero',
  }),

  'parents-carers': sectorPage({
    slug: 'parents-carers', name: 'Parents, Carers and Individuals',
    intro: 'Make routines, appointments and big changes easier to understand at home.',
    challenge: ['Symbols are a helpful bridge from the pictures and objects children already know to the printed word. They support vocabulary, understanding, communication and independence.', 'Free resources and simple tools let you use the same symbols at home that your child sees at school.'],
    how: [
      { heading: 'Free resources', description: 'Visual timetables and social stories to download.', href: 'resources.html' },
      { heading: 'Widgit Apps', description: 'Symbols on your phone or tablet.', href: 'widgit-apps.html' },
      { heading: 'Widgit Online for families', description: 'Make your own resources at home.', href: 'widgit-online.html' },
    ],
    caseHref: 'symbols-in-action.html', caseTitle: 'Symbols in Action: families', quote: Q.parent,
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
        { href: 'widgit-apps.html', heading: 'Widgit Apps', description: 'Widgit Writer, Widgit Go, Symbols2Write and Widgit Vocab.', imageLabel: 'Apps on a tablet', linkText: 'Explore the apps' },
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
    intro: 'Template-driven symbol resources from your browser. Start from hundreds of editable templates, then share online or print for the classroom, home and community.',
    what: ['Choose a template, start typing, and symbols appear automatically. You can change symbol colours, edit symbol text and upload your own images.', 'Widgit Online gives you over 100,000 symbols, hundreds of templates and 2 million child-friendly photos. Standard plans and above add Dual Language support in 80 languages.'],
    features: [
      { heading: 'Symbols as you type', description: 'Automatic symbol support with easy word and symbol swaps.' },
      { heading: 'Ready-made templates', description: 'Start from timetables, stories, worksheets and more.' },
      { heading: 'Share with colleagues', description: 'Shared folders for teams, schools and trusts.' },
    ],
    who: ['SEN professionals, teachers and teaching assistants making classroom resources.', 'Health practitioners, parents and carers who need clear, personalised materials.'],
    faqs: [
      { heading: 'Do I need to install anything?', body: 'No. Widgit Online runs in current versions of Chrome, Edge, Firefox and Safari (Mac). Editing on tablets and phones is not fully supported, but the free Widgit Writer app works on iPad.' },
      { heading: 'Can I try it before I buy?', body: 'Yes. Start a free 21-day trial and create resources straight away.' },
      { heading: 'Can my team share resources?', body: 'Yes. Plans from Basic upwards include team collaboration and resource sharing, from 4 users on Basic to 150 on Pro.' },
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
    intro: 'A powerful symbol resource editor with full design and layout features, for fully bespoke symbol materials.',
    what: ['InPrint 4 is desktop software for Windows, made for advanced practitioners and symbol experts who want full design control.', 'It includes over 100,000 symbols, 400+ templates and around 100 ready-made resource packs with more than 3,200 pages of symbol materials.'],
    features: [
      { heading: '400+ templates', description: 'From forms and questionnaires to emotional support.' },
      { heading: 'Shuffle skin tones', description: 'Vary skin tones automatically across a document.' },
      { heading: 'Presentation Export', description: 'Turn documents into interactive slideshows. Standard tier and above.' },
    ],
    who: ['SEN professionals and teachers creating bespoke classroom materials.', 'Health practitioners, parents and carers who need fully personalised resources.'],
    faqs: [
      { heading: 'How is InPrint 4 different from Widgit Online?', body: 'Widgit Online is ideal for anyone starting out. InPrint 4 has advanced templates, formatting and layout features for experienced users.' },
      { heading: 'Does InPrint 4 work on a Mac?', body: 'No. InPrint 4 is made for Windows. Widgit Online works in Safari on a Mac.' },
      { heading: 'Can I install it on several computers?', body: 'Yes. Licences cover a set number of installations at one location, from 1 on Home to unlimited on Site. It can be installed across a network.' },
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
    what: ['Point is a picture dictionary for your website. Visitors hover over a word to see Widgit Symbols that show its meaning, with no change to your layout or design.', 'BeClear helps organisations write clearer, more accessible content.'],
    features: [
      { heading: 'Point', description: 'Hover over a word to see its symbol. Try the demo or a free trial.' },
      { heading: 'BeClear', description: 'Clearer, accessible digital content.' },
      { heading: 'Easy setup', description: 'Add the Point code to any page. Priced by website size.' },
    ],
    who: ['Councils, health organisations and venues with public-facing websites.'],
    faqs: [
      { heading: 'Does this replace an easy-read version?', body: 'It supports understanding, but some content still benefits from a dedicated easy-read version.' },
      { heading: 'How does setup work?', body: 'Add the Point code to each page you want to support. Widgit\'s helpdesk can help you get it running.' },
    ],
    primary: { label: 'Talk to us about Point and BeClear', href: contactLink('general') },
  }),

  'widgit-apps': productPage({
    slug: 'widgit-apps', name: 'Widgit Apps', eyebrow: 'Products',
    intro: 'Widgit Symbols on phones and tablets, for communication and learning on the go.',
    what: ['Our apps bring symbols wherever people need them, from writing support to vocabulary and everyday communication.'],
    features: [
      { heading: 'Widgit Writer', description: 'Create symbol documents on your iPad. Free with a Widgit Online account.' },
      { heading: 'Widgit Go', description: 'Simple AAC and language development, at home, in class or on the go.' },
      { heading: 'Symbols2Write', description: 'Apps for young learners to learn how sentences are built.' },
      { heading: 'Widgit Vocab', description: 'Symbol activities and grids for your iPad.' },
    ],
    who: ['Individuals, families and schools using tablets for communication and learning.'],
    faqs: [
      { heading: 'Which devices are supported?', body: 'Widgit Writer and Widgit Vocab are for iPad. Device support for the other apps is to be confirmed.' },
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
      body: 'Try Widgit Online free for 21 days, then choose a plan for your home, school or organisation. Pay monthly, yearly or for three years.',
      ctaLabel: 'Start a free trial', ctaHref: 'free-trial.html', ctaId: 'cta-pricing-trial', secondaryLabel: 'Request a quote', secondaryHref: contactLink('quote'),
      mediaLabel: 'Pricing illustration', breadcrumb: bc(prodCrumb, { label: 'Plans and pricing', href: 'plans-pricing.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Widgit Online plans', cols: 4, items: [
        { href: 'free-trial.html', heading: 'Home: £95 a year', description: 'For personal use at home. 1 user. Price includes VAT.', linkText: 'Start free trial' },
        { href: 'free-trial.html', heading: 'Standard: £310 a year', description: 'Most popular. For UK mainstream schools. Up to 20 users, with Dual Language in 80 languages. Excludes VAT.', linkText: 'Start free trial' },
        { href: 'free-trial.html', heading: 'Pro: £1,015 a year', description: 'For large schools and organisations. Up to 150 users. Excludes VAT.', linkText: 'Start free trial' },
        { href: contactLink('quote', 'orgType=School trust / MAT'), heading: 'Enterprise: priced for you', description: 'For MATs, international school groups and organisations across several sites.', linkText: 'Request a quote' },
      ] } },
      { component: 'wf-text', props: { body: ['Also available: Basic, up to 4 users, £147 a year including VAT, and Plus, up to 50 users, £480 a year excluding VAT.'] } },
      { component: 'wf-accordion', props: { heading: 'Pricing questions', items: [
        { heading: 'How long is the free trial?', body: 'Widgit Online and InPrint 4 both have a 21-day free trial.' },
        { heading: 'Can I pay by invoice?', body: 'Yes. Organisations can pay by invoice with an official purchase order on orders over £50. Invoices are due within 30 days.' },
        { heading: 'Is it cheaper to pay for longer?', body: 'Yes. For example, Standard is £30 a month, £310 a year or £695 for three years. Trusts and multi-site organisations can ask about an Enterprise plan.' },
        { heading: 'Are you outside the UK?', body: 'Choose your region at the top of the page to find your local partner, or see our pricing for international schools.' },
      ] } },
      { component: 'wf-links', props: { cols: 2, items: [
        { href: 'plans-pricing-international.html', label: 'Pricing for international schools', description: 'Plans for schools outside the UK' },
        { href: 'inprint-4.html', label: 'InPrint 4 pricing', description: 'From £104 a year, for Windows' },
      ] } },
      contactPromo('cta-pricing-promo', 'Need a bigger plan?', 'Tell us about your organisation and we will put together a quote.', contactLink('quote'), 'Request a quote'),
    ],
  },

  'plans-pricing-international': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Plans and pricing', heading: 'Pricing for international schools',
      body: 'Widgit Online plans for international schools. You can buy online by card, and prices are in pounds sterling.',
      ctaLabel: 'Request a quote', ctaHref: contactLink('quote', 'orgType=International school'), ctaId: 'cta-intl-quote',
      secondaryLabel: 'Start a free trial', secondaryHref: 'free-trial.html', mediaLabel: 'International pricing illustration',
      breadcrumb: bc(prodCrumb, { label: 'Pricing for international schools', href: 'plans-pricing-international.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Plans', cols: 3, items: [
        { href: 'free-trial.html', heading: 'Plus: £480 a year', description: 'Recommended for international schools. Up to 50 users, with Dual Language in 80 languages.', linkText: 'Start free trial' },
        { href: 'free-trial.html', heading: 'Pro: £1,015 a year', description: 'For large international schools. Up to 150 users.', linkText: 'Start free trial' },
        { href: contactLink('quote', 'orgType=International school'), heading: 'Enterprise: priced for you', description: 'For international school groups.', linkText: 'Request a quote' },
      ] } },
      { component: 'wf-text', props: { heading: 'Buying in a partner country?', body: ['If you are in Sweden, Norway, Finland, Italy, Canada or Australia, please buy through our local partner. Use the region switcher at the top of the page to find them.'] } },
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
        body: ['Widgit Symbols form a complete visual language of over 100,000 symbols, representing more than 55,000 English words.', 'Every symbol follows a consistent schema designed by expert practitioners, which helps people understand new words and grow their vocabulary.'],
        side: 'left', mediaLabel: 'Symbol design schema',
      } },
      { component: 'wf-cards', props: { heading: 'Use Widgit Symbols', cols: 4, items: [
        { href: 'universal-language.html', heading: 'Symbols as a Universal Language', description: 'Supporting understanding across languages.', imageLabel: 'Globe of symbols', linkText: 'Learn more' },
        { href: 'symbol-licensing.html', id: 'card-symbols-licensing', heading: 'Copyright and licensing', description: 'Use our symbols in your own products.', imageLabel: 'Licensing', linkText: 'Licensing options' },
        { href: 'symbol-friendly.html', heading: 'Become Symbol-Friendly', description: 'Show your commitment to accessibility.', imageLabel: 'Symbol-Friendly badge', linkText: 'Find out how' },
        { href: 'symbol-services.html', heading: 'Symbol Services', description: 'Signage and materials made for you.', imageLabel: 'Signage', linkText: 'See services' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Symbols in Action', cols: 3, items: [
        { href: 'case-study-trust.html', heading: 'Helping secondary students thrive at Ark Boulton Academy', category: 'Education', imageLabel: 'Ark Boulton Academy', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', heading: 'How the States of Jersey Police use symbols in custody', category: 'Public sector', imageLabel: 'Custody suite', linkText: 'Read the story' },
        { href: 'case-study-museum.html', heading: 'Inclusive animal experiences with Woburn', category: 'Leisure', imageLabel: 'Woburn Safari Park', linkText: 'Read the story' },
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
      body: 'Join our network of Symbol-Friendly organisations, creating inclusive experiences for customers of all abilities.',
      ctaLabel: 'Apply to become Symbol-Friendly', ctaHref: contactLink('symbolfriendly'), ctaId: 'cta-symbol-friendly-apply',
      mediaLabel: 'Symbol-Friendly badge on a building', breadcrumb: bc(symCrumb, { label: 'Become a Symbol-Friendly Organisation', href: 'symbol-friendly.html' }),
    } },
    blocks: [
      { component: 'wf-text-media', props: { heading: 'What it means', body: ['By following our Symbol-Friendly guidelines and using Widgit Symbols, you show your commitment to people with diverse communication needs.', 'Symbol-Friendly organisations include East Midlands Railway, Dudley Zoo and Castle, Nottingham Express Transit and Woburn Safari Park, the UK\'s first symbol-friendly safari park.'], side: 'left', mediaLabel: 'Symbol-Friendly mark' } },
      { component: 'wf-cards', props: { heading: 'What your partnership includes', cols: 2, items: [
        { heading: 'A review of your needs', description: 'We look at your Symbol-Friendly requirements with you.' },
        { heading: 'Accessible symbol materials', description: 'Made by our design and education experts, following your brand guidelines.' },
      ] } },
      { component: 'wf-cards', props: { cols: 3, items: [
        { heading: 'The Symbol-Friendly mark', description: 'Use the official mark on your site and materials.' },
        { heading: 'A media pack', description: 'Support for your internal and external announcements.' },
        { heading: 'Staff training', description: 'Help your team use Symbol-Friendly resources well.' },
      ] } },
      { component: 'wf-accordion', props: { heading: 'Questions', items: [
        { heading: 'Who can become Symbol-Friendly?', body: 'Any organisation that serves the public, from transport networks to zoos and museums.' },
        { heading: 'Do you work with the Autism Friendly Award?', body: 'Yes. Widgit partners with the National Autistic Society to support its Autism Friendly Award.' },
        { heading: 'Is there a cost?', body: 'Costs depend on the size of your organisation. Details to be confirmed.' },
      ] } },
      contactPromo('cta-symbol-friendly-promo', 'Ready to start?', 'Your enquiry goes straight to our Symbol-Friendly team.', contactLink('symbolfriendly'), 'Apply now'),
    ],
  },

  'symbol-licensing': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Widgit Symbols', heading: 'Symbol copyright and licensing',
      body: 'Use Widgit Symbols in your publication, website or product to make them accessible to all.',
      ctaLabel: 'Make a licensing enquiry', ctaHref: contactLink('licensing'), ctaId: 'cta-licensing-enquire',
      mediaLabel: 'Symbols in a published book', breadcrumb: bc(symCrumb, { label: 'Symbol copyright and licensing', href: 'symbol-licensing.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'When do you need a licence?', body: ['If you own a Widgit Symbol product, your licence covers materials used within your organisation. To share materials more widely, you need permission.', 'If you only need a few symbols and acknowledge them, licensing is often free or very low cost. An annual licence fee applies where resources are sold for profit.'] } },
      { component: 'wf-cards', props: { heading: 'Licence types', cols: 3, items: [
        { heading: 'Software and apps', description: 'License the whole Widgit Symbol Set, with a data set linking images to words.', imageLabel: 'App integration' },
        { heading: 'Documents and websites', description: 'Use symbols in publications and web content you share or sell.', imageLabel: 'Publishing' },
        { heading: 'Local authorities', description: 'License symbols for any not-for-profit use across your area.', imageLabel: 'Local authority' },
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
      body: 'Our specialist design team works in partnership with your organisation to create accessible symbol materials.',
      ctaLabel: 'Discuss a project', ctaHref: contactLink('licensing', 'licenceUse=Signage'), ctaId: 'cta-services-hero',
      mediaLabel: 'Symbol signage installation', breadcrumb: bc(symCrumb, { label: 'Symbol Services', href: 'symbol-services.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'What we offer', cols: 3, items: [
        { heading: 'Signage', description: 'Ready-made, low-cost symbol signs, or bespoke designs.', imageLabel: 'Signage' },
        { heading: 'Individual symbol design', description: '£35 per symbol, supplied as eps, jpg or png, with a licence for small-scale distribution.', imageLabel: 'Symbol design' },
        { heading: 'Accessible symbol materials', description: 'Easy read versions of your content, following your brand guidelines.', imageLabel: 'Accessible leaflet' },
      ] } },
      { component: 'wf-cards', props: { cols: 2, items: [
        { heading: 'Symbol surveys', description: 'Symbol versions of your surveys, so clients can engage and respond clearly.', imageLabel: 'Survey' },
        { heading: 'Printing and manufacturing', description: 'Cards, fans, key rings and leaflets, designed and printed for you, including on waterproof paper.', imageLabel: 'Printed materials' },
      ] } },
      { component: 'wf-quote', props: { items: [Q.signage] } },
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
        { href: 'case-study-trust.html', category: 'Education', heading: 'Helping secondary students thrive at Ark Boulton Academy', description: 'A whole-school approach to communication and inclusion.', imageLabel: 'Ark Boulton Academy', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', category: 'Public sector', heading: 'How the States of Jersey Police use symbols in custody', description: 'Helping detainees feel calm, informed and supported.', imageLabel: 'Custody suite', linkText: 'Read the story' },
        { href: 'case-study-museum.html', category: 'Leisure', heading: 'Inclusive animal experiences with Woburn', description: 'The UK\'s first symbol-friendly safari park.', imageLabel: 'Woburn Safari Park', linkText: 'Read the story' },
        { href: 'case-study-trust.html', category: 'Education', heading: 'Supporting EAL learners at GEMS Winchester School, Dubai', description: 'Dual-language symbols for English and Arabic speakers.', imageLabel: 'GEMS Winchester School', linkText: 'Read the story' },
        { href: 'case-study-nhs.html', category: 'Public sector', heading: 'Symbol-friendly journeys with Nottingham Trams', description: 'Making public transport less daunting and more inclusive.', imageLabel: 'Nottingham tram', linkText: 'Read the story' },
        { href: 'case-study-museum.html', category: 'Health', heading: 'Kylie Lang\'s legacy of symbolised support for families', description: 'Overgate Hospice resources for children with additional needs.', imageLabel: 'Overgate Hospice', linkText: 'Read the story' },
      ] } },
      trialPromo('cta-sia-promo'),
    ],
  },

  // Real success stories from widgit.com/success-stories (summarised).
  'case-study-trust': caseStudy('case-study-trust', 'Education', 'Helping secondary students thrive at Ark Boulton Academy',
    'A whole-school approach to communication and inclusion in a secondary school of around 900 students.',
    ['Ark Boulton Academy has around 900 students, including autistic students, students with ADHD and students with increasingly complex needs.', 'After Colourful Semantics training at Widgit, the school began introducing symbols across the academy.'],
    ['It started with sensory circuits and pocket-sized "secret circuit" cards for over 100 students. Over a half-term trial, pupils with social, emotional and mental health needs saw a 60% average reduction in classroom consequences.', 'Task boards, Now and Next boards and symbolised working walls are now used across most classrooms, so no student feels singled out.'],
    'school-trusts.html', 'For schools and trusts',
    rq('We ensure symbolised communication is used to benefit all learners, preventing any student from feeling singled out.', 'Victoria Hudson', 'Vice Principal (Safeguarding and Inclusion), Ark Boulton Academy')),
  'case-study-nhs': caseStudy('case-study-nhs', 'Public sector', 'How the States of Jersey Police use Widgit Symbols in custody',
    'Symbolised guides help detainees feel calm, informed and supported.',
    ['Custody can feel daunting and stressful. Understanding information and procedures can be hard, especially for people with learning difficulties or disabilities, and for young people.', 'The States of Jersey Police wanted every detainee to understand their rights and entitlements, whatever their needs.'],
    ['A specially designed symbols pack now supports detainees with specific needs. Booking in and PACE rights stay the same, with symbolised information sheets alongside.', 'The materials also help Appropriate Adults, duty lawyers and other partners who work with detainees.'],
    'public-services.html', 'For public services',
    rq('The main purpose of using Widgit Symbols is to improve our custody provision to all detainees.', 'Manny De Freitas', 'Community Response Inspector, States of Jersey Police')),
  'case-study-museum': caseStudy('case-study-museum', 'Leisure', 'Inclusive animal experiences with Woburn Safari Park',
    'How Woburn became the UK\'s first symbol-friendly safari park.',
    ['Woburn Safari Park wanted visitors of all ages, abilities and backgrounds to enjoy the full experience.', 'For the birthday of Wednesday, their one-eyed Bactrian camel, they invited children from Windmill School in Luton to join the celebrations.'],
    ['Before the visit, students received a Story to Help explaining the party schedule. On the day, communication boards supported the meet and greet, and song sheets helped everyone join in.', 'By embedding symbols across the park, Woburn became the UK\'s first symbol-friendly safari park.'],
    'leisure-tourism.html', 'For leisure and tourism',
    rq('Today was also about celebrating the fact we\'re the first zoological collection in the world to become symbol-friendly.', 'Natasha Kyle', 'Head of Education and Customer Liaison, Woburn Safari Park')),

  // ===================== RESOURCES =====================
  resources: {
    hero: { component: 'wf-page-header', props: {
      heading: 'Resources', subtitle: 'Ready-made symbol resources for classrooms, homes and organisations. Filter by subscription, format or topic.',
      breadcrumb: bc({ label: 'Resources', href: 'resources.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'Filter resources', body: ['Price: Free · Free with subscription', 'Format: PDF · InPrint 4 · InPrint 3 · Widgit Online', 'The tabs below filter by category. Price and format filters will appear as dropdowns in design.'] } },
      { component: 'wf-cards', props: { cols: 4, filters: ['All', 'Curriculum', 'Literacy and language', 'Life skills', 'Seasonal'], items: [
        { href: 'resource-visual-timetable.html', id: 'card-res-visual-timetable', category: 'Curriculum', heading: 'Back to School Teacher Toolkit', description: 'Free · Over 50 pages to set up your classroom', imageLabel: 'Teacher toolkit', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Seasonal', heading: 'Bonfire Night: Story to Help', description: 'Free · Understanding fireworks and staying safe', imageLabel: 'Bonfire Night story', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Literacy and language', heading: 'Colourful Semantics Pack', description: 'Free with subscription', imageLabel: 'Colourful Semantics', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Life skills', heading: 'Transition Pack', description: 'Free with subscription · Preparing for each stage of education', imageLabel: 'Transition Pack', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Seasonal', heading: 'Halloween Pack', description: 'Free · Taking part in Halloween and trick or treating', imageLabel: 'Halloween Pack', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Life skills', heading: 'Alternative Provision Pack', description: 'Free with subscription · Learning, regulation and wellbeing', imageLabel: 'Alternative Provision Pack', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', category: 'Literacy and language', heading: 'Dual Language Getting Started with Symbols Pack', description: 'Free with subscription', imageLabel: 'Dual Language pack', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', category: 'Seasonal', heading: 'Learning about the Christmas Play: Story to Help', description: 'Free', imageLabel: 'Christmas Play story', linkText: 'View resource' },
      ] } },
      trialPromo('cta-resources-promo'),
    ],
  },

  'resource-visual-timetable': resourcePage('resource-visual-timetable', 'Curriculum', 'Back to School Teacher Toolkit', 'Free',
    'Over 50 pages of free symbol materials to help you prepare and set up your classroom for a new academic year.',
    ['Download the toolkit and choose the pages that suit your class.', 'Use the materials to set up routines, labels and displays before term starts.']),
  'resource-dentist-story': resourcePage('resource-dentist-story', 'Seasonal', 'Bonfire Night: Story to Help', 'Free',
    'A symbolised story to help children understand Bonfire Night and fireworks, and how to take part safely.',
    ['Read the story together in the days before Bonfire Night, and again on the night.', 'Each page explains one part of the evening, so children know what to expect.']),
  'resource-phonics-mat': resourcePage('resource-phonics-mat', 'Literacy and language', 'Colourful Semantics Pack', 'Free with subscription',
    'Symbolised resources aligned with the Colourful Semantics approach, to help learners develop their spoken and written language.',
    ['Open the pack in your Widgit software and edit the resources for your learners.', 'Which subscriptions include this pack is to be confirmed with Widgit.']),

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
      { component: 'wf-text', props: { heading: 'Before you contact us', body: ['Please have your licence number or Widgit Online email address ready, plus the product name and version.', 'Call 01926 333680 or email support@widgit.com. Support hours: [to be confirmed].'] } },
      contactPromo('cta-tech-promo', 'Still stuck?', 'Our support team will reply by email.', contactLink('support'), 'Contact support'),
    ],
  },

  faqs: {
    hero: { component: 'wf-page-header', props: { heading: 'Frequently asked questions', subtitle: 'Quick answers about accounts, licences and products.', breadcrumb: bc(supCrumb, { label: 'FAQs', href: 'faqs.html' }) } },
    blocks: [
      { component: 'wf-accordion', props: { heading: 'Accounts and licences', items: [
        { heading: 'How many people can use our Widgit Online account?', body: 'It depends on your plan: 1 user on Home, up to 4 on Basic, 20 on Standard, 50 on Plus and 150 on Pro. Enterprise plans cover several sites.' },
        { heading: 'How do InPrint 4 licences work?', body: 'InPrint 4 licences cover a set number of installations at a single location. For more than one site, choose a Multi Site licence.' },
        { heading: 'Can I pay by invoice?', body: 'Yes. Organisations can pay by invoice with an official purchase order on orders over £50.' },
      ] } },
      { component: 'wf-accordion', props: { heading: 'Products', items: [
        { heading: 'Which product should I choose?', body: 'Widgit Online is ideal for anyone starting out, with template-driven resources in your browser. InPrint 4 suits advanced practitioners who want full design control.' },
        { heading: 'Which devices and browsers are supported?', body: 'Widgit Online works in current versions of Chrome, Edge, Firefox and Safari (Mac). Editing on tablets and phones is not fully supported. InPrint 4 is made for Windows.' },
      ] } },
      contactPromo('cta-faqs-contact', 'Did not find your answer?', 'Send your question to our support team.', contactLink('support'), 'Contact support'),
    ],
  },

  training: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'Training',
      body: 'Whether you are new to Widgit or building your skills, join a free webinar or book training tailored to your team.',
      ctaLabel: 'Enquire about training', ctaHref: contactLink('training'), ctaId: 'cta-training-hero', mediaLabel: 'Training session',
      breadcrumb: bc(supCrumb, { label: 'Training', href: 'training.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { heading: 'Free live webinars', cols: 2, items: [
        { href: 'event-webinar.html', category: 'Getting started', heading: 'Introduction to Widgit Online', description: 'Ideal for new users. An introduction to Widgit Symbols and making your own resources.', linkText: 'Book your free place' },
        { href: 'events.html', category: 'Getting started', heading: 'InPrint 4: Getting Started', description: 'Ideal for new users. Key features, and bespoke and template-based resources.', linkText: 'Book your free place' },
      ] } },
      { component: 'wf-cards', props: { cols: 3, items: [
        { href: 'events.html', category: 'Next steps', heading: 'Mastering Widgit Online', description: 'For experienced users who want to do more.', linkText: 'Book your free place' },
        { href: 'events.html', category: 'Next steps', heading: 'Mastering InPrint 4', description: 'Templates, presentations, custom wordlists and advanced editing.', linkText: 'Book your free place' },
        { href: 'events.html', category: 'Inspiration', heading: 'Widgit Symbols Inspiration', description: 'Real-life case studies from a range of settings.', linkText: 'Book your free place' },
      ] } },
      { component: 'wf-text', props: { body: ['Can\'t make it live? Every webinar is also available to watch on demand.'] } },
      { component: 'wf-cards', props: { heading: 'Training tailored to your organisation', cols: 3, items: [
        { href: contactLink('training'), heading: 'Online training: £175 an hour', description: 'Bespoke sessions your team can join from one or several locations.', linkText: 'Enquire' },
        { href: contactLink('training'), heading: 'On-site half day: £550', description: 'Delivered at your school or organisation. Travel costs may be extra.', linkText: 'Enquire' },
        { href: contactLink('training'), heading: 'On-site full day: £800', description: 'Delivered at your school or organisation. Travel and accommodation may be extra.', linkText: 'Enquire' },
      ] } },
      contactPromo('cta-training-promo', 'Plan training for your team', 'Tell us about your team and we will suggest the right course.', contactLink('training'), 'Enquire about training'),
    ],
  },

  events: {
    hero: { component: 'wf-page-header', props: { heading: 'Events', subtitle: 'Webinars, exhibitions, presentations, conferences, study days and training. Filter by type.', breadcrumb: bc(supCrumb, { label: 'Events', href: 'events.html' }) } },
    blocks: [
      { component: 'wf-cards', props: { cols: 3, filters: ['All', 'Online', 'In person'], items: [
        { href: 'event-webinar.html', category: 'Online', heading: 'Introduction to Widgit Symbols and Widgit Online', description: 'Free webinar · [Date]', imageLabel: 'Webinar', linkText: 'View event' },
        { href: 'event-exhibition.html', category: 'In person', heading: 'Widgit at the Education Show', description: 'Exhibition · [Date] · [Venue]', imageLabel: 'Exhibition', linkText: 'View event' },
        { href: 'event-webinar.html', category: 'Online', heading: 'Mastering Widgit Online', description: 'Free webinar · [Date]', imageLabel: 'Webinar', linkText: 'View event' },
        { href: 'event-webinar.html', category: 'Online', heading: 'InPrint 4: Getting Started', description: 'Free webinar · [Date]', imageLabel: 'Webinar', linkText: 'View event' },
        { href: 'event-exhibition.html', category: 'In person', heading: 'SEND study day', description: 'Study day · [Date] · [Venue]', imageLabel: 'Study day', linkText: 'View event' },
        { href: 'event-webinar.html', category: 'Online', heading: 'Widgit Symbols Inspiration', description: 'Free webinar · [Date]', imageLabel: 'Webinar', linkText: 'View event' },
      ] } },
      trialPromo('cta-events-promo'),
    ],
  },

  'event-webinar': eventPage('event-webinar', 'Online · Free webinar', 'Introduction to Widgit Symbols and Widgit Online',
    'A free webinar for anyone new to Widgit Online.',
    ['This webinar gives an overview of Widgit Symbols and introduces how to create your own personalised resources in Widgit Online.', 'Join live, or watch on demand at a time that suits you.'], '[Date] · [Time] UK · Online'),
  'event-exhibition': eventPage('event-exhibition', 'In person · Exhibition', 'Widgit at the Education Show',
    'Visit our stand to see the latest Widgit products and talk to our team.',
    ['Get a hands-on demo of Widgit Online and InPrint 4.', 'Book a time with our education team in advance, or just drop by.'], '[Date] · [Venue] · Stand [00]'),

  'widgit-centres': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'Support', heading: 'Widgit Centres',
      body: 'Widgit Centres are a UK-wide network of organisations offering local advice, guidance and support on Widgit products.',
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
      { component: 'wf-text', props: { body: ['Pick a topic below. Sales, licensing, Symbol-Friendly, support and training enquiries are each routed to a dedicated team, so you will hear from someone who can help. We aim to reply within [2] working days.', 'Prefer to call or email? Call 01926 333680, or email info@widgit.com for sales, support@widgit.com for technical help and copyright@widgit.com for licensing. Our address is Widgit Software, 1st Floor, Bishops House, Artemis Drive, Tachbrook Park, Warwick CV34 6UD.'] } },
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
          { key: 'licensing', tabLabel: 'Symbol licensing', autoSelectParam: 'licensing', heading: 'Licensing enquiry', intro: 'Goes to our licensing team. You can also email copyright@widgit.com.', submitLabel: 'Send licensing enquiry', submitId: 'submit-contact-licensing',
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
        { href: 'case-study-trust.html', category: 'Symbols', heading: 'Ark Boulton Academy: Now and Next boards in every classroom', description: 'Symbols in Action', linkText: 'Read the story' },
        { href: 'universal-language.html', category: 'Symbols', heading: 'Symbols as a Universal Language', description: 'Widgit Symbols', linkText: 'Learn more' },
      ] } },
      contactPromo('cta-search-promo', 'Can\'t find what you need?', 'Ask our team and we will point you in the right direction.', contactLink('general')),
    ],
  },

  // ===================== COUNTRY LANDING PAGES =====================
  sweden: countryPage({ slug: 'sweden', country: 'Sweden', partner: 'Symbolbruket AB', address: 'Storgatan 28, 582 28 Linköping, Sweden', email: 'info@symbolbruket.se', phone: '(+46) 13-712 70', web: 'www.symbolbruket.se', language: 'Swedish', products: ['InPrint 4', 'InPrint 3', 'SymWriter 2', 'Widgit Online', 'Widgit Go'] }),
  norway: countryPage({ slug: 'norway', country: 'Norway', partner: 'Normedia', address: 'Håkonkastet 5, 1453 Bjørnemyr, Norway', email: 'kontakt@normedia.no', phone: '(+47) 66 915440', web: 'www.normedia.no', language: 'Norwegian', products: ['InPrint 3', 'SymWriter 2', 'Widgit Online', 'Widgit Writer', 'Widgit Go'] }),
  finland: countryPage({ slug: 'finland', country: 'Finland', partner: 'symboLink', address: 'Risviksvägen 4 A 8, 00200 Helsingfors, Finland', email: 'info@symbolink.fi', phone: '+358 41 3288628', web: 'www.symbolink.fi', language: 'Finnish', products: ['SymWriter', 'Kerro kuvin 3 (InPrint 3)', 'Widgit Online', 'Widgit Go'] }),
  italy: countryPage({ slug: 'italy', country: 'Italy', partner: 'Auxilia', address: 'Viale Carlo Sigonio, 227, 41124 Modena, Italy', email: 'info@auxilia.it', phone: '059 216311', web: 'www.auxilia.it', language: 'Italian', products: ['InPrint 3', 'SymWriter 2', 'Widgit Online', 'Widgit Go'] }),
  canada: countryPage({ slug: 'canada', country: 'Canada', partner: 'Bridges', address: '2123 McCowan Road, Scarborough, Ontario, M1S 3Y6', email: 'info@bridges-canada.com', phone: 'Toll free 1-800-353-1107, or 905-542-7232', web: 'www.bridges-canada.com', language: 'English and French', products: ['InPrint 4 (English and French)', 'Widgit Online (English and French)', 'SymWriter 2 (English and French)', 'First Keys 3'] }),
  australia: countryPage({ slug: 'australia', country: 'Australia', partner: 'Spectronics', address: 'PO Box 88, Rochedale, Queensland 4123, Australia', email: 'mail@spectronics.com.au', phone: '(+61) 7 3808 6833', web: 'www.spectronics.com.au', language: 'English, covering Australia and New Zealand', products: ['Widgit Online', 'SymWriter 2', 'InPrint 3'] }),


  // ===================== ABOUT (copy from widgit.com/about-widgit) =====================
  about: {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'About Widgit', heading: 'Symbols are our world',
      body: 'We are Widgit, a pioneering software company with a passion for symbol-based communication. We help people of all ages express themselves independently and understand the world around them.',
      ctaLabel: 'About us', ctaHref: 'about-us.html', ctaId: 'cta-about-hero', secondaryLabel: 'Latest news', secondaryHref: 'news.html',
      mediaLabel: 'The Widgit team', breadcrumb: bc({ label: 'About', href: 'about.html' }),
    } },
    blocks: [
      { component: 'wf-statistics', props: { heading: 'Widgit at a glance', items: [
        { value: '40+', label: 'Years of Widgit Symbols' },
        { value: '100,000+', label: 'Widgit Symbols' },
        { value: '10,000+', label: 'Schools using Widgit Symbols' },
        { value: '117.8', label: 'B Impact score as a certified B Corp' },
      ] } },
      { component: 'wf-text-media', props: {
        heading: 'What we do',
        body: ['We believe in a world where everyone has the right to understand and be understood. Widgit Symbols help with communication, education and understanding in schools, homes, healthcare and on the move.',
          'Our partners range from national theatre groups and Premier League football clubs to families in the local community, and from SEN schools in Sweden to international schools in the UAE.'],
        side: 'left', mediaLabel: 'Widgit Symbols in use', ctaLabel: 'Explore our products', ctaHref: 'products.html',
      } },
      { component: 'wf-cards', props: { heading: 'Find out more', cols: 2, items: [
        { href: 'about-us.html', id: 'card-about-us', heading: 'About us', description: 'Our mission and values, the people behind the symbols, and what being a B Corp means to us.', imageLabel: 'Widgit office', linkText: 'Read about us' },
        { href: 'news.html', id: 'card-about-news', heading: 'News', description: 'Company news, staff spotlights and stories from our community work.', imageLabel: 'News', linkText: 'See all news' },
      ] } },
      { component: 'wf-cards', props: { heading: 'Latest news', cols: 3, items: [
        { href: 'news-staff-spotlight-sophie.html', category: 'Staff spotlight', heading: 'Staff spotlight: Sophie Clarke, Signage and Symbol Design Support', description: 'June 2026', imageLabel: 'Sophie Clarke', linkText: 'Read more' },
        { href: 'news-bcorp.html', category: 'B Corp', heading: 'A balance of purpose and profit: Widgit\'s B Corp journey', description: 'October 2025', imageLabel: 'B Corp', linkText: 'Read more' },
        { href: 'news-widgit-wilding.html', category: 'Widgit Wilding', heading: 'Widgit Wilding Part IV: Gardening at Painting\'s Plantation', description: 'June 2025', imageLabel: 'Team gardening', linkText: 'Read more' },
      ] } },
      trialPromo('cta-about-promo'),
    ],
  },

  'about-us': {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: 'About Widgit', heading: 'About us',
      body: 'We\'re a growing company of enthusiastic, dedicated people who share a passion for what we do, and how we do it.',
      mediaLabel: 'The Widgit team at work', breadcrumb: bc({ label: 'About', href: 'about.html' }, { label: 'About us', href: 'about-us.html' }),
    } },
    blocks: [
      { component: 'wf-text', props: { statement: true, heading: 'Our mission',
        body: ['We believe in the power of symbols to support communication and understanding. Our software and symbols help practitioners support symbol users of all ages, so no-one feels left behind.'] } },
      { component: 'wf-cards', props: { heading: 'Our values', cols: 3, items: [
        { heading: 'Integrity', description: 'Treating everyone and everything we do in an honest and respectful manner.' },
        { heading: 'Kindness', description: 'Acting in a positive, supportive and understanding way towards everyone we work with.' },
        { heading: 'Quality', description: 'Taking pride in our work and constantly striving to improve and evolve.' },
      ] } },
      { component: 'wf-text-media', props: {
        heading: 'Who we are',
        body: ['From expert educators to some of the brightest nerds around, we\'re a kind bunch of people who want to do good in the world.',
          'We work mostly hybrid, with flexible hours, from our office in Warwickshire. As a Living Wage employer, we pay our team based on the cost of living.'],
        side: 'right', mediaLabel: 'Warwickshire office',
      } },
      { component: 'wf-cards', props: { heading: 'Our leadership team', cols: 4, items: [
        { heading: 'Ben Stevenson', description: 'Chief Executive Officer', imageLabel: 'Photo' },
        { heading: 'Clare Westwood', description: 'Chief Product Officer', imageLabel: 'Photo' },
        { heading: 'Jonathan Sullivan', description: 'Chief Growth Officer', imageLabel: 'Photo' },
        { heading: 'Paul Williams', description: 'Chief Finance Officer', imageLabel: 'Photo' },
      ] } },
      { component: 'wf-text-media', anchorId: 'b-corp', props: {
        heading: 'Proud to be a B Corp',
        body: ['B Corps meet high standards of social and environmental performance, accountability and transparency. Certification needs a score of 80; Widgit scores 117.8.',
          'From monitoring our carbon footprint to giving back to the community, it\'s a promise to keep pushing for better for our team, our customers and the world around us.'],
        side: 'left', mediaLabel: 'B Corp certification mark', ctaLabel: 'Read our B Corp story', ctaHref: 'news-bcorp.html',
      } },
      { component: 'wf-quote', props: { items: [
        rq('The B Corp journey has helped us turn our values into actions. It\'s about being transparent, accountable, and constantly improving.', 'Kiran Heer', 'Office and Events Manager'),
        rq('As an organisation built on integrity, kindness and quality, B Corp is a powerful extension of our shared goal to help make the world a better place, one small symbol at a time.', 'Louise Hopewell', 'Content Lead'),
      ] } },
      { component: 'wf-text', props: { heading: 'Giving back',
        body: ['In 2024/25 we supported dozens of charities and community groups, including ACE Centre, BBC Children in Need, Birmingham Children\'s Hospital, Epilepsy Action and Macmillan Cancer Support.',
          'Our Widgit Wilding volunteer days see the team planting trees and caring for school green spaces across Warwickshire.'] } },
      { component: 'wf-text', props: { heading: 'Our history',
        body: ['From our first ZX Spectrum games to Widgit Online, Widgit Symbols have supported communication for more than 40 years.'] } },
      contactPromo('cta-about-us-promo', 'Want to work with us?', 'Whether you\'re a school, an organisation or a potential partner, we\'d love to hear from you.', contactLink('general')),
    ],
  },

  news: {
    hero: { component: 'wf-page-header', props: {
      heading: 'News', subtitle: 'Company news, staff spotlights and stories from the Widgit community.',
      breadcrumb: bc({ label: 'About', href: 'about.html' }, { label: 'News', href: 'news.html' }),
    } },
    blocks: [
      { component: 'wf-cards', props: { cols: 4, filters: ['All', 'Staff spotlight', 'B Corp', 'Community', 'Widgit Wilding'], items: [
        { href: 'news-staff-spotlight-sophie.html', id: 'card-news-sophie', category: 'Staff spotlight', heading: 'Staff spotlight: Sophie Clarke, Signage and Symbol Design Support', description: 'June 2026', imageLabel: 'Sophie Clarke', linkText: 'Read more' },
        { href: 'news-bcorp.html', category: 'B Corp', heading: 'The B Corp effect: behind the scenes with Widgit and Be Inspired Films', description: 'March 2026', imageLabel: 'Filming', linkText: 'Read more' },
        { href: 'news-staff-spotlight-sophie.html', category: 'Staff spotlight', heading: 'Staff spotlight: Lisa Pinkerton, Head of Education', description: 'November 2025', imageLabel: 'Lisa Pinkerton', linkText: 'Read more' },
        { href: 'news-bcorp.html', category: 'B Corp', heading: 'A balance of purpose and profit: Widgit\'s B Corp journey', description: 'October 2025', imageLabel: 'B Corp', linkText: 'Read more' },
        { href: 'news-widgit-wilding.html', category: 'Widgit Wilding', heading: 'Widgit Wilding Part IV: Gardening at Painting\'s Plantation, Campion School', description: 'June 2025', imageLabel: 'Team gardening', linkText: 'Read more' },
        { href: 'news-staff-spotlight-sophie.html', category: 'Staff spotlight', heading: 'Staff spotlight: Dan Williams, Product Designer', description: 'May 2025', imageLabel: 'Dan Williams', linkText: 'Read more' },
        { href: 'news-widgit-wilding.html', category: 'Widgit Wilding', heading: 'Widgit Wilding Part III: Tree planting in Chesterton', description: 'March 2025', imageLabel: 'Tree planting', linkText: 'Read more' },
        { href: 'news-widgit-wilding.html', category: 'Community', heading: 'Widgit Staff Volunteer Day: Louise at Baby Basics', description: 'February 2025', imageLabel: 'Volunteer day', linkText: 'Read more' },
      ] } },
      trialPromo('cta-news-promo'),
    ],
  },

  'news-bcorp': newsArticle('news-bcorp', 'B Corp', 'A balance of purpose and profit: Widgit\'s B Corp journey', 'October 2025',
    'How Widgit found the right way to show it is a business that puts people first.',
    [
      { body: ['At Widgit, we\'ve always believed in purpose, driven by our values of quality, integrity and kindness. For years, though, we searched for the right way to show this to the business community and beyond.',
        'We considered setting up a charitable arm, or becoming a not-for-profit or social enterprise. None felt right, because the good we do is woven into our products and services.'] },
      { heading: 'The B Corp revelation', body: ['B Corp certification had been mentioned for years, but it always sounded like a goal for much larger organisations.',
        'Conversations with the CEO of Cafe Direct, and later with Risk Evolves, showed us that much of what B Corp asks for, we were already doing. It wasn\'t about a radical shift, but about documenting our existing good practice.'] },
      { heading: 'Our journey to certification', body: ['We worked through the assessment question by question, and brought in an HR professional and a writer to turn our "Widgity" way of working into formal policies.',
        'Our first internal audit scored around 60, against the 80 points needed for certification. We now score 117.8.'] },
      { heading: 'Advice for other businesses', body: ['The sooner, the better. Even if certification isn\'t your immediate goal, the B Corp assessment questions are an invaluable guide to areas you might not have considered.'] },
    ], ['news-staff-spotlight-sophie', 'news-widgit-wilding']),

  'news-staff-spotlight-sophie': newsArticle('news-staff-spotlight-sophie', 'Staff spotlight', 'Staff spotlight: Sophie Clarke, Signage and Symbol Design Support', 'June 2026',
    'From work experience with the design team to becoming Widgit\'s first Signage and Symbol Design Support.',
    [
      { body: ['We sat down with Sophie Clarke to talk about her Widgit journey so far, her hopes for the future and, of course, her favourite Widgit Symbol.'] },
      { heading: 'From work experience to a new role', body: ['After a GCSE in Graphic Design, Sophie approached Widgit about work experience. She worked with our Symbol and Information Designer, learning the rules every symbol must follow and redrawing symbols, including the horse.'] },
      { heading: 'No day is the same', body: ['Sophie quotes for and designs Communication Boards and door signs, draws and checks new symbols before final approval, and has recently started writing the code behind Widgit Online templates.'] },
      { heading: 'Her favourite Widgit Symbol', body: ['"Probably the axolotl (not yet in the set), simply because it was very fun to draw and they are such fun, unique little creatures."'] },
    ], ['news-bcorp', 'news-widgit-wilding'],
    rq('No matter what project I\'m working on, I always feel I have the support and help I need to do my job well.', 'Sophie Clarke', 'Signage and Symbol Design Support')),

  'news-widgit-wilding': newsArticle('news-widgit-wilding', 'Widgit Wilding', 'Widgit Wilding Part IV: Gardening at Painting\'s Plantation, Campion School', 'June 2025',
    'The Widgit team spent a day caring for a school\'s green space in Leamington Spa.',
    [
      { body: ['With summer on its way, the Widgit team set out for a day of fresh air and teamwork at Campion School in Leamington Spa, helping to care for the school\'s green space, Painting\'s Plantation.'] },
      { heading: 'A living classroom', body: ['The tree-filled garden is named after Norman Painting OBE, a passionate advocate for the natural world and former Vice President of the Tree Council. It\'s a quiet retreat for students, and a living classroom.'] },
      { heading: 'A day of pruning and mulching', body: ['We split into teams to prune overhanging branches, barrow mulch onto the beds and cut back a laurel hedge that had grown a little too confident over the years.',
        'By lunchtime, the garden felt more open, vibrant and ready for both learning and wildlife.'] },
    ], ['news-bcorp', 'news-staff-spotlight-sophie']),

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
    { heading: 'Sharing materials you have made', body: ['If you have a licence and your files can only be opened in licensed Widgit software, there is no extra charge. If you share symbols in another form, printed or electronic, including on a website, charges may apply.', 'Licence holders can give away a small number of printed or web documents for free, as long as all of them together use no more than 100 different symbols.'] },
    { heading: 'Selling materials', body: ['Anyone who wants to sell resources containing Widgit Symbols must apply for permission. Charges may apply.'] },
    { heading: 'Acknowledgement', body: ['Every resource, free or for sale, must show: Widgit Symbols © Widgit Software Ltd 2002-[current year], www.widgit.com.', 'For copyright enquiries, email copyright@widgit.com.'] },
  ]),
}

// Templates declared as functions below `pages` are hoisted, so they can be used above.
function caseStudy(slug: string, category: string, title: string, standfirst: string, challenge: string[], result: string[], sectorHref: string, sectorLabel: string, q?: { quote: string; attribution: string; role?: string }): Page {
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `Case study · ${category}`, heading: title, body: standfirst, mediaLabel: `${title} hero image`,
      breadcrumb: bc(symCrumb, { label: 'Symbols in Action', href: 'symbols-in-action.html' }, { label: title, href: `${slug}.html` }),
    } },
    blocks: [
      { component: 'wf-text', props: { heading: 'The challenge', body: challenge, centered: true } },
      { component: 'wf-media', props: { type: 'image', label: 'Symbols in use on site', caption: 'Caption to be supplied.', centered: true } },
      { component: 'wf-text', props: { heading: 'What changed', body: result, centered: true } },
      { component: 'wf-quote', props: { items: [q || quote('Symbols are now part of how we work, not an extra.', `Project lead, ${category.toLowerCase()} organisation`)] } },
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
        { href: 'resource-visual-timetable.html', heading: 'Back to School Teacher Toolkit', description: 'Free', imageLabel: 'Teacher toolkit', linkText: 'View resource' },
        { href: 'resource-dentist-story.html', heading: 'Bonfire Night: Story to Help', description: 'Free', imageLabel: 'Bonfire Night story', linkText: 'View resource' },
        { href: 'resource-phonics-mat.html', heading: 'Colourful Semantics Pack', description: 'Free with subscription', imageLabel: 'Colourful Semantics', linkText: 'View resource' },
      ] } },
      { component: 'wf-promo', props: {
        heading: 'Make your own version', body: 'Edit this resource or create your own in Widgit Online. Try it free for 21 days.',
        side: 'left', ctaLabel: 'Start free trial', ctaHref: 'free-trial.html', ctaId: `cta-${slug}-promo`, mediaLabel: 'Editing a resource',
      } },
    ],
  }
}

function newsArticle(slug: string, category: string, title: string, date: string, standfirst: string,
  sections: { heading?: string; body: string[] }[], related: string[], q?: { quote: string; attribution: string; role?: string }): Page {
  const text = (sec: { heading?: string; body: string[] }): Block => ({ component: 'wf-text', props: { heading: sec.heading || '', body: sec.body, centered: true } })
  const [first, ...rest] = sections
  return {
    hero: { component: 'wf-standard-hero', props: {
      eyebrow: `${category} · ${date}`, heading: title, body: standfirst, mediaLabel: `${title} image`,
      breadcrumb: bc({ label: 'About', href: 'about.html' }, { label: 'News', href: 'news.html' }, { label: title, href: `${slug}.html` }),
    } },
    blocks: [
      text(first),
      { component: 'wf-media', props: { type: 'image', label: 'Article image', caption: 'Caption to be supplied.', centered: true } },
      ...rest.slice(0, 1).map(text),
      ...(q ? [{ component: 'wf-quote', props: { items: [q] } } as Block] : []),
      ...rest.slice(1).map(text),
      { component: 'wf-share', props: { centered: true } },
      { component: 'wf-cards', props: { heading: 'More news', cols: 3, items: [
        ...related.map((r) => ({ href: `${r}.html`, category: NEWS_TITLES[r].category, heading: NEWS_TITLES[r].title, description: NEWS_TITLES[r].date, imageLabel: NEWS_TITLES[r].category, linkText: 'Read more' })),
        { href: 'news.html', heading: 'All news', description: 'Company news, staff spotlights and community stories.', imageLabel: 'News', linkText: 'See all news' },
      ] } },
      trialPromo(`cta-${slug}-promo`),
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
        { href: 'event-webinar.html', heading: 'Introduction to Widgit Symbols and Widgit Online', description: 'Online · Free', linkText: 'View event' },
        { href: 'event-exhibition.html', heading: 'Widgit at the Education Show', description: 'In person · Exhibition', linkText: 'View event' },
      ] } },
      trialPromo(`cta-${slug}-promo`),
    ],
  }
}

// ---------------------------------------------------------------------------
// Prototype navigator: core pages (grouped by template type), user flows, changelog.
// ---------------------------------------------------------------------------

export type CorePageType = 'Homepage' | 'Landing' | 'Content' | 'Country landing' | 'Listing' | 'Article' | 'Detail' | 'Form' | 'Hand-off' | 'Utility'
export const CORE_PAGE_TYPES: CorePageType[] = ['Homepage', 'Landing', 'Content', 'Country landing', 'Listing', 'Article', 'Detail', 'Form', 'Hand-off', 'Utility']

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
  { label: 'News', href: 'news.html', type: 'Listing' },
  { label: 'About', href: 'about.html', type: 'Landing' },
  { label: 'About us', href: 'about-us.html', type: 'Content' },
  { label: 'News article', href: 'news-bcorp.html', type: 'Article', inferred: true },
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
      { href: 'resources.html', targetId: 'card-res-visual-timetable', label: 'Resources', instruction: 'Click "Back to School Teacher Toolkit".' },
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
  { date: '2026-11-12', type: 'Added', text: 'New About section in the main navigation, after Resources.' },
  { date: '2026-11-12', type: 'Added', text: 'About landing page, About us page and News listing, with copy from widgit.com.' },
  { date: '2026-11-12', type: 'Added', text: 'Three news articles, taken from the Widgit company blog.' },
  { date: '2026-11-12', type: 'Fixed', text: 'Main navigation labels no longer wrap onto two lines on smaller laptop screens.' },
  { date: '2026-11-11', type: 'Changed', text: 'Filled in copy, prices and figures from the current widgit.com.' },
  { date: '2026-11-11', type: 'Changed', text: 'All six country pages now name the local partner and contact details.' },
  { date: '2026-11-11', type: 'Changed', text: 'Case studies now use real Widgit success stories.' },
  { date: '2026-11-11', type: 'Changed', text: 'Placeholder testimonials replaced with real quotes from widgit.com.' },
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
