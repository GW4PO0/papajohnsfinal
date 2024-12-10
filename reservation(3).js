// Attach an event listener to the form submission
document.getElementById("reservationForm").addEventListener("submit", function (event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validate form inputs
  if (!name || !contact || !email) {
    alert("Please fill out all the fields.");
    return;
  }

  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all inputs are valid, redirect to the specified URL

  window.location.href = "makeReservation3.html"; // Replace "#" with your desired URL or anchor ID
});
document.getElementById("backModalBtn").addEventListener("click", function () {
  window.location.href = "index.html#targetSection"; 
});
