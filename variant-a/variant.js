// CHANGEME: Below is the initial example template.
// Must start by replacing all example lines with your own code.
// Example hypothetical demo variant code below.

// Example: Can use console.* for logging/debugging
console.log('Updating hero headline variant');

// Target the main h1 heading in the hero section
const heroHeading = document.querySelector('h1.headline-xl');

if (heroHeading) {
  console.log('Found hero heading', heroHeading);
  // Replace the text with the new headline
  heroHeading.innerHTML = 'Cut the wait.<br>Cut the cost.';

  // Must emit variantRendered event only after successfully applying all changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  // Important to either use MutationObserver or strongly assert the element exists
  console.error('Hero heading not found');
}