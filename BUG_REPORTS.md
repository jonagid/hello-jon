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

## Bug Report 2: Filters did not work until a topic checkbox changed

**Status:**
Fixed

**Severity:**
Medium

**Priority:**
Medium

**Environment:**
Local browser and GitHub Pages deployment

**Description:**
The All, Active, and Completed controls should work immediately after page load.

**Steps to Reproduce:**
1. Open the Study Tracker app.
2. Do not change a topic checkbox.
3. Click Active or Completed.

**Expected Result:**
The selected filter should apply immediately.

**Actual Result:**
Nothing happened because the filter click listeners were registered inside a checkbox change handler. Repeated checkbox changes also registered duplicate listeners.

**Fix:**
Registered each filter listener once during app initialization.

**Related Code Area:**
`script.js`

---

## Bug Report 3: Playwright config did not match the project module type

**Status:**
Fixed

**Severity:**
Medium

**Priority:**
Medium

**Environment:**
Local browser and GitHub Pages deployment

**Description:**
The project declares CommonJS in `package.json`, so the Playwright config must use CommonJS syntax.

**Steps to Reproduce:**
1. Run `npm test`.

**Expected Result:**
Playwright should load its configuration and start the test suite.

**Actual Result:**
The config used `import` and `export default`, which is incompatible with this CommonJS package.

**Fix:**
Replaced the ES module syntax with `require` and `module.exports`.

**Related Code Area:**
`script.js`
