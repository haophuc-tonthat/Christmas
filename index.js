// Variables
const btnSubmit = document.querySelector("#btnSubmit");
const input = document.querySelector("#wish");

btnSubmit.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log(document.getElementById("wish").value);
  var data = document.getElementById("wish").value;
});
