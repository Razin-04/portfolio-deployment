// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Handle contact form submission (basic example)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message Sent! (This is just a demo)");
});
