const initApp = () => {
  const inputBillElem = document.querySelector(".bill");
  const inputPersons = document.querySelector(".no_people");
  const inputTipPercentage = document.querySelectorAll(".input");
  const outputTipPerPersonElem = document.querySelector(".tip_person");
  const outputTipTotalElem = document.querySelector(".tip_total");
  const resetButton = document.querySelector(".reset");
  const customElem = document.querySelector(".custom");
  const errorMessage = document.querySelector(".input_error_message");

  let outputTipPerPerson = "";
  let outputTipTotal = "";
  let inputBill = "";
  let inputPerc = "";
  let numberOfPersons = "";

  inputBillElem.addEventListener("input", (event) => {
    if (isNaN(event.target.value)) return;
    if (event.target.value === "0") return;
    inputBill = event.target.value;

    console.log(inputBill);
  });

  inputTipPercentage.forEach((button) => {
    button.addEventListener("click", () => {
      inputPerc = button.dataset.num;
      console.log(inputPerc);
    });
  });

  inputPersons.addEventListener("input", (event) => {
    if (isNaN(event.target.value)) return;
    if (event.target.value === "0" || event.target.value === "00") {
      errorMessage.style.display = "block";
      inputPersons.style.border = "2px solid red";
      return;
    } else {
      errorMessage.style.display = "";
      inputPersons.style.border = "";
    }

    numberOfPersons = event.target.value;

    console.log(numberOfPersons);

    let result;
    const bill = parseFloat(inputBill);
    const percentage = parseFloat(inputPerc);
    const persons = parseFloat(numberOfPersons);
    if (isNaN(persons)) return;
    if (isNaN(bill)) return;
    if (isNaN(percentage)) return;

    const mathOperation = (bill, percentage, persons) => {
      result = ((percentage / 100) * bill * persons).toFixed(2);
    };
    mathOperation(bill, percentage, persons);
    console.log(result);
    outputTipTotal = result;
    outputTipTotalElem.innerText = ` $${outputTipTotal}`;
    outputTipPerPerson = (result / persons).toFixed(2);
    outputTipPerPersonElem.innerText = `$${outputTipPerPerson}`;
  });

  customElem.addEventListener("input", (event) => {
    inputPerc = event.target.textContent;

    console.log(inputPerc);
  });

  resetButton.addEventListener("click", () => {
    customElem.innerText = "";
    inputBill = "";
    inputBillElem.value = inputBill;
    numberOfPersons = "";
    inputPersons.innerText = numberOfPersons;
    inputPersons.value = numberOfPersons;
    outputTipPerPerson = "";
    outputTipPerPersonElem.innerText = "$0.00";
    outputTipTotal = "";
    outputTipTotalElem.innerText = "$0.00";
  });
};

document.addEventListener("DOMContentLoaded", initApp);
