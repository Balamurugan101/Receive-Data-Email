
(function () {
    emailjs.init("bsdoCTU2YLBbkCP3n"); 
  })();
  
  
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  

    emailjs
      .send("service_bhh1ooi", "template_ohmfuj9", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function () {
          alert("Email sent successfully!");
          document.getElementById("contactForm").reset(); 
        },
        function (error) {
          alert("Failed to send email. Please try again.");
          console.error("Error:", error);
        }
      );
  });
