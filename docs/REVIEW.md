# PRD Review

## Review 1: Clarifying Progress Calculation

**Requirement reviewed:** The dashboard must display the number of completed tasks and the preparation percentage.

**Issue identified:** The percentage calculation could be unclear, especially when a task is completed, marked incomplete again, or clicked repeatedly.

**Change made:** I clarified that the progress percentage must always be calculated from the current number of completed tasks out of the three predefined tasks. It must not be increased or decreased independently when a task is clicked.

**Expected behavior:**
- 0 completed tasks = 0%
- 1 completed task = 33%
- 2 completed tasks = 67%
- 3 completed tasks = 100%

When a task is marked incomplete again, the completed count and percentage must update accordingly.

**Reason for the change:** This clarification makes the requirement easier to implement and test. It also helps prevent incorrect counts and percentages when users repeatedly complete and undo tasks.

### Friend Review

**Feedback:** The dashboard looks organized and easy to understand. The three tasks are clearly displayed, and the completion buttons are easy to identify. The progress percentage makes it easy to track completed tasks.



**Suggested improvement:** Improve the progress bar's visual appearance to make it easier to read on mobile .

## Answering Questions:

**1. How did your PRD prevent an unnecessary feature?**

The PRD helped me focus on the three main features. I avoided adding unnecessary features such as login, a database, and extra dashboard statistics that were not required.

**2. What did the POC test, and what did it not prove?**

The POC tested whether task completion and progress calculation could work correctly. However, it did not prove that the complete dashboard was responsive, accessible, or easy for users to understand.

**3. Why is this MVP useful even though it is small?**

The MVP allows Asta to view his training tasks, mark them as completed, and track his progress. It solves the main problem without unnecessary complexity.

**4. What did MCP allow your agent to do?**

MCP allowed GitHub Copilot in VS Code to communicate with Google Stitch and access design information. This helped connect the design process with implementation.

**5. Which AI-generated decision did you correct?**

I corrected the design scope by removing unnecessary elements such as gear readiness, magic power, and additional statistics. I kept the dashboard focused on the three required features.

**6. Explain the task state and progress calculation.**

Each task has a completion state: completed or incomplete. When a task is marked complete, its state changes. The progress is calculated from the number of completed tasks divided by three, multiplied by 100. For example, two completed tasks give approximately 67%. Undoing a task updates the percentage automatically.

**7. If agents can generate code, what decisions and checks were still your responsibility?**

I was responsible for defining the requirements, reviewing the AI-generated design, checking the functionality, and making sure the project followed the PRD. I also manually tested task completion, undo functionality, percentages, and the mobile layout. Finally, I ran lint and build checks successfully.

### Mobile Responsiveness and Accessibility Review

**Mobile Testing:**
- Tested the dashboard using Chrome DevTools at a viewport size of 360 × 645 pixels.
- Verified that the progress bar, task cards, and buttons fit within the mobile layout.
- Confirmed that the progress summary displays 33% when one of the three tasks is completed.
- Saved mobile testing evidence in `docs/evidence/mobile-360px.png`.

**Keyboard Accessibility:**
- The task buttons support keyboard interaction using Tab to focus and Enter or Space to activate.
- Buttons include descriptive accessible labels and indicate their pressed state.
- Manually verified keyboard accessibility using Tab to focus on task buttons, Enter to mark a task as completed, and Space to undo completion. All interactions worked correctly, and the progress percentage updated accordingly.
- Verified that the overall progress bar fills from left to right based on the number of completed tasks, regardless of which task is completed first.

**Future Improvement:**
- Improve the mobile progress bar's visual clarity based on feedback from another tester.