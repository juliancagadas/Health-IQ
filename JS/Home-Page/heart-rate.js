const heartSlider =
    document.querySelector(".heart-slider");

const heartvalueBox =
    document.querySelector(".heart-rate-value");

const heartvalueStatus =
    document.querySelector(".heart-rate-status");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getHeartRateFuzzy(heartRate) {

    let heartLow = 0;
    let heartNormal = 0;
    let heartHigh = 0;


    // =================================================
    // LOW
    // =================================================

    if (heartRate <= 30) {

        heartLow = 1;

    } else if (heartRate >= 70) {

        heartLow = 0;

    } else {

        heartLow =
            (70 - heartRate) / 40;

    }


    // =================================================
    // NORMAL
    // =================================================

    if (heartRate <= 30) {

        heartNormal = 0;

    } else if (heartRate <= 70) {

        heartNormal =
            (heartRate - 30) / 40;

    } else if (heartRate <= 110) {

        heartNormal =
            (110 - heartRate) / 40;

    } else {

        heartNormal = 0;

    }


    // =================================================
    // HIGH
    // =================================================

    if (heartRate <= 70) {

        heartHigh = 0;

    } else if (heartRate <= 110) {

        heartHigh =
            (heartRate - 70) / 40;

    } else {

        heartHigh = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        low: heartLow,
        normal: heartNormal,
        high: heartHigh

    };
}


// =====================================================
// SLIDER
// =====================================================

heartSlider.addEventListener("input", () => {

    const heartRate =
        Number(heartSlider.value);


    heartvalueBox.textContent =
        heartRate + " BPM";


    // Get fuzzy values
    const fuzzy =
        getHeartRateFuzzy(heartRate);


    // =================================================
    // GRAPH VALUES
    // =================================================

    document.querySelector(
        "#graph-heart-low"
    ).textContent =
        (fuzzy.low * 100).toFixed(0) + "%";


    document.querySelector(
        "#graph-heart-normal"
    ).textContent =
        (fuzzy.normal * 100).toFixed(0) + "%";


    document.querySelector(
        "#graph-heart-high"
    ).textContent =
        (fuzzy.high * 100).toFixed(0) + "%";


    // =================================================
    // MOVE HEART RATE MARKER
    // =================================================

    const marker =
        document.querySelector(
            "#heart-rate-marker"
        );


    const minHeartRate = 30;
    const maxHeartRate = 150;

    const graphLeft = 70;
    const graphRight = 750;


    const x =
        graphLeft +
        ((heartRate - minHeartRate) /
        (maxHeartRate - minHeartRate))
        * (graphRight - graphLeft);


    marker.setAttribute("x1", x);
    marker.setAttribute("x2", x);

});


// =====================================================
// MAKE FUNCTION AVAILABLE
// =====================================================

window.getHeartRateFuzzy =
    getHeartRateFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

heartSlider.dispatchEvent(
    new Event("input")
);