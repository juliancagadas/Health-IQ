const difficultySlider = document.querySelector(".difficulty-slider");
const difficultyValueBox = document.querySelector(".difficulty-breathing-value");

// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getDifficultyBreathingFuzzy(difficultyLevel) {

    let diffMild = 0;
    let diffModerate = 0;
    let diffSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (difficultyLevel <= 0) {
        diffMild = 1;
    }

    else if (difficultyLevel >= 4) {
        diffMild = 0;
    }

    else {
        diffMild =
            (4 - difficultyLevel) / 4;
    }


    // =================================================
    // MODERATE
    // =================================================

    if (difficultyLevel <= 0) {
        diffModerate = 0;
    }

    else if (difficultyLevel <= 4) {
        diffModerate = difficultyLevel / 4;
    }

    else if (difficultyLevel <= 8) {
        diffModerate = (8 - difficultyLevel) / 4;
    }

    else {
        diffModerate = 0;
    }


    // =================================================
    // SEVERE
    // =================================================

    if (difficultyLevel <= 4) {
        diffSevere = 0;
    }

    else if (difficultyLevel <= 8) {
        diffSevere = (difficultyLevel - 4) / 4;
    }

    else {
        diffSevere = 1;
    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {
        mild: diffMild,
        moderate: diffModerate,
        severe: diffSevere
    };

}


// =====================================================
// SLIDER
// =====================================================

difficultySlider.addEventListener("input", () => {

    const difficultyLevel = Number(difficultySlider.value);
    difficultyValueBox.textContent = difficultyLevel.toFixed(1) + " / 10";
    const fuzzy = getDifficultyBreathingFuzzy(difficultyLevel);

    // =================================================
    // GRAPH VALUES
    // =================================================

    const graphMild = document.querySelector("#graph-difficulty-mild");
    const graphModerate = document.querySelector("#graph-difficulty-moderate");
    const graphSevere = document.querySelector("#graph-difficulty-severe");

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

window.getDifficultyBreathingFuzzy = getDifficultyBreathingFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

difficultySlider.dispatchEvent(new Event("input"));