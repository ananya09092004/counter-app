let counter = 0;
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

counterDisplay.textContent = counter;

incrementButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
});

decrementButton.addEventListener('click', () => {
  counter--;
  counterDisplay.textContent = counter;
});

resetButton.addEventListener('click', () => {
  counter = 0;
  counterDisplay.textContent = counter;
});