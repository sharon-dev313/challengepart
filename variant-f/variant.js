console.log('Ramp headline color variant started');

// Target all h2 elements with headline classes and change to neon yellow
const applyHeadlineColorChanges = () => {
  // Find all h2 elements with headline classes (headline-l, headline-m, headline-xs, headline-s)
  const headlineSelectors = [
    'h2.headline-l',
    'h2.headline-m', 
    'h2.headline-xs',
    'h2.headline-s'
  ];
  
  let changedCount = 0;
  
  headlineSelectors.forEach(selector => {
    const headlines = document.querySelectorAll(selector);
    headlines.forEach(headline => {
      // Apply the neon yellow color matching the button solar color
      headline.style.color = '#d8dd82';
      changedCount++;
    });
  });
  
  if (changedCount > 0) {
    console.log(`Changed ${changedCount} headline(s) to neon yellow`);
    
    // Emit variantRendered event after successfully applying changes
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  } else {
    console.error('No headlines found to change');
  }
};

// Apply changes immediately
applyHeadlineColorChanges();