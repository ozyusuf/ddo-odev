document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Thanks for reaching out, " + name + "! I'll get back to you soon.");
    document.getElementById("contactForm").reset();
  });
  