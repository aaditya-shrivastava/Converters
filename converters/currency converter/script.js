const IND = document.getElementById("IND");
const USD = document.getElementById("USD");
const body = document.getElementById("body");
let btn = document.getElementById("swap");

const conversionRate = 83.7;
let swap = true;
btn.addEventListener("click", () => {
  if (swap) {
    body.style.transform = `rotate(${180}deg)`;
    USD.style.transform = `rotate(${180}deg)`;
    IND.style.transform = `rotate(${180}deg)`;
    swap = false;
  } else {
    body.style.transform = `rotate(${360}deg)`;
    USD.style.transform = `rotate(${360}deg)`;
    IND.style.transform = `rotate(${360}deg)`;
    swap = true;
  }
});

function myEvent() {
  if (document.activeElement.value === "") {
    IND.value = "";
    USD.value = "";
  } else if (document.activeElement === IND) {
    const inrValue = parseFloat(IND.value);
    if (!isNaN(inrValue)) {
      const usdValue = inrValue / conversionRate;
      USD.value = usdValue.toFixed(3);
    }
  } else if (document.activeElement === USD) {
    const usdValue = parseFloat(USD.value);
    if (!isNaN(usdValue)) {
      const inrValue = usdValue * conversionRate;
      IND.value = inrValue.toFixed(3);
    }
  }
}
body.addEventListener("keyup", myEvent);
body.addEventListener("click", myEvent);
