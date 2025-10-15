console.log('Memory Air - Key Benefits Variant');

// Create key benefits content using original page structure
const benefitsHTML = `
  <div style="margin-bottom: 15px;">
    <p><strong>🧠 Improve memory by up to 300%</strong></p>
  </div>
  <div style="margin-bottom: 15px;">
    <p><strong>🌙 Works naturally while you sleep</strong></p>
  </div>
  <div style="margin-bottom: 30px;">
    <p><strong>🌿 No drugs or side effects</strong></p>
  </div>
`;

// Handle desktop view
const targetElement = document.querySelector('#lp-pom-text-422');

if (targetElement) {
  console.log('Found desktop target element', targetElement);
  
  // Replace content
  targetElement.innerHTML = benefitsHTML;
  
  // Adjust the button position to prevent overlap
  const button = document.querySelector('#lp-pom-button-423');
  if (button) {
    const currentTop = parseInt(window.getComputedStyle(button).top) || 0;
    button.style.top = (currentTop + 30) + 'px';
    console.log('Adjusted desktop button position');
  }
}

// Handle mobile view
const mobileTargetElement = document.querySelector('#lp-pom-text-118');

if (mobileTargetElement) {
  console.log('Found mobile target element', mobileTargetElement);
  
  // Replace content
  mobileTargetElement.innerHTML = benefitsHTML;
  
  // Mobile button stays in original position - no adjustment needed
}

// Emit success if at least one element was found
if (targetElement || mobileTargetElement) {
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Neither desktop nor mobile target elements found');
}