console.log('Hello World');

// variables
const trigger = document.querySelector('#trigger');
const target = document.querySelector('section');

// on click
trigger.addEventListener( 'click' , () => {
  
  // do this to target element
  // toggle class name
  target.classList.toggle('accordion');

  
});
