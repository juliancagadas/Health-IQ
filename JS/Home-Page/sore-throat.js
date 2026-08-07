const soreThroatSlider =
    document.querySelector(".sore-throat-slider");

const soreThroatValueBox =
    document.querySelector(".sore-throat-value");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getSoreThroatFuzzy(soreThroatLevel) {

    let soreMild = 0;
    let soreModerrate = 0;
    let soreSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (soreThroatLevel <= 0) {

        soreMild = 1;

    }

    else if (soreThroatLevel >= 4) {

        soreMild = 0;

    }

    else {

        soreMild =
            (4 - soreThroatLevel) / 4;

    }


    // =================================================
    // MODERATE
    // =================================================

    if (soreThroatLevel <= 0) {

        soreModerrate = 0;

    }

    else if (soreThroatLevel <= 4) {

        soreModerrate =
            soreThroatLevel / 4;

    }

    else if (soreThroatLevel <= 8) {

        soreModerrate =
            (8 - soreThroatLevel) / 4;

    }

    else {

        soreModerrate = 0;

    }


    // =================================================
    // SEVERE
    // =================================================

    if (soreThroatLevel <= 4) {

        soreSevere = 0;

    }

    else if (soreThroatLevel <= 8) {

        soreSevere =
            (soreThroatLevel - 4) / 4;

    }

    else {

        soreSevere = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        mild: soreMild,
        moderate: soreModerrate,
        severe: soreSevere

    };

}


// =====================================================
// SLIDER
// =====================================================

soreThroatSlider.addEventListener("input", () => {

    const soreThroatLevel =
        Number(soreThroatSlider.value);


    soreThroatValueBox.textContent =
        soreThroatLevel.toFixed(1) + " / 10";


    const fuzzy =
        getSoreThroatFuzzy(soreThroatLevel);


    // =================================================
    // GRAPH VALUES
    // =================================================

    const graphMild =
        document.querySelector("#graph-sore-mild");

    const graphModerate =
        document.querySelector("#graph-sore-moderrate");

    const graphSevere =
        document.querySelector("#graph-sore-severe");


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

window.getSoreThroatFuzzy =
    getSoreThroatFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

soreThroatSlider.dispatchEvent(
    new Event("input")
);