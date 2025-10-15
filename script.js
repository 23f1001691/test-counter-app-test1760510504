'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selections ---
    const counterValueElement = document.getElementById('counter-value');
    const incrementButton = document.getElementById('increment-btn');
    const decrementButton = document.getElementById('decrement-btn');
    const resetButton = document.getElementById('reset-btn');
    const historyListElement = document.getElementById('history-list');

    // --- State ---
    let count = 0;
    const history = [];
    const HISTORY_LIMIT = 5;

    // --- Functions ---

    /**
     * Updates the counter display with the current count and adds a visual effect.
     */
    function updateCounterDisplay() {
        if (!counterValueElement) return;
        
        counterValueElement.textContent = count;
        // Re-trigger animation by removing and adding class, forcing a DOM reflow
        counterValueElement.classList.remove('updated');
        void counterValueElement.offsetWidth; // Force reflow
        counterValueElement.classList.add('updated');
    }

    /**
     * Renders the history list in the DOM.
     */
    function renderHistory() {
        if (!historyListElement) return;

        historyListElement.innerHTML = ''; // Clear previous entries

        if (history.length === 0) {
            const placeholder = document.createElement('li');
            placeholder.textContent = 'No actions recorded yet.';
            placeholder.classList.add('history-placeholder');
            historyListElement.appendChild(placeholder);
        } else {
            history.forEach((value, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Set to: ${value}`;
                // Add animation class to the newest item only
                if (index === 0) {
                    listItem.classList.add('new-item');
                }
                historyListElement.appendChild(listItem);
            });
        }
    }

    /**
     * Adds a value to history, trims the array, and triggers a re-render.
     * @param {number} value The new value to add to the history.
     */
    function addToHistory(value) {
        history.unshift(value);

        if (history.length > HISTORY_LIMIT) {
            history.pop();
        }

        renderHistory();
    }
    
    /**
     * Updates the application state and reflects it in the UI.
     * @param {number} newValue The new value for the counter.
     */
    function updateState(newValue) {
        count = newValue;
        updateCounterDisplay();
        addToHistory(count);
    }

    // --- Event Handlers ---
    function handleIncrement() {
        updateState(count + 1);
    }

    function handleDecrement() {
        updateState(count - 1);
    }

    function handleReset() {
        if (count !== 0) { // Only update if there's a change
            updateState(0);
        }
    }

    // --- Event Listeners ---
    const elements = {
        'Increment button': [incrementButton, handleIncrement],
        'Decrement button': [decrementButton, handleDecrement],
        'Reset button': [resetButton, handleReset],
    };

    for (const [name, [element, handler]] of Object.entries(elements)) {
        if (element) {
            element.addEventListener('click', handler);
        } else {
            console.error(`${name} not found.`);
        }
    }

    // --- Initial Setup ---
    // The initial counter value is set in the HTML.
    // Render the initial empty state for the history list.
    renderHistory();
});
