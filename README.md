# WebAccessibilityTest

A test made with Playwright that can check if the structure of a page has changed after modifying the resolution.

## This test will:
- look at all the visible elements of a page and store them in an array
- change the resolution as required (currently from 1280x720 to 320x720)
- look again at all the visible elements of a page and store them in another array
- compares the two arrays and returns an error if they are different
- will work on every webpage, currently it tests the playwright.dev page, the url can be modified from the accessibility.spec.ts file.

## To start the test
Run `npm run start`