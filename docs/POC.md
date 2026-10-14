# Proof of Concept (POC)

## Objective
Test whether Asta's dashboard can track training tasks and calculate progress correctly.

## Implementation
I created a simple dashboard using Next.js, TypeScript, Tailwind CSS, and React useState. It contains three training tasks with buttons to complete or undo each task.

## Testing and Results
The dashboard initially showed 0/3 tasks completed (0%). Completing one task changed the progress to 33%, and undoing it returned the progress to 0%. Completing all three tasks showed 100%.

All tested interactions worked as expected.

## Evidence
`docs/evidence/poc-success.png` shows the dashboard with all three tasks completed.

## Limitations
Progress resets after refreshing the page. The final design, mobile layout, and accessibility still need to be checked.

## Conclusion
The POC confirmed that task completion and progress calculation work correctly. The next step is to build the final MVP using the Stitch design.

## Test Results

I tested the three training tasks by marking them complete and undoing completion.

The progress displayed 0%, 33%, 67%, and 100% correctly based on the completed tasks. Undoing a task also updated the count and percentage.

**Observation:** The progress is calculated from the current task states, keeping the displayed values consistent.

**Decision:** Continue to the MVP because the main interaction works as expected.