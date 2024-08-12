let BaseURL = `https://currency-converter18.p.rapidapi.com/api/v1/convert?`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR-API-KEY",
    "x-rapidapi-host": "YOUR-HOST-NAME",
  /* you can generate the api key from 
  
  https://rapidapi.com/solutionsbynotnull/api/currency-converter18/playground/apiendpoint_6660be9f-ceaf-49da-9557-4708c5a2ab62
  
  without any issue*/
  },
};

let fromCurr = document.getElementById("from");
let toCurr = document.getElementById("to");
let dropDown = document.querySelectorAll(".selection select");
let btn = document.getElementById("formBtn");

for (let select of dropDown) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.getElementById("input");
  let amountVal = amount.value;
  if (amountVal <= 1 && amountVal === "") {
    amountVal = 1;
    amountVal.value = "1";
  }

  //! creating a BaseURL
  let URL = `${BaseURL}from=${fromCurr.value}&to=${toCurr.value}&amount=${amountVal}`;
  let response = await fetch(URL, options);
  let data = await response.json();
  let finalAmount = data.result.convertedAmount;
  document.getElementById(
    "message"
  ).innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});