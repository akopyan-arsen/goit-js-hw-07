const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const nameInputTrim = event.currentTarget.value.trim();
  if (nameInputTrim === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInputTrim;
  }
});
