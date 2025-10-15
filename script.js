'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selections ---
    const counterValueElement = document.getElementById('counter-value');
    const incrementButton = document.getElementById('increment-btn');

    // --- State ---
    let count = 0;

    // --- Functions ---

    /**
     * Updates the counter display with the current count and adds a visual effect.
     */
    function updateCounterDisplay() {
        if (counterValueElement) {
            counterValueElement.textContent = count;
            // Add a class for animation and remove it after it finishes
            counterValueElement.classList.add('updated');
            setTimeout(() => {
                counterValueElement.classList.remove('updated');
            }, 300); // Corresponds to animation duration in CSS
        }
    }

    /**
     * Handles the increment button click event.
     * Increments the count and updates the display.
     */
    function handleIncrement() {
        count++;
        updateCounterDisplay();
    }

    // --- Event Listeners ---
    if (incrementButton) {
        incrementButton.addEventListener('click', handleIncrement);
    } else {
        console.error('Increment button not found.');
    }

    // --- Initial Setup ---
    // The initial value is set in the HTML, so no initial JS update is needed.
    // This ensures the value is present even if JS fails or is slow to load.
});
