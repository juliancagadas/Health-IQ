const fatigueSlider = document.querySelector(".fatigue-slider");
const fatigueValueBox = document.querySelector(".fatigue-value");

// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getFatigueFuzzy(fatigueLevel) {

    let fatigueMild = 0;
    let fatigueModerate = 0;
    let fatigueSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (fatigueLevel <= 0) {
        fatigueMild = 1;
    }

    else if (fatigueLevel >= 4) {
        fatigueMild = 0;
    }

    else {
        fatigueMild = (4 - fatigueLevel) / 4;
    }


    // =================================================
    // MODERATE
    // =================================================

    if (fatigueLevel <= 0) {
        fatigueModerate = 0;
    }

    else if (fatigueLevel <= 4) {
        fatigueModerate = fatigueLevel / 4;
    }

    else if (fatigueLevel <= 8) {
        fatigueModerate = (8 - fatigueLevel) / 4;
    }

    else {
        fatigueModerate = 0;
    }


    // =================================================
    // SEVERE
    // =================================================

    if (fatigueLevel <= 4) {
        fatigueSevere = 0;
    }

    else if (fatigueLevel <= 8) {
        fatigueSevere = (fatigueLevel - 4) / 4;
    }

    else {
        fatigueSevere = 1;
    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    
    return {
        mild: fatigueMild,
        moderate: fatigueModerate,
        severe: fatigueSevere
    };

}


// =====================================================
// SLIDER
// =====================================================

fatigueSlider.addEventListener("input", () => {

    const fatigueLevel = Number(fatigueSlider.value);
    fatigueValueBox.textContent = fatigueLevel.toFixed(1) + " / 10";
    const fuzzy = getFatigueFuzzy(fatigueLevel);

    // =================================================
    // GRAPH VALUES
    // =================================================

    const graphMild = document.querySelector("#graph-fatigue-mild");
    const graphModerate = document.querySelector("#graph-fatigue-moderate");
    const graphSevere = document.querySelector("#graph-fatigue-severe");

    if (graphMild) {
        graphMild.textContent = (fuzzy.mild * 100).toFixed(0) + "%";
    }

    if (graphModerate) {
        graphModerate.textContent = (fuzzy.moderate * 100).toFixed(0) + "%";
    }

    if (graphSevere) {
        graphSevere.textContent = (fuzzy.severe * 100).toFixed(0) + "%";
    }

});


// =====================================================
// MAKE FUNCTION AVAILABLE TO analyze-health.js
// =====================================================

window.getFatigueFuzzy = getFatigueFuzzy;

// =====================================================
// INITIAL CALCULATION
// =====================================================

fatigueSlider.dispatchEvent(new Event("input"));