# Study Tracker Bug Reports

## Bug Report 1: Delete button spacing was too tight

**Status:**
Fixed

**Severity:**
Low

**Priority:**
Low

**Environment:**
Local browser and GitHub Pages deployment

**Description:**
The Delete button appeared too close to the topic text, making the topic row look cramped and less readable.

**Steps to Reproduce:**
1. Open the Study Tracker app.
2. Look at the topic list.
3. Notice the spacing between the topic name and the Delete button.

**Expected Result:**
The Delete button should have clear spacing from the topic text.

**Actual Result:**
The Delete button appeared too close to the topic text.

**Fix:**
Added CSS spacing with margin between the topic text and the Delete button.

**Related Code Area:**
`style.css`

---

## Bug Report 2: Blank topics should not be added

**Status:**
Fixed

**Severity:**
Medium

**Priority:**
Medium

**Environment:**
Local browser and GitHub Pages deployment

**Description:**
Users should not be able to add empty topics to the list.

**Steps to Reproduce:**
1. Open the Study Tracker app.
2. Leave the topic input empty.
3. Click Add Topic.

**Expected Result:**
No topic should be added.

**Actual Result:**
No topic is added because the app checks for empty input.

**Fix:**
Added validation to stop the function if the input is blank.

**Related Code Area:**
`script.js`

---

## Bug Report 3: Progress should update after deleting a topic

**Status:**
Fixed

**Severity:**
Medium

**Priority:**
Medium

**Environment:**
Local browser and GitHub Pages deployment

**Description:**
When a user deletes a topic, the completed count, progress percentage, and progress bar should update immediately.

**Steps to Reproduce:**
1. Open the Study Tracker app.
2. Mark a topic as completed.
3. Delete a topic.
4. Check the progress summary and progress bar.

**Expected Result:**
The progress summary and progress bar should update after the topic is deleted.

**Actual Result:**
The progress summary and progress bar update after deletion.

**Fix:**
Called `renderTopics()` after deleting a topic so the list and progress UI redraw with the latest data.

**Related Code Area:**
`script.js`