function setErrorFor(input, message) {
    const wrapperInput = input.parentElement;
    const p = wrapperInput.querySelector('p');
  
    p.innerText = message;
    wrapperInput.className = 'wrapper-inputError';
}
  
function setSuccessFor(input) {
    const wrapperInput = input.parentElement;
    wrapperInput.className = "wrapper-inputSuccess";
}

function clearFormInputs(inputs) {
    for (const input of inputs) {
        input.value = '';
    }
}

async function isEmailUnique(email) {
  try {
      const userData = JSON.parse(localStorage.getItem('user-data')) || { users: [] };
      return !userData.users.some((user) => user.email === email);
  } catch (error) {
      console.error('Error while checking if email is unique:', error);
      return false;
  }
}
  export { isEmailUnique, setErrorFor, setSuccessFor, clearFormInputs };
