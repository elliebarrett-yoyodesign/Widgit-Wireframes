# Widgit website wireframes

Greyscale, clickable wireframe prototype for the widgit.com redesign. Built from the Revised Sitemap v1 (Figma), the Widgit User Personas (July 2026) and Widgit's audience priorities.

Run: `npm install && npm run dev`. Build: `npm run build`.

The **Prototype** button (bottom right of every page) opens Core pages, User flows (with step-by-step walkthroughs), Change log and the Component List.

## Decisions agreed (10 Nov 2026)

- Products use the current sitemap names (Widgit Online, InPrint 4, Symwriter), not the Design Vision suite.
- Licensing, Symbol-Friendly, support and training enquiries all route to one Contact page. The form has a tab per enquiry type, and links elsewhere deep-link to the right tab (e.g. `contact.html?licensing#contact-form`).
- Free trial hands off to the Widgit Online sign-up.
- Region switcher in the header routes to country landing pages.
- Who we help leads the main navigation.

## Concept elements added (11 Nov 2026)

Taken from the client-approved concept at widgit.yoyoqa.site. The concept's navigation was not copied, because the nav has moved on since.

- **Symbol arc hero** (`wf-symbol-arc`, hero variant): big statement heading, one CTA, labelled symbol tiles on three arcs that turn slightly on scroll. Replaces the homepage hero.
- **Mission statement** (`wf-text` with `statement`): "We believe in empowering individuals", under the hero.
- **Product tour** (`wf-product-tour`): tabs for Widgit Online and InPrint 4, a screenshot with numbered feature hotspots, and three feature cards per product. On the homepage, plus single-product versions on the Widgit Online and InPrint 4 pages.
- **Closing symbol band** (`wf-symbol-arc`, band variant) near the end of the homepage.
- **Reduce motion switch** in the footer. It follows the device's reduced-motion setting until the visitor chooses, remembers the choice in that browser, and switches off every animation and transition site-wide, including the symbol arcs.

## Copy from the live site (11 Nov 2026)

Prices, figures, partner details, testimonials, success stories, training, licensing and services copy are now taken from the current widgit.com. Anything still in square brackets wasn't on the live site.

## Pages

| Template | Type | Route |
|---|---|---|
| Homepage (UK) | Homepage | index.html |
| Who we help | Content | who-we-help.html |
| Education | Content | education.html |
| Sector page (trusts, health, government, public services, leisure, parents) | Content | school-trusts.html, health-social-care.html, government-local-authorities.html, public-services.html, leisure-tourism.html, parents-carers.html |
| Single-site schools | Content | single-site-schools.html |
| International schools | Content | international-schools.html |
| Products hub | Content | products.html |
| Product page | Content | widgit-online.html, inprint-4.html, symwriter.html, digital-accessibility.html, widgit-apps.html |
| Partner Products | Content | partner-products.html |
| Plans and pricing (UK, international) | Content | plans-pricing.html, plans-pricing-international.html |
| Widgit Symbols hub and children | Content | widgit-symbols.html, universal-language.html, symbol-friendly.html, symbol-licensing.html, symbol-services.html |
| Support hub and children | Content | support.html, technical-support.html, faqs.html, training.html, widgit-centres.html |
| Country landing | Country landing | sweden.html, norway.html, finland.html, italy.html, canada.html, australia.html |
| Symbols in Action | Listing | symbols-in-action.html |
| Case study | Article | case-study-trust.html, case-study-nhs.html, case-study-museum.html |
| Resources | Listing | resources.html |
| Resource page | Detail | resource-visual-timetable.html, resource-dentist-story.html, resource-phonics-mat.html |
| Events | Listing | events.html |
| Event page | Detail | event-webinar.html, event-exhibition.html |
| About | Landing | about.html |
| About us | Content | about-us.html |
| News | Listing | news.html |
| News article | Article | news-bcorp.html, news-staff-spotlight-sophie.html, news-widgit-wilding.html |
| Contact us (routed) | Form | contact.html |
| External hand-offs | Hand-off | free-trial.html, login.html, shop.html, shop-account.html, support-docs.html |
| Search results | Utility | search.html |
| Legal | Utility | terms.html, privacy-policy.html, symbol-copyright.html |

## User flows

1. **New primary school starts a trial (Isobel):** Homepage → Education → Single-site schools → Widgit Online → Plans and pricing → Free trial hand-off
2. **Trust leader requests a quote (Jane):** Homepage → Who we help → School trusts → Contact (Sales and quotes)
3. **Company enquires about symbol licensing:** Homepage → Widgit Symbols → Copyright and licensing → Contact (Symbol licensing)
4. **Existing customer needs help (Sidra):** Homepage → Support → Technical Support → FAQs → Contact (Technical support)
5. **Parent finds a free resource (Jerome):** Homepage → Who we help → Parents and Carers → Resources → Resource page
6. **International school asks for pricing:** Homepage → Education → International schools → International pricing → Contact (Sales and quotes)

