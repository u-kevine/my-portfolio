// Initialize EmailJS
emailjs.init('your_user_id'); // Replace with your EmailJS user ID

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if form fields are filled
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    // Send email via EmailJS
    emailjs.send('your_service_id', 'your_template_id', templateParams)
      .then(function(response) {
        alert("Your message has been sent successfully!");
      }, function(error) {
        alert("There was an error sending your message. Please try again later.");
      });
  }
});