// Variables
const form1 = document.querySelector("#form1");
const selector = document.querySelector("#selector");
const radios = document.querySelectorAll('input[type="radio"]');
var wish = document.querySelector("#wish");
const wanted = document.querySelector("#wanted");
const needed = document.querySelector("#needed");
const willWear = document.querySelector("#willWear");
const willRead = document.querySelector("#willRead");
const form2 = document.querySelector("#form2");

let data = {};
const regExp = /^.+$/i;

// Events
let instr = document.createElement("p");

form1.addEventListener("submit", (ev) => {
  ev.preventDefault();
  showList();
  instr.textContent = "Element added";
  instr.classList.add("instructions");
  form2.append(instr);
  setTimeout(() => {
    instr.textContent =
      "Keep adding items and when you finish, scroll down to see the letter.";
  }, 1800);
});

// Functions
const showList = () => {
  radios.forEach((element) => {
    if (element.checked) {
      data.behav = element.value;
    }
  });

  data.opt = selector.value;
  selector.addEventListener("change", (ev) => {
    if (ev.target.value != "") data.opt = ev.target.value;
    else alert("Choose the type of wish");
  });

  // Validate input
  if (regExp.test(wish.value) == true) data.present = wish.value;
  else alert("Please insert a valid item");

  // Show data
  switch (data.opt) {
    case "want":
      wanted.innerHTML += `<li>${data.present}</li>`;
      break;
    case "need":
      needed.innerHTML += `<li>${data.present}</li>`;
      break;
    case "wear":
      willWear.innerHTML += `<li>${data.present}</li>`;
      break;
    case "read":
      willRead.innerHTML += `<li>${data.present}</li>`;
      break;
  }

  return data;
};
