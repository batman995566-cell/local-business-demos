const form = document.getElementById("repairForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

message.textContent = `Thanks ${name}, your repair request was submitted.`;

form.reset();

});