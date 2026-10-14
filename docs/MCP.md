# MCP Integration — Asta's Preparation Dashboard

## MCP Setup

- **Host:** Visual Studio Code with GitHub Copilot Chat (Agent mode).
- **Client:** VS Code MCP client.
- **Server:** Google Stitch MCP server.
- **Authentication:** Stitch API key.

## Connection and Verification

I connected Google Stitch to GitHub Copilot through MCP and verified the connection using actual tool calls.

The following Stitch MCP tools were used:

- `list_projects`: Retrieved my Stitch project list.
- `Stitch-get_project`: Retrieved the Asta Preparation Training Dashboard project.
- `Stitch-list_screens`: Retrieved two screens: the original design and the refined design.
- `Stitch-get_screen`: Retrieved screen metadata and screenshot/HTML asset references.
- `Stitch-list_design_systems`: Retrieved the available design system information.

**Project ID:** `projects/12581175717069238936`

## Results

The MCP connection successfully retrieved project information, screen metadata, and design-system guidance.

The retrieved design information included layout, spacing, task cards, status indicators, completion controls, and progress-tracking components.

## Limitations

The screen metadata did not directly provide a complete textual description of the rendered interface. Therefore, I also used the exported Stitch design and screenshots as visual references.

## Evidence

- `docs/evidence/mcp-success.png` — Successful Stitch MCP tool calls.
- `docs/evidence/design-before.png` — Initial Stitch design.
- `docs/evidence/design-after.png` — Refined Stitch design.