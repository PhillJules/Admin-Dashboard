const userName = document.getElementById("username")
const password = document.getElementById("password")

function userNameValidation(entry) {
  if (entry === ""){
    alert("User name cannot be empty!");
    return false;
  }
  return true;
}
