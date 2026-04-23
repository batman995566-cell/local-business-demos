const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

message.textContent = `Thanks ${name}, your tattoo consultation request has been sent.`;

form.reset();

});