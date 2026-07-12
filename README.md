# Study Tracker

[![Playwright Tests](https://github.com/jonagid/hello-jon/actions/workflows/playwright.yml/badge.svg)](https://github.com/jonagid/hello-jon/actions/workflows/playwright.yml)

A browser-based study tracker built with HTML, CSS, and JavaScript. Users can add study topics, track completion, filter the list, delete topics, and keep their progress after a refresh with `localStorage`.

## Live demo

[Open the deployed app](https://jonagid.github.io/hello-jon/)

## Features

- Add study topics and prevent blank entries
- Mark topics complete and see count, percentage, and progress-bar updates
- Filter all, active, and completed topics
- Delete individual topics
- Persist topics and completion status with browser storage
- Recover gracefully when saved topic data is invalid

## Run the tests locally

```bash
npm install
npm test
```

The Playwright configuration starts a local static server and runs the end-to-end test suite.

## QA evidence

- [Manual test cases](TEST_CASES.md)
- [Bug reports](BUG_REPORTS.md)
- [Automated tests](tests/study-tracker.spec.js)

The test suite covers loading, adding topics, blank-input validation, completion, deletion, filtering, persistence, and the regression where filters previously failed before a checkbox was changed.

## Tech stack

- HTML
- CSS
- JavaScript
- Playwright
- localStorage

## Next improvements

- Add editing, due dates, and categories
- Improve mobile layout
- Add import/export of the topic list
- Rebuild in React and TypeScript after the vanilla JavaScript version is fully understood
