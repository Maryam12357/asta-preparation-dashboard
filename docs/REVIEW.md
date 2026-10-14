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