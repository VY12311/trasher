function addUser() {
    var player1_name_input = document.getElementById("player1_name_input").value;
    var player1_name_input_password = document.getElementById("player1_name_input_password").value;
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("Username", player1_name_input);
  } else {
    document.getElementById("player1_name_input").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("Password", player1_name_input_password);
  } else {
    document.getElementById("player1_name_input_password").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}