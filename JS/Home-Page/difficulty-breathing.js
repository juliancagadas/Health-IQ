const difficultySlider = document.querySelector(".difficulty-slider");
const difficultyValueBox = document.querySelector(".difficulty-breathing-value");


difficultySlider.addEventListener("input", () => {
    const difficultyLevel = Number(difficultySlider.value);
    difficultyValueBox.textContent = difficultySlider.value + " / 10";

    //Mild Side
    if (difficultyLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (difficultyLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - difficultyLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (difficultyLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (difficultyLevel <= 4) {
      moderrate = difficultyLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (difficultyLevel <= 8) {
      moderrate = (8 - difficultyLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (difficultyLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (difficultyLevel <= 8) {
      severe = (difficultyLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})