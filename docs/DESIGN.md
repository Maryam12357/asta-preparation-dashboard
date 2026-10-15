# Design Decisions — Asta’s Preparation Dashboard

## Design Choices
- **Colors:** Dark charcoal and black backgrounds with light text and orange-red accents.
- **Typography:** Clear, readable text with distinct headings.
- **Layout:** Responsive dashboard with task cards and a visible progress summary.
- **Sections:** Product introduction, Lucifero threat brief, three training tasks, progress indicator, and a progress disclaimer.
- **Spacing:** Consistent spacing between sections and task cards to keep the dashboard organized and easy to read.

## Design Refinement
The initial design included unnecessary sections such as Gear Readiness, Magic Power, Squad Synergy Metric, and extra navigation items. I removed them to keep the interface focused on the three required features: viewing tasks, toggling completion, and tracking preparation progress.

## Evidence
- `docs/evidence/design-before.png` — Initial design.
- `docs/evidence/design-after.png` — Refined design.

**Note:** The Stitch design was used as a visual reference. The working dashboard was implemented using Next.js.

## Final UI Design Specifications

### Color Palette

The dashboard uses a dark theme with red accents to create a combat-inspired interface.

- Main background: `#101116`
- Card and panel background: `#1B1C23`
- Raised surface: `#22232B`
- Primary text: `#E8E7ED`
- Muted text: `#B7A5A4`
- Primary accent (red): `#D9252F`
- Dark red accent: `#A81720`
- Light red accent: `#FFAAA3`
- Gold accent: `#B89B64`
- Border color: `#302C32`

### Typography

- Headings: Geist Sans, with Arial and sans-serif fallbacks.
- Interface labels and buttons: Geist Mono, with Courier New and monospace fallbacks.
- Main page heading: Responsive font size from 2rem to 3.4rem.
- Task headings: Responsive font size from 1.25rem to 1.65rem.
- Labels: Uppercase text with letter spacing for a technical dashboard appearance.

### Spacing and Layout

- Maximum main content width: 1140px.
- Main content horizontal spacing: 24px on each side for standard screens.
- Mobile content horizontal spacing: 16px on each side.
- Panel and task card padding: Responsive, between 17px and 24px.
- Task card spacing: 14px.
- Progress bar: Three equal-width segments with 4px gaps.
- Task buttons: Minimum height of 48px for easier interaction.

### Responsive Design

The interface uses responsive CSS breakpoints at 600px and 360px.

At smaller screen sizes, spacing and typography adjust, task buttons expand to the available width, and panel content adapts to the narrower layout.

The dashboard was manually tested at a viewport width of 360px. Evidence is available in `docs/evidence/mobile-360px.png`.

### Progress Bar Refinement

Following reviewer feedback, the progress bar was updated to fill from left to right based on the number of completed tasks, regardless of which specific task is completed.

This ensures that 33%, 67%, and 100% are represented consistently.

### User Feedback and Future Improvements

A tester suggested improving the progress bar's readability on mobile devices. The left-to-right progress behavior was implemented following reviewer feedback, but further mobile visual refinements remain a possible future improvement.