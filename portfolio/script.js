document.getElementById("contactForm").addEventListener("submit", function(event) {
  
  // Retrieve form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("comment").value;
  
  // Validaate form
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }
});
