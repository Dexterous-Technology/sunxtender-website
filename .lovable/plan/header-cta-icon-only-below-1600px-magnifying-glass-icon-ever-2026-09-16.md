# Header CTA: icon-only below 1600px, magnifying glass icon everywhere

## What changes

Edit the "Find Your Battery" button in the site header (`src/components/site-chrome.tsx`, the `Link to="/products"` inside `Nav`):

1. **Replace the arrow with a magnifying glass** — swap the `ArrowRight` icon for lucide's `Search` icon at all screen sizes.
2. **Hide the "Find Your Battery" text below 1600px viewport width** — wrap the label in a span using Tailwind's arbitrary breakpoint: `hidden min-[1600px]:inline`. Above 1600px the text shows as today.
3. **Keep the button usable when text is hidden** — add `aria-label="Find your battery"` to the link so the icon-only state is accessible, and keep padding/centering so it renders as a compact square icon button on smaller screens.

Nothing else changes: the link still goes to `/products`, light/dark theming, dropdowns, and mobile layout are untouched.

## Verification

- Playwright at 1280px and 1500px widths: button shows only the magnifying glass icon.
- Playwright at 1700px width: "Find Your Battery" text appears next to the icon.
- Icon renders in both light and dark modes; no console errors.
