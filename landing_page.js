const userName = document.getElementById("username")
const password = document.getElementById("password")
const badPassword = document.getElementById("bad_password")
const badName = document.getElementById("bad_name")
const subButton = document.getElementById("button")

function userNameValidation(entry) {
  if (entry === "" || entry.length < 4){
    badName.textContent = "Must be longer than 4 characters!"
    return false;
  }
  return true;
}

function passwordValidation(secret){
  if (secret === "" || secret.length < 4){
    badPassword.textContent = "Must be longer than 4 characters!"
    return false;
  }
  return true
}

function handleClick(event) {
  event.preventDefault();

  const isUserNameValid = userNameValidation(userName.value)

  const isPasswordValid = passwordValidation(password.value)

  if (isUserNameValid && isPasswordValid) {
    window.open("admin_page/admin_dashboard.html"); // Open the admin dashboard if both validations pass
  } else {
    // Handle the case where either the username or password is invalid
    console.log("Invalid input");
  }}

subButton.addEventListener("click", handleClick)
