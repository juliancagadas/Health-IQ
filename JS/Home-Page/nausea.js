const nauseaSlider = document.querySelector(".nausea-slider");
const nauseaValueBox = document.querySelector(".nausea-value");


nauseaSlider.addEventListener("input", () => {
    const nauseaLevel = Number(nauseaSlider.value);
    nauseaValueBox.textContent = nauseaSlider.value + " / 10";

    //Mild Side
    if (nauseaLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (nauseaLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - nauseaLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (nauseaLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (nauseaLevel <= 4) {
      moderrate = nauseaLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (nauseaLevel <= 8) {
      moderrate = (8 - nauseaLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (nauseaLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (nauseaLevel <= 8) {
      severe = (nauseaLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})