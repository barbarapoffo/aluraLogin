const passwordButton = document.getElementById ("passwordButton");

function passwordHidden () {
  if (passwordButton.classList.contains('fa-eye')) {
    passwordButton.classList.remove('fa-eye');
    passwordButton.classList.add('fa-eye-slash');
  }
}