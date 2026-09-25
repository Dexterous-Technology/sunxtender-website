# Remove duplicate clear icon in catalog search box

## Problem
On the Products page search input, two ✕ icons appear when typing: the browser's native WebKit search-cancel button (blue on hover) and the site's custom clear button (gray, turns amber on hover).

## Fix
Hide the native WebKit clear button so only the site's custom ✕ remains.

- In `src/styles.css`, add rules to hide the native search decorations (they must live at the top level of the stylesheet so they apply to all search inputs):

```css
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
```

- No change to `src/routes/products.index.tsx` — the custom button stays as is.

## Verification
- Type in the catalog search box; confirm only one ✕ appears (the gray site button), and it clears the query on click.
- Check light and dark mode; type-check passes.
