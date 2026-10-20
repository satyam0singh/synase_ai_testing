# Decision Log — i want to build a local file on my computer with code for a landing page

## ADR-001: No filesystem writes before explicit plan approval

- Status: confirmed
- Rationale: The build engine can write to the user's local folder, so every write is gated behind the human-in-the-loop confirmation step.

