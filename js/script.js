const calculate = document.getElementById("form");
const inch_input = document.getElementById("inch-input");
const feet_input = document.getElementById("feet-input");
const display = document.getElementById("display");

//1feet = 30.48cm
//1inch = 2.54cm

calculate.addEventListener("submit", (event) => {
  event.preventDefault();

  let inch_value = parseInt(inch_input.value) * 2.54;
  let feet_value = parseInt(feet_input.value) * 30.48;

  if (isNaN(feet_value) || isNaN(inch_value)) {
    display.innerHTML = "Please enter a valid number";
  } else if (feet_input.value <= "0") {
    display.innerHTML = "Please enter a feet value bigger than 0";
  } else if (feet_input.value > "12") {
    display.innerHTML = "Please enter a feet value between 0 and 12";
  } else {
    let sum = Math.floor(inch_value + feet_value);

    display.innerHTML = `${sum}cm`;
  }
   console.log(feet_input.value, inch_input.value);
  inch_input.value = "";
  feet_input.value = "";
});
