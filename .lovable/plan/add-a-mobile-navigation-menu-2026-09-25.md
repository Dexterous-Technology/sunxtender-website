# Add a mobile navigation menu

## Problem

On screens under 768px, the site header shows only the theme toggle — the entire navigation disappears (`hidden md:flex` in `src/components/site-chrome.tsx`). Mobile visitors cannot reach any page.

## What changes

All edits are in `src/components/site-chrome.tsx` (the `Nav` component):

1. **Hamburger button** — add a `Menu`/`X` icon button in the existing `md:hidden` area, next to the theme toggle. Tapping opens/closes a dropdown panel below the header.
2. **Mobile panel** — a full-width dropdown under the header listing every destination:
   - Products (with submenu: All Products, Why SunXtender Batteries?, Terminal Options, Battery Construction)
   - Applications (Grid Tied, Off Grid System, Energy Storage for Backup Power, Solar Street Lights, Smart Grid Systems)
   - Resources (all 11 technical items)
   - About (About us, the three comparison pages, AGM Media Center, Press Releases, FAQs)
   - Contact and Distributors as direct links
   - "Find Your Battery" link to /products
3. **Submenus** — sections with children expand/collapse inline via a chevron tap (accordion style), so the panel stays compact.
4. **Behavior** — panel closes when any link is tapped, when Escape is pressed, or when the route changes. Body scroll stays usable. Uses existing border/background/text tokens so it matches light and dark themes.
5. **Desktop unchanged** — the existing `md:flex` navigation, dropdowns, and 1600px "Find Your Battery" behavior are untouched.

## Verification

- Playwright at 390px width: hamburger visible, panel opens, all sections/links present, submenu expands, tapping a link navigates and closes the panel.
- Playwright at 1280px: desktop nav unchanged, no hamburger.
- Check light and dark modes; no console errors.
