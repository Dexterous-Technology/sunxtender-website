## Fix "Xtender\u00ae" showing instead of "Xtender®"

On the "vs. Flooded" and "vs. Gel" pages, the ® symbol was saved as the code `\u00ae`, so some places (like the page heading) show that code as text.

### Fix
- In both page files, replace every `\u00ae` with the actual ® character: in the heading, the paragraphs, the table headers and rows, and the search/link-preview descriptions.
- Check the rest of the site for any other `\u00ae` and fix those too.
- Open both pages to confirm ® shows correctly everywhere and no `\u00ae` text is left.

### Technical details
- Files: `src/routes/about.sun-xtender-vs-flooded.tsx`, `src/routes/about.sun-xtender-vs-gel.tsx` (the source is JSX attribute string literals, which don't process escapes).
