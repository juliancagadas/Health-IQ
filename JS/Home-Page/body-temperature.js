const bodySlider = document.querySelector(".body-slider");
const valueBox = document.querySelector(".body-temperature-value");
const valueStatus = document.querySelector(".body-temperature-status");


bodySlider.addEventListener("input", () => {
    const temp = Number(bodySlider.value);
    valueBox.textContent = bodySlider.value + " °C";

    //low Side
    if (temp <= 35) {
    low = 1;
    converted = low * 100;
    console.log(converted.toFixed(0) + " % Low");
    }

    else if (temp >= 37) {
    low = 0;
    converted = low * 100;
    console.log(converted.toFixed(0) + " % Low");
    }

    else {
    low = (37 - temp) / 2;
    converted = low * 100;
    console.log(converted.toFixed(0) + " % Low");
    }


    //Normal Side
    if (temp <= 35) {
    normal = 0;
    converted = normal * 100;
    console.log(converted.toFixed(0) + " % Normal");
    }

    //Left side
    else if (temp <= 37) {
        normal = (temp - 35) / 2;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }

    //Right side
    else if (temp <= 39) {
        normal = (39 - temp) / 2;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }

    //Above 39
    else {
        normal = 0;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }


    //High Side
    if (temp <= 37) {
        high = 0;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }
    
    else if (temp <= 39) {
        high = (temp - 37) / 2;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }

    else {
        high = 1;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }
});