## Inferred additions

- Case study, Resource and Event detail templates (the sitemap has the listings but not the detail pages).
- Search results page (the sitemap shows a search box but no results page).
- Hand-off pages for Shop, My Shop Account, Log in, Free trial and Support Docs, so the review shows where users leave widgit.com.
- Country landing pages for Sweden, Norway, Finland, Italy, Canada and Australia, based on Widgit's partner and growth markets.

## Open questions for Widgit

- Country pages now link out to partner websites. Confirm that is the intended behaviour.
- Widgit Online sign-up URL, and whether plan or region is passed through.
- Whether Shop and Widgit Online will share one login.
- Resources filters: subscription tier and format are shown as text for now; only topic is an interactive filter. Confirm the full filter set.
- Should the Middle East and Southeast Asia get their own landing pages, or stay on International schools?
- Testimonials now use quotes from the live site. Check they are still approved for use, and add one for School trusts.

- The symbol count ("15,000+" in the concept) is shown in square brackets until Widgit confirms it.
- The symbol-arc motion needs a design decision: how far it turns, and whether it moves at all on phones.

- The live site disagrees with itself in places. Confirm which is right: free trial length (21 days on UK pages, 30 days on the international page), word count (55,000+ English words vs 60,000+ words and phrases), languages (80 vs 83+), and the support phone number (01926 333680 on most pages, 01926 333686 in the Support menu).
- The concept's product tour mentions Widgit Prompt and an Inspiration Bank. Neither appears on the live site. Are these new features?
- Symwriter is in the sitemap, but the live UK site only sells Widgit Online and InPrint 4. Symwriter appears only in support and through international partners. Does it still need a product page?
- Point is sold by website size, but the live page doesn't show prices.
- BeClear isn't on the live site. Copy needed.
- The live site has About Widgit pages (mission, B Corp, history, jobs, blog) that aren't in the sitemap.
- Resource categories on the Resources page come from the live site, but which category each example belongs to is illustrative.
- Only three success stories have detail pages. The other cards on Symbols in Action reuse them.
- The live site lists 21 countries under International. The region switcher only covers six partner countries plus international schools.

- The sitemap gives News the same filters as Resources (subscription tier, format, topic), which looks copied across. The prototype filters News by topic only: Staff spotlight, B Corp, Community and Widgit Wilding.
- The live About section also has jobs, charities, history and customer stories pages. The prototype folds the key points into About us. Does Widgit want any of them as separate pages, especially jobs?
- The leadership team names on About us come from the live Who we are page. Confirm they are current.
- Only three news articles are built. The other News cards reuse them.

## Kit changes made in this build

- Header: Shop and primary CTA now come from config (they were hardcoded from a previous project). Added a utility bar with region switcher, Contact, My Shop Account and Log in, a search link, and two-column panels for menus with more than five items.
- Footer: legal links now come from config.
- Form: the variant tab list's accessible name is now a prop (was hardcoded as "Donation type").
- Walkthrough: steps can now use deep links with query strings.
- Component List page now uses the minimal header with no footer.
- Vite builds every root HTML file automatically.

## Change log

### 2026-11-12
- Added: New About section in the main navigation, after Resources.
- Added: About landing page, About us page and News listing, with copy from widgit.com.
- Added: Three news articles, taken from the Widgit company blog.
- Fixed: Main navigation labels no longer wrap onto two lines on smaller laptop screens.

### 2026-11-11
- Changed: Filled in copy, prices and figures from the current widgit.com.
- Changed: All six country pages now name the local partner and contact details.
- Changed: Case studies now use real Widgit success stories.
- Changed: Placeholder testimonials replaced with real quotes from widgit.com.
- Added: Homepage hero now shows the symbol arc from the approved concept.
- Added: Mission statement band below the homepage hero.
- Added: Interactive product tour on the homepage, with numbered feature hotspots.
- Added: Single-product tours on the Widgit Online and InPrint 4 pages.
- Added: Closing symbol band near the end of the homepage.
- Added: Reduce motion switch in the footer, which also follows the device setting.
- Removed: Homepage "Our products" cards and Widgit Online text block, replaced by the product tour.
- Fixed: Component List hero no longer covers its own heading.
- Fixed: Footer Subscribe button no longer spills out on narrow screens.
- Fixed: Who we help menu no longer has a gap beside Education.
- Fixed: Widgit Apps features now sit in one row.

### 2026-11-10
- Added: First build from the revised sitemap, personas and audience priorities.
- Added: Region switcher in the header, routing to country landing pages.
- Added: Contact form routes enquiries by topic, with deep links from other pages.
- Added: Free trial hands off to Widgit Online sign-up.
- Added: Six user flows based on the personas.
- Changed: Who we help leads the main navigation.
