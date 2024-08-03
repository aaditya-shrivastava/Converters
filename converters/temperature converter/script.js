let cSlider = document.getElementById("celsius");
let fSlider = document.getElementById("fahrenheit");
let kSlider = document.getElementById("kelvin");
let cValue = document.getElementById("CValue");
let fValue = document.getElementById("fValue");
let kValue = document.getElementById("kValue");


cSlider.addEventListener('input',()=>{
    cValue.innerHTML = cSlider.value;
    
    fSlider.value = ((9/5) * cSlider.value) + 32;
    fValue.innerHTML = fSlider.value;

    kSlider.value =  (fSlider.value - 32) * 5 / 9 + 274;
    kValue.innerHTML = kSlider.value;
})
fSlider.addEventListener('input',()=>{
    fValue.innerHTML = fSlider.value;

    cSlider.value = (fSlider.value - 32) * 5/9;
    cValue.innerHTML = cSlider.value;

    kSlider.value = (fSlider.value - 32) * 5 / 9 + 274;
    kValue.innerHTML = kSlider.value;
})
kSlider.addEventListener('input',()=>{
    kValue.innerHTML = kSlider.value;

    cSlider.value = kSlider.value - 273.15
    cValue.innerHTML = cSlider.value;
    
    fSlider.value = (kSlider.value - 273.15) * 9/5 + 32;
    fValue.innerHTML = fSlider.value;
})