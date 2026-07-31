const bodyslider = document.querySelector(".body-slider");
const valueBox = document.querySelector(".body-temperature-value");
const valueStatus = document.querySelector(".body-temperature-status");

let low = 0;
let normal = 0;
let high = 0;

bodyslider.addEventListener("input", () => {
    const temp = Number(bodyslider.value);
    valueBox.textContent = bodyslider.value + " °C";

    //low Side
    if (temp <= 35) {
    low = 1;
    converted = low * 100;
    valueStatus.textContent = converted.toFixed(0) + " % Low";
    }

    else if (temp >= 37) {
    low = 0;
    converted = low * 100;
    valueStatus.textContent = converted.toFixed(0) + " % Low";
    }

    else {
    low = (37 - temp) / (37 - 35);
    converted = low * 100;
    valueStatus.textContent = converted.toFixed(0) + " % Low";
    }


    //Normal Side
    if (temp <= 36) {
        normal = 0;
        converted = normal * 100;
        valueStatus.textContent = converted.toFixed(0) + " % Normal";
    }

    else if (temp <= 37) {
        normal = (temp - 36) / (37 - 36);
        converted = normal * 100;
        valueStatus.textContent = converted.toFixed(0) + " % Normal";
    }

    else if (temp <= 38) {
        normal = (38 - temp) / (38 - 37);
        converted = normal * 100;
        valueStatus.textContent = converted.toFixed(0) + " % Normal";
    }

    else {
        normal = 0;
    }

});
