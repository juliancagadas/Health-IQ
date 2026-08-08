const coughSlider =
    document.querySelector(".cough-slider");

const coughValueBox =
    document.querySelector(".cough-value");

const coughValueStatus =
    document.querySelector(".cough-status");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getCoughFuzzy(coughLevel) {

    let coughMild = 0;
    let coughModerate = 0;
    let coughSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (coughLevel <= 0) {

        coughMild = 1;

    }

    else if (coughLevel >= 4) {

        coughMild = 0;

    }

    else {

        coughMild =
            (4 - coughLevel) / 4;

    }


    // =================================================
    // MODERATE
    // =================================================

    if (coughLevel <= 0) {

        coughModerate = 0;

    }

    else if (coughLevel <= 4) {

        coughModerate =
            coughLevel / 4;

    }

    else if (coughLevel <= 8) {

        coughModerate =
            (8 - coughLevel) / 4;

    }

    else {

        coughModerate = 0;

    }


    // =================================================
    // SEVERE
    // =================================================

    if (coughLevel <= 4) {

        coughSevere = 0;

    }

    else if (coughLevel <= 8) {

        coughSevere =
            (coughLevel - 4) / 4;

    }

    else {

        coughSevere = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        mild: coughMild,
        moderate: coughModerate,
        severe: coughSevere

    };

}


// =====================================================
// SLIDER
// =====================================================

coughSlider.addEventListener("input", () => {

    const coughLevel =
        Number(coughSlider.value);


    coughValueBox.textContent =
        coughLevel.toFixed(1) + " / 10";


    const fuzzy =
        getCoughFuzzy(coughLevel);


    // =================================================
    // GRAPH VALUES
    // =================================================

    const graphMild =
        document.querySelector("#graph-cough-mild");

    const graphModerate =
        document.querySelector("#graph-cough-moderate");

    const graphSevere =
        document.querySelector("#graph-cough-severe");


    if (graphMild) {

        graphMild.textContent =
            (fuzzy.mild * 100).toFixed(0) + "%";

    }


    if (graphModerate) {

        graphModerate.textContent =
            (fuzzy.moderate * 100).toFixed(0) + "%";

    }


    if (graphSevere) {

        graphSevere.textContent =
            (fuzzy.severe * 100).toFixed(0) + "%";

    }

});


// =====================================================
// MAKE FUNCTION AVAILABLE TO analyze-health.js
// =====================================================

window.getCoughFuzzy =
    getCoughFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

coughSlider.dispatchEvent(
    new Event("input")
);