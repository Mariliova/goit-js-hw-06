const loginFormEl = document.querySelector('.login-form');
// const { email, password } = loginFormEl.elements;

loginFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('All iputs must be filled out!');
  }

  const emailName = email.name;
  const passwordName = password.name;

  console.log({
    [emailName]: email.value,
    [passwordName]: password.value,
  });

  event.currentTarget.reset();
}
