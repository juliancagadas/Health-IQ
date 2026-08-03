const heartSlider = document.querySelector(".heart-slider");
const heartvalueBox = document.querySelector(".heart-rate-value");
const heartvalueStatus = document.querySelector(".heart-rate-status");


heartSlider.addEventListener("input", () => {
    const heartRate = Number(heartSlider.value);
    heartvalueBox.textContent = heartSlider.value + " BPM";

    //low Side
    if (heartRate <= 30) {
        low = 1;
        converted = low * 100;
        console.log(converted.toFixed(0) + " % Low");
    }

    else if (heartRate >= 70) {
        low = 0;
        converted = low * 100;
        console.log(converted.toFixed(0) + " % Low");
    }

    //Main logic for low side
    else {
        low = (70 - heartRate) / 40;
        converted = low * 100;
        console.log(converted.toFixed(0) + " % Low");
    }


    //Normal Side
    if (heartRate <= 30) {
        normal = 0;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }

    //Left side //Goes Up
    else if (heartRate <= 70) {
        normal = (heartRate - 30) / 40;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }

    //Right side //Goes Down
    else if (heartRate <= 110) {
        normal = (110 - heartRate) / 40;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }

    else {
        normal = 0;
        converted = normal * 100;
        console.log(converted.toFixed(0) + " % Normal");
    }


    //High Side
    if (heartRate <= 70) {
        high = 0;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }
    
    else if (heartRate <= 110) {
        high = (heartRate - 70) / 40;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }

    else {
        high = 1;
        converted = high * 100;
        console.log(converted.toFixed(0) + " % High");
    }

});
