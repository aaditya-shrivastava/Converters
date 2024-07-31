const IND = document.getElementById("IND");
const USD = document.getElementById("USD");
const body = document.getElementById("body");
const conversionRate = 83.70;

body.addEventListener('keyup', () => {
    if (document.activeElement === IND) {
        const inrValue = parseFloat(IND.value);
        if (!isNaN(inrValue)) {
            const usdValue = inrValue / conversionRate;
            USD.value = usdValue.toFixed(2);
        }
    } else if (document.activeElement === USD) {
        const usdValue = parseFloat(USD.value);
        if (!isNaN(usdValue)) {
            const inrValue = usdValue * conversionRate;
            IND.value = inrValue.toFixed(2);
        }
    } 
});