// Original JavaScript (readable version)
var button = document.getElementById("btn");
var message = document.getElementById("msg");

button.addEventListener("click", function () {
  message.textContent = "Button was clicked!";
});
