# PRD — Asta’s Preparation Dashboard

## 1. Product Overview

**Product Name:** Asta’s Preparation Dashboard

**Product Summary:**  
Asta’s Preparation Dashboard is a small web application that helps Asta organize his fictional training plan, track completed tasks, and understand his preparation progress before facing Lucifero.

The first version focuses on a single dashboard with three predefined training tasks and a progress indicator that updates when tasks are completed or marked incomplete.

## 2. Primary User and Problem

### Primary User

Asta, a member of the Black Bulls, is the primary user of this application.

### Problem Statement

Asta's training tasks are scattered across different notes. He has difficulty remembering which tasks he has completed, identifying his remaining tasks, and understanding how much of his preparation plan is finished.

He needs one clear place to view his training tasks and track his progress.

## 3. Goal of the First Version

The goal is to build a simple, usable dashboard that allows Asta to:

- View his three predefined training tasks.
- Mark each task as complete or incomplete.
- See an accurate completed-task count and preparation percentage.

The first version will focus on these essential capabilities without introducing unnecessary functionality.

## 4. Core Features

The product will contain exactly three core features.

### Feature 1: View Training Tasks

The dashboard displays three predefined training tasks. Each task includes a title, description, priority, and completion status.

All tasks start as incomplete.

### Feature 2: Toggle Task Completion

Asta can mark any training task as complete and undo that action when necessary.

The interface must clearly communicate each task's current status. Completing or undoing a task updates the dashboard's count and preparation percentage.

### Feature 3: See Calculated Preparation Progress

The dashboard displays the number of completed tasks out of the total number of tasks and a preparation percentage.

The percentage is calculated from the completion states of the three predefined tasks and rounded to the nearest whole number.

**Formula:**

Preparation percentage = (Completed tasks / Total tasks) × 100

The progress display updates immediately whenever a task's completion status changes.

## 5. User Stories

- As Asta, I want to see all my training tasks in one place so that I know what I need to practise.
- As Asta, I want to mark a task as complete so that I can track the training I have finished.
- As Asta, I want to undo a task's completion so that I can correct my progress when necessary.
- As Asta, I want to see my completed-task count and preparation percentage so that I can understand my overall progress.

## 6. Sample Training Data

The application will use the following fictional sample data.

| Task | Description | Priority | Initial Status |
|---|---|---|---|
| Sword control | Practise precise anti-magic sword movements. | High | Incomplete |
| Physical endurance | Complete a focused strength and stamina session. | Medium | Incomplete |
| Team coordination | Review a preparation plan with the Black Bulls. | High | Incomplete |

These tasks are teaching examples created for this assignment. They are not official character statistics.

## 7. Expected Behaviour

- The dashboard initially displays all three tasks as incomplete.
- The initial completed-task count is 0 / 3.
- The initial preparation percentage is 0%.
- Completing one task updates the count to 1 / 3 and the percentage to 33%.
- Completing two tasks updates the count to 2 / 3 and the percentage to 67%.
- Completing all three tasks updates the count to 3 / 3 and the percentage to 100%.
- Undoing a completion recalculates the count and percentage correctly.
- Repeated interactions must not cause incorrect counts or percentages. Progress is calculated from the current completion states of the three tasks.
- Progress is held in session-only application state and may reset after a page refresh.

## 8. Acceptance Criteria

The following criteria must be testable in the working application.

### AC1 — Display the Training Tasks
Given that the dashboard is opened, when it loads, then all three predefined tasks appear with their titles, descriptions, priorities, and incomplete statuses.

### AC2 — Initial Progress
Given that no tasks are complete, when the dashboard loads, then it displays 0 / 3 completed tasks and 0% preparation progress.

### AC3 — Complete One Task
Given that all tasks are incomplete, when one task is marked complete, then the dashboard displays 1 / 3 and 33%.

### AC4 — Complete Two Tasks
Given that one task is already complete, when a second task is marked complete, then the dashboard displays 2 / 3 and 67%.

### AC5 — Complete All Tasks
Given that two tasks are complete, when the final task is marked complete, then the dashboard displays 3 / 3 and 100%.

### AC6 — Undo Completion
Given that one task is complete, when that task is marked incomplete, then the task returns to its incomplete status and the count and percentage are recalculated correctly.

### AC7 — Repeated Interactions
Given that a task's completion control is used repeatedly, when its status changes, then the task count always matches the actual number of completed tasks and never exceeds three.

### AC8 — Clear Status Communication
Given that the dashboard is displayed, when a task is complete or incomplete, then its current status is communicated through readable text and not color alone.

### AC9 — Keyboard Operation
Given that a user navigates the dashboard using a keyboard, when the user reaches a task's completion control, then the control can be operated using standard keyboard interaction.

### AC10 — Mobile Readability
Given that the dashboard is viewed on a narrow mobile screen, when the content is displayed, then task titles, descriptions, statuses, controls, and progress information remain readable and usable without horizontal page scrolling.

## 9. Design Requirements

- Use a dark, anime-inspired visual style with black and charcoal backgrounds and Orange-red accents.
- Keep the interface focused on one dashboard screen.
- Present the training tasks in clearly distinguishable cards or sections.
- Make task completion controls and progress information easy to locate.
- Use readable typography, sufficient contrast, and clear focus indicators.
- Communicate completion status through text or accessible labels as well as visual styling.
- Ensure all interactive controls are keyboard-operable and have meaningful accessible names.
- Use a responsive layout that works on desktop and mobile screens.
- Avoid excessive animations, decorative elements, or visual effects that distract from the main task.

## 10. Technology Stack

- **Next.js:** Application framework.
- **TypeScript:** Type-safe application development.
- **Tailwind CSS:** Styling and responsive layout.

The application will use a single dashboard screen for the first version.

## 11. Assumptions

- Asta is the only intended user for this fictional scenario.
- The three training tasks are predefined and remain fixed.
- All tasks begin incomplete.
- The completion count and percentage are derived from the current task states.
- Completion state is stored in application memory for the current session.
- User research has not been conducted, and the product's usefulness has not yet been validated with users.

## 12. Limitations

- Task progress may reset after a page refresh.
- The application does not have user accounts or persistent storage.
- The training plan contains only three predefined tasks.
- The application is designed for a fictional assignment scenario rather than real combat preparation.

## 13. Out of Scope

The following features are explicitly excluded from the first version:

- Login, registration, and user accounts.
- Database integration and persistent storage.
- Payments or subscriptions.
- Chatbots or AI-generated training advice.
- Combat simulations.
- Multiplayer or collaboration features.
- Live anime data or external character information.
- Adding, editing, or deleting training tasks.
- Additional application routes or dashboard screens.
- Saving task progress after refresh.

## 14. Definition of Done

The first version is considered complete when:

- The dashboard displays all three predefined training tasks.
- Each task can be completed and returned to incomplete status.
- The completed-task count and preparation percentage update correctly.
- The acceptance criteria have been checked against the running application.
- The dashboard meets the stated design, accessibility, and mobile-readability requirements.
- The PRD and relevant review and testing evidence are documented.
