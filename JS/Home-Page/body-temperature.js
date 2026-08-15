const bodySlider = document.querySelector(".body-slider");
const valueBox = document.querySelector(".body-temperature-value");
const valueStatus = document.querySelector(".body-temperature-status");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getBodyTemperatureFuzzy(temp) {

    let bodyLow = 0;
    let bodyNormal = 0;
    let bodyHigh = 0;


    // =================================================
    // LOW
    // =================================================

    if (temp <= 35) {

        bodyLow = 1;

    } else if (temp >= 37) {

        bodyLow = 0;

    } else {

        bodyLow = (37 - temp) / 2;

    }


    // =================================================
    // NORMAL
    // =================================================

    if (temp <= 35) {

        bodyNormal = 0;
    
    // Normal increasing formula
    } else if (temp <= 37) {

        bodyNormal = (temp - 35) / 2;
    
    // Nomral decreasing or going down formula
    } else if (temp <= 39) {

        bodyNormal = (39 - temp) / 2;

    } else {

        bodyNormal = 0;

    }


    // =================================================
    // HIGH
    // =================================================

    // High is on 0 status
    if (temp <= 37) {

        bodyHigh = 0;

    } else if (temp <= 39) {

        // High Increasing
        bodyHigh = (temp - 37) / 2;

    } else {

        bodyHigh = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        low: bodyLow,
        normal: bodyNormal,
        high: bodyHigh

    };
}


// =====================================================
// SLIDER
// =====================================================

bodySlider.addEventListener("input", () => {

    const temp =
        Number(bodySlider.value);


    valueBox.textContent =
        temp.toFixed(1) + " °C";


    // Get fuzzy values
    const fuzzy = getBodyTemperatureFuzzy(temp);


    // =================================================
    // GRAPH
    // =================================================

    document.querySelector("#graph-low").textContent = (fuzzy.low * 100).toFixed(0) + "%";
    document.querySelector("#graph-normal").textContent = (fuzzy.normal * 100).toFixed(0) + "%";
    document.querySelector("#graph-high").textContent = (fuzzy.high * 100).toFixed(0) + "%";

    // =================================================
    // GRAPH MARKER
    // =================================================

    const marker = document.querySelector("#body-temp-marker");

    const minTemp = 35;
    const maxTemp = 40;

    const graphLeft = 70;
    const graphRight = 750;

    const x =
        graphLeft +
        ((temp - minTemp) /
        (maxTemp - minTemp))
        * (graphRight - graphLeft);


    marker.setAttribute("x1", x);
    marker.setAttribute("x2", x);

});


// =====================================================
// MAKE FUNCTION AVAILABLE TO OTHER JS FILES
// =====================================================

window.getBodyTemperatureFuzzy = getBodyTemperatureFuzzy;


// =====================================================
// INITIAL DISPLAY
// =====================================================

bodySlider.dispatchEvent(new Event("input"));