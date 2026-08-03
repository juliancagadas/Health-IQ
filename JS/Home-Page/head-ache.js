const headAcheSlider = document.querySelector(".head-slider");
const headAcheValueBox = document.querySelector(".head-ache-value");
const headAcheValueStatus = document.querySelector(".head-ache-status");


headAcheSlider.addEventListener("input", () => {
    const headAcheLevel = Number(headAcheSlider.value);
    headAcheValueBox.textContent = headAcheSlider.value + " / 10";

    //Mild Side
    if (headAcheLevel <= 0) {
      mild = 1;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else if (headAcheLevel >= 4) {
      mild = 0;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }

    else {
      mild = (4 - headAcheLevel) / 4;
      converted = mild * 100;
      console.log(converted.toFixed(0) + " % Mild");
    }


    //Moderate Side
    if (headAcheLevel <= 0) {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (headAcheLevel <= 4) {
      moderrate = headAcheLevel / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else if (headAcheLevel <= 8) {
      moderrate = (8 - headAcheLevel) / 4;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }

    else {
      moderrate = 0;
      converted = moderrate * 100;
      console.log(converted.toFixed(0) + " % Moderate");
    }


    //Severe Side
    if (headAcheLevel <= 4) {
      severe = 0;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else if (headAcheLevel <= 8) {
      severe = (headAcheLevel - 4) / 4;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }

    else {
      severe = 1;
      converted = severe * 100;
      console.log(converted.toFixed(0) + " % Severe");
    }
})