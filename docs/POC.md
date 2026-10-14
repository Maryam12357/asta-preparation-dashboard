# Proof of Concept (POC)

## Objective
Test whether Asta's dashboard can track training tasks and calculate progress correctly.

## Implementation
I created a simple dashboard using Next.js, TypeScript, Tailwind CSS, and React useState. It contains three training tasks with buttons to complete or undo each task.

## Testing and Results
The dashboard initially showed 0/3 tasks completed (0%). Completing one task changed the progress to 33%, and undoing it returned the progress to 0%. Completing all three tasks showed 100%.

All tested interactions worked as expected.

I tested the following scenarios:

- **0 tasks completed:** 0/3 and 0%.
- **1 task completed:** 1/3 and 33%.
- **2 tasks completed:** 2/3 and 67%.
- **3 tasks completed:** 3/3 and 100%.
- **Undo completion:** The completed count and percentage decreased correctly.
- **Repeated toggling:** The count remained between 0 and 3 and reflected the current completion states.


**Observation:** The progress is calculated from the current task states, keeping the displayed values consistent.

**Decision:** Continue to the MVP because the main interaction works as expected.

## Evidence
`docs/evidence/poc-success.png` shows the dashboard with all three tasks completed.

## Limitations
Progress resets after refreshing the page. The final design, mobile layout, and accessibility still need to be checked.

## Conclusion
The POC confirmed that task completion and progress calculation work correctly. The next step is to build the final MVP using the Stitch design.
 
