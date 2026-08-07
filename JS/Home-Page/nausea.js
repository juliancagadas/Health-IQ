const nauseaSlider =
    document.querySelector(".nausea-slider");

const nauseaValueBox =
    document.querySelector(".nausea-value");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getNauseaFuzzy(nauseaLevel) {

    let nauseaMild = 0;
    let nauseaModerrate = 0;
    let nauseaSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (nauseaLevel <= 0) {

        nauseaMild = 1;

    }

    else if (nauseaLevel >= 4) {

        nauseaMild = 0;

    }

    else {

        nauseaMild =
            (4 - nauseaLevel) / 4;

    }


    // =================================================
    // MODERATE
    // =================================================

    if (nauseaLevel <= 0) {

        nauseaModerrate = 0;

    }

    else if (nauseaLevel <= 4) {

        nauseaModerrate =
            nauseaLevel / 4;

    }

    else if (nauseaLevel <= 8) {

        nauseaModerrate =
            (8 - nauseaLevel) / 4;

    }

    else {

        nauseaModerrate = 0;

    }


    // =================================================
    // SEVERE
    // =================================================

    if (nauseaLevel <= 4) {

        nauseaSevere = 0;

    }

    else if (nauseaLevel <= 8) {

        nauseaSevere =
            (nauseaLevel - 4) / 4;

    }

    else {

        nauseaSevere = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        mild: nauseaMild,
        moderate: nauseaModerrate,
        severe: nauseaSevere

    };

}


// =====================================================
// SLIDER
// =====================================================

nauseaSlider.addEventListener("input", () => {

    const nauseaLevel =
        Number(nauseaSlider.value);


    nauseaValueBox.textContent =
        nauseaLevel.toFixed(1) + " / 10";


    const fuzzy =
        getNauseaFuzzy(nauseaLevel);


    // =================================================
    // GRAPH VALUES
    // =================================================

    const graphMild =
        document.querySelector("#graph-nausea-mild");

    const graphModerate =
        document.querySelector("#graph-nausea-moderrate");

    const graphSevere =
        document.querySelector("#graph-nausea-severe");


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

window.getNauseaFuzzy =
    getNauseaFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

nauseaSlider.dispatchEvent(
    new Event("input")
);