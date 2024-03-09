const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailName = form.elements.email.name;
  const passwordName = form.elements.password.name;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ [emailName]: email, [passwordName]: password });

  form.reset();
}
