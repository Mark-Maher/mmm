var buttons = document.querySelectorAll("button");
var elnatg = document.querySelector(".result");
console.log();

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "del") {
      elnatg.value = ""; // delete All
    } else if (btn.innerHTML == "C") {
      elnatg.value = elnatg.value.slice(0, -1); // delete last element
    } else if (btn.innerHTML == "=") {
      if (elnatg.value.endsWith("+")) {
        elnatg.value = elnatg.value.slice(0, -1);
      }
      elnatg.value = eval(elnatg.value);
    } else {
      elnatg.value += btn.innerHTML; //insert
    }
  });
});
