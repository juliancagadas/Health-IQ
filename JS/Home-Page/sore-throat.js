const soreThroatSlider = document.querySelector(".sore-throat-slider");
const soreThroatValueBox = document.querySelector(".sore-throat-value");


soreThroatSlider.addEventListener("input", () => {
    const soreThroatLevel = Number(soreThroatSlider.value);
    soreThroatValueBox.textContent = soreThroatSlider.value + " / 10";

    //Mild Side
    if (soreThroatLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (soreThroatLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - soreThroatLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (soreThroatLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (soreThroatLevel <= 4) {
      moderrate = soreThroatLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (soreThroatLevel <= 8) {
      moderrate = (8 - soreThroatLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (soreThroatLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (soreThroatLevel <= 8) {
      severe = (soreThroatLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})