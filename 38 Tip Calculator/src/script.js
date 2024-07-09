const inputs = document.querySelectorAll(".input");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const people = document.querySelector("#people");
const totalBill = document.querySelector(".totalBill");
const totalTip = document.querySelector(".totalTip");
const amountPerPerson = document.querySelector(".amountPerPerson");

function generateBill() {
  const billValue = parseFloat(bill.value);
  const tipValue = parseInt(tip.value);
  const peopleValue = parseInt(people.value);

  const totalTipValue = (billValue * tipValue) / 100;
  const totalBillValue = billValue + totalTipValue;
  const amountPerPersonValue = totalBillValue / peopleValue;

  totalBill.textContent = totalBillValue.toFixed(2);
  totalTip.textContent = totalTipValue.toFixed(2);
  amountPerPerson.textContent = amountPerPersonValue.toFixed(2);
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (bill.value && tip.value && people.value) {
      generateBill();
    }
  });
});
