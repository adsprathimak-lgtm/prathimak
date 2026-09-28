# Prathima Hospitals V6 — homepage refresh

Temporary Netlify staging build for the new Prathima Hospitals website.

## Current focus
- Premium hospital-level homepage experience.
- Cardiology remains the first fully developed specialty family.
- Cardiology parent is non-clickable; four focused child pages are individually linked.
- Pulmonology, Pediatrics, Gynecology, Neurology and Orthopaedics retain temporary redirects to the current Prathima Hospitals site.
- Home uses the supplied Prathima logo and supplied NABH logo.
- Home uses the supplied Dr. K. Harsha Vardhan Reddy image as a layered visual and references Dr. Harshini Errabelli's official Prathima profile image URL.
- Google review highlights are sourced from the current Kukatpally business listing and kept short.
- Staging remains noindex/nofollow until the final domain move.


Final update: action icons now use the user-provided siren, calendar, and red telephone references; specialty navigation is a responsive 4/3/2/1-card auto-rotating carousel with recognizable SVG medical icons, glowing borders, arrows, dots, and pause-on-hover/focus behavior.


## Latest homepage update
- Removed CARE AT PRATHIMA homepage band.
- Removed the Cardiology-only homepage flagship/pathway section if present.
- Reworked WHY PRATHIMA to match the uploaded six-card reference design in live HTML/CSS.
- Updated Patient Facilities standard-room and suite-room imagery using the latest user uploads.
- Added `assets/why-prathima-reference.png` as the visual design reference.


## Master V6 consolidation
All approved homepage changes are consolidated in this build.


## GitHub Pages deployment
This version is prepared as a static GitHub Pages site. Keep the folder structure intact, including `assets/`, and enable GitHub Pages from the repository root. The HTML/CSS asset references have been made relative so the site can work under a project-page URL as well as a custom domain. Netlify-only `_headers` and `_redirects` files are retained for reference but are not required by GitHub Pages.
