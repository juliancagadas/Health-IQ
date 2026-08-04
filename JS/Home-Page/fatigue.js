const fatigueSlider = document.querySelector(".fatigue-slider");
const fatigueValueBox = document.querySelector(".fatigue-value");


fatigueSlider.addEventListener("input", () => {
    const fatigueLevel = Number(fatigueSlider.value);
    fatigueValueBox.textContent = fatigueSlider.value + " / 10";

    //Mild Side
    if (fatigueLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (fatigueLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - fatigueLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (fatigueLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (fatigueLevel <= 4) {
      moderrate = fatigueLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (fatigueLevel <= 8) {
      moderrate = (8 - fatigueLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (fatigueLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (fatigueLevel <= 8) {
      severe = (fatigueLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})