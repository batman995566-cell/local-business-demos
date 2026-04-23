const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value.trim();

  if (!name || !email || !service) {
    formMessage.textContent = "Please fill in the required fields.";
    return;
  }

  formMessage.textContent = `Thanks ${name}, your appointment request has been received.`;

  bookingForm.reset();
});