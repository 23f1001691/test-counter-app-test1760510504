# Simple Counter App

A clean, responsive, and accessible counter application built with vanilla HTML, CSS, and JavaScript. This project serves as a production-grade example for a simple static web app, ready for deployment on services like GitHub Pages.

![Screenshot of the Counter App](./sample.png)

## Features

- **Zero Dependencies**: Built entirely with vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Responsive Design**: Mobile-first layout that looks great on any device.
- **Light & Dark Mode**: Automatically adapts to your system's preferred color scheme.
- **Accessible**: Implements ARIA attributes and keyboard-friendly focus states.
- **Smooth Animations**: Subtle CSS transitions provide a polished user experience.
- **Professional Codebase**: Semantic HTML, well-organized CSS with custom properties, and clean JavaScript.

## Setup & Deployment on GitHub Pages

This project is designed for easy deployment as a static site. Follow these steps to deploy it using GitHub Pages:

1.  **Fork or Clone**: Create your own copy of this repository on GitHub.
2.  **Navigate to Settings**: In your repository, go to `Settings` > `Pages`.
3.  **Configure Source**: Under the "Build and deployment" section, select "Deploy from a branch".
4.  **Select Branch**: Choose the `main` (or `master`) branch as your source and select `/(root)` as the folder.
5.  **Save**: Click "Save". Your site will be built and deployed to `https://<your-username>.github.io/<your-repo-name>/`.

## Usage Guide

Once deployed, using the app is straightforward:
- The counter starts at `0`.
- Click the **Increment** button to increase the counter's value by one.

## Technical Details

### Technology Stack

-   **HTML5**: Semantic markup for structure and accessibility.
-   **CSS3**: Modern styling using Flexbox, Custom Properties (Variables), and `prefers-color-scheme` for theming.
-   **JavaScript (ES6+)**: Vanilla JS for DOM manipulation and event handling. No frameworks or libraries are used.

### Core Logic (`script.js`)

The application logic is contained within `script.js`. It waits for the `DOMContentLoaded` event to ensure all HTML elements are available. It then attaches a click event listener to the increment button, which updates a state variable and reflects the change in the DOM.

### Accessibility Notes

Accessibility was a key consideration during development:
-   **Semantic HTML**: Elements like `<main>`, `<header>`, and `<footer>` are used to define page structure.
-   **ARIA Attributes**: 
    -   `aria-live="polite"` on the counter value ensures screen readers announce updates without interrupting the user.
    -   `aria-label` provides a descriptive label for the increment button.
-   **Focus Management**: Clear `:focus-visible` styles are provided for keyboard navigators.

## Folder Structure

The repository contains the following files, which are all served statically:

```
.
├── index.html       # The main HTML structure
├── style.css        # All styles for the application
├── script.js        # The application logic
├── README.md        # This documentation file
└── sample.png       # Preview image for social media and README
```
