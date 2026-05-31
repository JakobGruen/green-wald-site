# Editing this site under server memory pressure (swap-thrash gotcha)

When the green-wald server is under memory pressure, editing this site can garble
shell and file-read output via swap-thrashing — costing real time if mistaken for a
real bug. This note records the symptoms and the working pattern that avoids it.

## Symptoms

- Contradictory errors appear at once — e.g. `command not found: grep` together with
  `No such file or directory` for paths that do exist.
- Batched parallel Bash calls cancel each other out, surfacing as a single exit-144.
- A `docker restart` issued mid-crashloop errors with `container is restarting`.

## Working pattern

- Work **sequentially**: one tool call per turn. Do not fire batched parallel Bash
  calls while the server is thrashing — they cancel each other on the single exit-144.
- If a container is mid-crashloop, wait for it to settle before issuing `docker restart`
  (restarting while it is restarting just errors out).

## Why it matters

The garbled output looks like a broken environment or a missing file, but it is the
swap-thrash, not a real defect. Recognizing it avoids chasing phantom bugs.
