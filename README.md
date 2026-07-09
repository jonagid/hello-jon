# Study Tracker

[![Playwright Tests](https://github.com/jonagid/hello-jon/actions/workflows/playwright.yml/badge.svg)](https://github.com/jonagid/hello-jon/actions/workflows/playwright.yml)

A browser-based study tracker built with HTML, CSS, and JavaScript. The app lets users add study topics, mark them complete, filter by status, delete topics, and track progress with a summary and visual progress bar.

This project was built as a beginner software engineering and QA portfolio project to demonstrate CRUD workflows, persistent browser storage, UI updates, manual test documentation, and bug report writing.

## Live Demo

[View the live app](https://jonagid.github.io/hello-jon/)

## Features

* Add new study topics
* Prevent blank topics from being added
* Mark topics as completed
* Delete topics
* Filter topics by All, Active, or Completed
* Track completed topics
* Display progress percentage
* Show a visual progress bar
* Save topics using `localStorage`
* Preserve data after page refresh

## Tech Stack

* HTML
* CSS
* JavaScript
* Git
* GitHub
* GitHub Pages
* localStorage

## QA Documentation

This project includes manual QA documentation:

* `TEST_CASES.md` — manual test cases for core app workflows
* `BUG_REPORTS.md` — documented bugs, expected results, actual results, severity, priority, and fixes

Tested workflows include:

* Page loading
* Adding a topic
* Preventing blank input
* Marking a topic complete
* Deleting a topic
* Filtering active topics
* Filtering completed topics
* Confirming data persists after refresh

## Automated Testing

This project includes automated end-to-end tests using Playwright.

The test suite verifies core user workflows, including:

- Page loads successfully
- User can add a topic
- Blank topics are not added
- User can mark a topic completed
- User can delete a topic
- Completed filter shows only completed topics
- Active filter shows only incomplete topics
- Topics persist after page refresh

To run the tests locally:

```bash
npm test

## What I Learned

While building this project, I practiced:

* Connecting JavaScript to HTML elements with `getElementById`
* Handling user input
* Using arrays and objects to store app data
* Rendering dynamic lists to the page
* Updating data through user actions
* Saving data with `localStorage`
* Calculating progress from app data
* Updating the UI based on state
* Using Git and GitHub for version control
* Deploying a live project with GitHub Pages
* Writing QA-style test cases and bug reports

## Future Improvements

Planned improvements include:

* Add automated tests with Playwright
* Improve responsive design for mobile
* Add edit functionality for topics
* Add categories or tags
* Add due dates
* Add better visual styling
* Rebuild the app later with React and TypeScript

## Portfolio Summary

Built and deployed a JavaScript study tracker with CRUD workflows, completion status, persistent browser storage, filtering, progress calculations, manual test cases, and bug report documentation.
