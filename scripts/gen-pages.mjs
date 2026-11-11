#!/usr/bin/env node
// Generates the project's *.html page shells from a manifest. Each shell is ~10 lines: it points
// <wf-page-body page="..."> at its src/config.ts entry — content is data, not hand-written markup.
// Re-run any time the manifest below changes (e.g. a new page is added to src/config.ts).
//
// THIS FILE IS A STARTING TEMPLATE. The `page()`/components.html-writing logic below is generic and
// shouldn't need to change — replace SITE_NAME and the PAGES manifest with the real project's values
// (SITE_NAME must match `siteName` in src/config.ts — it's duplicated here, not imported, since this
// is a plain .mjs script and src/config.ts is TypeScript). One PAGES row per page: [file,
// page-config-key, active-nav-slug, <title>], matching the real `pages` keys and `primaryNav` slugs.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const SITE_NAME = 'Widgit'

// [file, page-config-key, active-nav-slug, <title>, region?]
const PAGES = [
  ['index.html', 'homepage', '', 'Symbols that help everyone understand'],
  ['who-we-help.html', 'who-we-help', 'who-we-help', 'Who we help'],
  ['education.html', 'education', 'who-we-help', 'Education'],
  ['school-trusts.html', 'school-trusts', 'who-we-help', 'School trusts and groups (MATs)'],
  ['single-site-schools.html', 'single-site-schools', 'who-we-help', 'Single-site schools'],
  ['international-schools.html', 'international-schools', 'who-we-help', 'International schools'],
  ['health-social-care.html', 'health-social-care', 'who-we-help', 'Health and Social Care'],
  ['government-local-authorities.html', 'government-local-authorities', 'who-we-help', 'Government and Local Authorities'],
  ['public-services.html', 'public-services', 'who-we-help', 'Public Services'],
  ['leisure-tourism.html', 'leisure-tourism', 'who-we-help', 'Leisure and Tourism'],
  ['parents-carers.html', 'parents-carers', 'who-we-help', 'Parents, Carers and Individuals'],
  ['products.html', 'products', 'products', 'Products'],
  ['widgit-online.html', 'widgit-online', 'products', 'Widgit Online'],
  ['inprint-4.html', 'inprint-4', 'products', 'InPrint 4'],
  ['symwriter.html', 'symwriter', 'products', 'Symwriter'],
  ['digital-accessibility.html', 'digital-accessibility', 'products', 'Digital Accessibility'],
  ['widgit-apps.html', 'widgit-apps', 'products', 'Widgit Apps'],
  ['partner-products.html', 'partner-products', 'products', 'Partner Products'],
  ['plans-pricing.html', 'plans-pricing', 'products', 'Plans and pricing'],
  ['plans-pricing-international.html', 'plans-pricing-international', 'products', 'Pricing for international schools'],
  ['widgit-symbols.html', 'widgit-symbols', 'symbols', 'Widgit Symbols'],
  ['universal-language.html', 'universal-language', 'symbols', 'Symbols as a Universal Language'],
  ['symbol-friendly.html', 'symbol-friendly', 'symbols', 'Become a Symbol-Friendly Organisation'],
  ['symbol-licensing.html', 'symbol-licensing', 'symbols', 'Symbol copyright and licensing'],
  ['symbol-services.html', 'symbol-services', 'symbols', 'Symbol Services'],
  ['symbols-in-action.html', 'symbols-in-action', 'symbols', 'Symbols in Action'],
  ['case-study-trust.html', 'case-study-trust', 'symbols', 'Case study: school trust'],
  ['case-study-nhs.html', 'case-study-nhs', 'symbols', 'Case study: NHS trust'],
  ['case-study-museum.html', 'case-study-museum', 'symbols', 'Case study: museum'],
  ['resources.html', 'resources', 'resources', 'Resources'],
  ['resource-visual-timetable.html', 'resource-visual-timetable', 'resources', 'Daily visual timetable'],
  ['resource-dentist-story.html', 'resource-dentist-story', 'resources', 'Going to the dentist'],
  ['resource-phonics-mat.html', 'resource-phonics-mat', 'resources', 'Phonics word mat'],
  ['support.html', 'support', 'support', 'Support'],
  ['technical-support.html', 'technical-support', 'support', 'Technical Support'],
  ['faqs.html', 'faqs', 'support', 'FAQs'],
  ['training.html', 'training', 'support', 'Training'],
  ['events.html', 'events', 'support', 'Events'],
  ['event-webinar.html', 'event-webinar', 'support', 'Webinar: Symbols in the mainstream classroom'],
  ['event-exhibition.html', 'event-exhibition', 'support', 'Widgit at the Education Show'],
  ['widgit-centres.html', 'widgit-centres', 'support', 'Widgit Centres'],
  ['contact.html', 'contact', '', 'Contact us'],
  ['search.html', 'search', '', 'Search'],
  ['sweden.html', 'sweden', '', 'Widgit in Sweden', 'Sweden'],
  ['norway.html', 'norway', '', 'Widgit in Norway', 'Norway'],
  ['finland.html', 'finland', '', 'Widgit in Finland', 'Finland'],
  ['italy.html', 'italy', '', 'Widgit in Italy', 'Italy'],
  ['canada.html', 'canada', '', 'Widgit in Canada', 'Canada'],
  ['australia.html', 'australia', '', 'Widgit in Australia', 'Australia'],
  ['free-trial.html', 'free-trial', '', 'Start your free trial'],
  ['login.html', 'login', '', 'Log in to Widgit Online'],
  ['shop.html', 'shop', '', 'Widgit Shop'],
  ['shop-account.html', 'shop-account', '', 'My Shop Account'],
  ['support-docs.html', 'support-docs', 'support', 'Support Docs'],
  ['terms.html', 'terms', '', 'Terms and Conditions'],
  ['privacy-policy.html', 'privacy-policy', '', 'Privacy Policy'],
  ['symbol-copyright.html', 'symbol-copyright', '', 'Widgit Symbol Copyright'],
]

const page = (pageKey, active, title, region) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - ${SITE_NAME}</title>
    <script type="module" src="/src/main.ts"></script>
  </head>
  <body class="bg-gray-50 text-gray-900">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-gray-900 focus:text-white focus:px-4 focus:py-2 focus:text-sm">Skip to content</a>
    <wf-header-nav active="${active}"${region ? ` region="${region}"` : ''}></wf-header-nav>
    <main id="main" class="w-full mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <wf-page-body page="${pageKey}"></wf-page-body>
    </main>
    <wf-site-footer></wf-site-footer>
    <wf-prototype-nav></wf-prototype-nav>
  </body>
</html>
`

for (const [file, pageKey, active, title, region] of PAGES) {
  writeFileSync(resolve(root, file), page(pageKey, active, title, region))
}

// Component palette page — its own tooling component, not <wf-page-body>-driven.
writeFileSync(resolve(root, 'components.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Component List - ${SITE_NAME}</title>
    <script type="module" src="/src/main.ts"></script>
  </head>
  <body class="bg-gray-50 text-gray-900">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-gray-900 focus:text-white focus:px-4 focus:py-2 focus:text-sm">Skip to content</a>
    <wf-header-nav minimal></wf-header-nav>
    <main id="main" class="w-full mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <wf-palette-page></wf-palette-page>
    </main>
    <wf-prototype-nav></wf-prototype-nav>
  </body>
</html>
`)

console.log(`Generated ${PAGES.length + 1} HTML pages.`)
