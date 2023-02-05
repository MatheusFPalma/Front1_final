// Check if the user is already logged in
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    window.location.href = "recados.html";
  }
  
  // Get the form and submit button
  const form = document.querySelector("form");
  const submitButton = document.querySelector("input[type='submit']");
  
  // Handle form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Get the username and password
    const username = form.elements[0].value;
    const password = form.elements[1].value;
  
    // Check if the username and password match the ones saved in localStorage
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
      window.location.href = "recados.html";
    } else {
      // Show error message
      alert("Incorrect username or password");
    }
  });
  
  // Handle sign up link click
  const signUpLink = document.querySelector("a");
  signUpLink.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Get the username and password
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");
  
    // Save the username and password in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    // Show success message
    alert("Account created successfully");
  });