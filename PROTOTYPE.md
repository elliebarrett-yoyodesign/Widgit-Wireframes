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

- All statistics and prices are placeholders in square brackets. Real figures needed.
- Partner names for Sweden, Norway, Finland and Italy, and whether country pages link to partner sites or stay on widgit.com.
- Widgit Online sign-up URL, and whether plan or region is passed through.
- Whether Shop and Widgit Online will share one login.
- Resources filters: subscription tier and format are shown as text for now; only topic is an interactive filter. Confirm the full filter set.
- Should the Middle East and Southeast Asia get their own landing pages, or stay on International schools?
- Testimonials are placeholders and need real, approved quotes.

## Kit changes made in this build

- Header: Shop and primary CTA now come from config (they were hardcoded from a previous project). Added a utility bar with region switcher, Contact, My Shop Account and Log in, a search link, and two-column panels for menus with more than five items.
- Footer: legal links now come from config.
- Form: the variant tab list's accessible name is now a prop (was hardcoded as "Donation type").
- Walkthrough: steps can now use deep links with query strings.
- Component List page now uses the minimal header with no footer.
- Vite builds every root HTML file automatically.

## Change log

### 2026-11-10
- Added: First build from the revised sitemap, personas and audience priorities.
- Added: Region switcher in the header, routing to country landing pages.
- Added: Contact form routes enquiries by topic, with deep links from other pages.
- Added: Free trial hands off to Widgit Online sign-up.
- Added: Six user flows based on the personas.
- Changed: Who we help leads the main navigation.
