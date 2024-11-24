document.addEventListener("DOMContentLoaded", function () {
    // Select the forgot password form
    const form = document.getElementById("formAuthentication");
  
    // Hardcoded email and password for demo purposes
    const validEmail = "ummelaila090@gmail.com";
    const password = "Glimmer@090";
  
    // Handle form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the entered email
      const emailInput = document.getElementById("email").value.trim();
  
      if (emailInput === validEmail) {
        // Simulate sending a password reset email
        alert(
          `A password reset email has been sent to ${emailInput}.\n\nYour password is: ${password}`
        );
  
        // Redirect to the login page
        window.location.href = "login.html";
      } else {
        // Show error if the email doesn't match the valid email
        alert("This email is not registered. Please try again.");
      }
    });
  });
  