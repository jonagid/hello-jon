# Study Tracker Manual Test Cases

## Test Environment

- Application: Study Tracker
- Platform: macOS
- Browser: Google Chrome
- Test location: Local development server
- URL: http://127.0.0.1:5500
- Tester: Jonathan Agid

---

## TC-001 — Page loads successfully

**Priority:** High  
**Preconditions:** The local server is running.

**Steps:**

1. Open the Study Tracker.
2. Observe the page heading, input, buttons, topic list, and progress section.

**Expected Result:**

- The page loads without an error.
- The Study Tracker heading is visible.
- The topic input and Add Topic button are visible.
- The All, Active, and Completed filter buttons are visible.
- The progress information is visible.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-002 — Add a new topic

**Priority:** High  
**Preconditions:** The Study Tracker is open.

**Steps:**

1. Enter `React` in the New study topic input.
2. Click Add Topic.

**Expected Result:**

- React appears once in the topic list.
- The input becomes empty.
- The total topic count increases.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-003 — Reject blank input

**Priority:** High  
**Preconditions:** The Study Tracker is open.

**Steps:**

1. Leave the topic input empty.
2. Click Add Topic.
3. Enter only spaces.
4. Click Add Topic again.

**Expected Result:**

- No blank topic is added.
- The topic count remains unchanged.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-004 — Mark a topic completed

**Priority:** High  
**Preconditions:** At least one active topic exists.

**Steps:**

1. Select the checkbox beside an active topic.

**Expected Result:**

- The topic displays completed styling.
- The completed count increases.
- The progress percentage and progress bar update.
- The completed state is saved.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-005 — Return a completed topic to active

**Priority:** Medium  
**Preconditions:** At least one completed topic exists.

**Steps:**

1. Clear the checkbox beside a completed topic.

**Expected Result:**

- The completed styling is removed.
- The completed count decreases.
- The progress percentage and progress bar update.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-006 — Delete a topic

**Priority:** High  
**Preconditions:** At least one topic exists.

**Steps:**

1. Identify a topic to remove.
2. Click its Delete button.

**Expected Result:**

- The selected topic disappears.
- Other topics remain.
- The total and progress values update.
- The deletion is saved.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-007 — Active filter works immediately after page load

**Priority:** High  
**Preconditions:**

- At least one active topic exists.
- At least one completed topic exists.

**Steps:**

1. Refresh the page.
2. Do not change any checkbox.
3. Click Active.

**Expected Result:**

- Only active topics are visible.
- Completed topics are hidden.
- The filter works before any checkbox interaction.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-008 — Completed filter works immediately after page load

**Priority:** High  
**Preconditions:**

- At least one active topic exists.
- At least one completed topic exists.

**Steps:**

1. Refresh the page.
2. Do not change any checkbox.
3. Click Completed.

**Expected Result:**

- Only completed topics are visible.
- Active topics are hidden.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-009 — All filter displays every topic

**Priority:** Medium  
**Preconditions:**

- Active and completed topics exist.
- Active or Completed is currently selected.

**Steps:**

1. Click All.

**Expected Result:**

- Active and completed topics are both visible.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-010 — Topics persist after refresh

**Priority:** High  
**Preconditions:** The Study Tracker is open.

**Steps:**

1. Add a topic named `Persistent Topic`.
2. Mark it completed.
3. Refresh the page.

**Expected Result:**

- Persistent Topic remains in the list.
- Its completed state remains selected.
- The progress information remains accurate.

**Actual Result:** Not yet recorded.  
**Status:** Not Run

---

## TC-011 — App recovers from invalid saved data

**Priority:** High  
**Preconditions:** The Study Tracker and browser console are open.

**Steps:**

1. Run:

   ```javascript
   localStorage.setItem("topics", "broken data");
   ```

2. Refresh the page.

**Expected Result:**

- The page still loads.
- Default topics are displayed.
- The application does not crash.
- The invalid value is replaced with valid topic data.

**Actual Result:** The application loaded the default topics and replaced the invalid saved value with valid JSON.  
**Status:** Pass