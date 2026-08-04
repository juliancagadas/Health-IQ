const coughSlider = document.querySelector(".cough-slider");
const coughValueBox = document.querySelector(".cough-value");
const coughValueStatus = document.querySelector(".cough-status");


coughSlider.addEventListener("input", () => {
    const coughLevel = Number(coughSlider.value);
    coughValueBox.textContent = coughSlider.value + " / 10";

    //Mild Side
    if (coughLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (coughLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - coughLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (coughLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (coughLevel <= 4) {
      moderrate = coughLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (coughLevel <= 8) {
      moderrate = (8 - coughLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (coughLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (coughLevel <= 8) {
      severe = (coughLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})