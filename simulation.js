// simulation.js
// Template: Add your simulation logic here.
// Assumes simulation.html has already been injected into the DOM.

(function () {
  const root = document.querySelector('[data-sim-root]');
  if (!root) {
    console.error('❌ [simulation.js] data-sim-root not found. Simulation cannot start.');
    return;
  }

  const controls = root.querySelector('#sim-dynamic-controls');
  const tabContent = root.querySelector('#sim-tab-content');
  const notes = root.querySelector('#sim-notes-content');

  if (!controls) {
    console.warn('⚠️ sim-dynamic-controls element not found. Controls will not render.');
  }
  if (!tabContent) {
    console.warn('⚠️ sim-tab-content element not found. Main content will not render.');
  }
  if (!notes) {
    console.warn('⚠️ sim-notes-content element not found. Notes will not render.');
  }

  // --------------------------------
  // Simple demo: a click counter
  // --------------------------------
  let count = 0;

  function renderControls() {
    if (!controls) return;

    controls.innerHTML = '';

    const label = document.createElement('p');
    label.className = 'sim-label';
    label.textContent = 'Click the button to increase the count:';

    const button = document.createElement('button');
    button.className = 'sim-button';
    button.type = 'button';
    button.textContent = 'Increase Count';

    button.addEventListener('click', () => {
      count += 1;
      renderContent();
      renderNotes();
    });

    controls.appendChild(label);
    controls.appendChild(button);
  }

  function renderContent() {
    if (!tabContent) return;

    tabContent.innerHTML = '';

    const value = document.createElement('p');
    value.innerHTML =
      'Current count: <span class="sim-value">' + count + '</span>';

    tabContent.appendChild(value);
  }

  function renderNotes() {
    if (!notes) return;

    notes.innerHTML = '';

    const text = document.createElement('p');
    text.innerHTML =
      'As the count increases, you can relate it to any quantity in your actual simulation ' +
      '(for example: number of particles, trials, steps, etc.).';

    notes.appendChild(text);
  }

  // Initialize the demo simulation
  function init() {
    renderControls();
    renderContent();
    renderNotes();
    console.log('✅ [simulation.js] Simulation initialized.');
  }

  init();
})();
