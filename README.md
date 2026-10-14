# Asta's Preparation Dashboard

**Name:** Maryam Daher  
**Assignment:** TechTalks – Assessment 2  
**Project:** Asta's Preparation Dashboard

## Project Overview

Asta's Preparation Dashboard is a simple, interactive web application inspired by *Black Clover*. It helps Asta organize and track three essential training tasks while preparing to confront Lucifero.

The dashboard allows users to view training objectives, mark tasks as completed, undo completion, and monitor their preparation progress.

## Main Features

1. **View Training Tasks:** Display three predefined training tasks with descriptions and priority levels.
2. **Complete and Undo Tasks:** Mark individual tasks as completed or incomplete.
3. **Track Progress:** Automatically calculate the completed task count and progress percentage.

Progress is calculated as:

`(Completed Tasks / 3) × 100`

For example:
- 0/3 tasks = 0%
- 1/3 tasks = 33%
- 2/3 tasks = 67%
- 3/3 tasks = 100%

The percentage represents preparation-plan completion, not the probability of winning a battle.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Stitch for interface design
- GitHub Copilot for AI-assisted development
- Model Context Protocol (MCP) for connecting the coding environment with Stitch

## Installation and Running

**Requirements:** Node.js and npm.

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser.

## Testing

The dashboard was manually tested for:

- Task completion and undo functionality
- Progress calculations at 0%, 33%, 67%, and 100%
- Repeated task toggling
- Mobile responsiveness using an iPhone 16 viewport
- Resetting progress after refreshing the page
- Usability feedback from another person

The project was also checked using:

```bash
npm run lint
npm run build
```

## Limitations

- Progress is stored temporarily in React state and resets when the page is refreshed.
- Tasks are predefined and cannot be added or deleted.
- The application does not include authentication or a database.
- Progress measures completed training tasks only, not actual combat readiness.

## Project Documentation

- [Product Requirements Document](docs/PRD.md)
- [Design and Refinement](docs/DESIGN.md)
- [MCP Documentation](docs/MCP.md)
- [Proof of Concept](docs/POC.md)
- [Testing and Review](docs/REVIEW.md)
- [Evidence Screenshots](docs/evidence/)

## Design Reference

[Google Stitch Design](https://stitch.withgoogle.com/projects/12581175717069238936)

## Conclusion

This project demonstrates how a small, clearly defined MVP can be developed using requirements planning, AI-assisted design, a proof of concept, implementation, and manual testing.