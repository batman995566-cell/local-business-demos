const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value.trim();

  if (!name || !email || !service) {
    formMessage.textContent = "Please fill in your name, email, and tailoring service needed.";
    return;
  }

  formMessage.textContent = `Thank you ${name}, your fitting request has been received.`;
  bookingForm.reset();
});
