const headAcheSlider =
    document.querySelector(".head-slider");

const headAcheValueBox =
    document.querySelector(".head-ache-value");

const headAcheValueStatus =
    document.querySelector(".head-ache-status");


// =====================================================
// FUZZIFICATION FUNCTION
// =====================================================

function getHeadacheFuzzy(headAcheLevel) {

    let headMild = 0;
    let headModerrate = 0;
    let headSevere = 0;


    // =================================================
    // MILD
    // =================================================

    if (headAcheLevel <= 0) {

        headMild = 1;

    }

    else if (headAcheLevel >= 4) {

        headMild = 0;

    }

    else {

        headMild =
            (4 - headAcheLevel) / 4;

    }


    // =================================================
    // MODERATE
    // =================================================

    if (headAcheLevel <= 0) {

        headModerrate = 0;

    }

    else if (headAcheLevel <= 4) {

        headModerrate =
            headAcheLevel / 4;

    }

    else if (headAcheLevel <= 8) {

        headModerrate =
            (8 - headAcheLevel) / 4;

    }

    else {

        headModerrate = 0;

    }


    // =================================================
    // SEVERE
    // =================================================

    if (headAcheLevel <= 4) {

        headSevere = 0;

    }

    else if (headAcheLevel <= 8) {

        headSevere =
            (headAcheLevel - 4) / 4;

    }

    else {

        headSevere = 1;

    }


    // =================================================
    // RETURN FUZZY VALUES
    // =================================================

    return {

        mild: headMild,
        moderate: headModerrate,
        severe: headSevere

    };

}


// =====================================================
// SLIDER
// =====================================================

headAcheSlider.addEventListener("input", () => {

    const headAcheLevel =
        Number(headAcheSlider.value);


    headAcheValueBox.textContent =
        headAcheLevel.toFixed(1) + " / 10";


    // Get fuzzy values
    const fuzzy =
        getHeadacheFuzzy(headAcheLevel);


    // =================================================
    // GRAPH VALUES
    // =================================================

    document.querySelector(
        "#graph-headache-mild"
    ).textContent =
        (fuzzy.mild * 100).toFixed(0) + "%";


    document.querySelector(
        "#graph-headache-moderrate"
    ).textContent =
        (fuzzy.moderate * 100).toFixed(0) + "%";


    document.querySelector(
        "#graph-headache-severe"
    ).textContent =
        (fuzzy.severe * 100).toFixed(0) + "%";


    // =================================================
    // MOVE HEADACHE MARKER
    // =================================================

    const marker =
        document.querySelector(
            "#headache-marker"
        );


    const minHeadache = 0;
    const maxHeadache = 10;


    const graphLeft = 70;
    const graphRight = 750;


    const x =
        graphLeft +
        ((headAcheLevel - minHeadache) /
        (maxHeadache - minHeadache))
        * (graphRight - graphLeft);


    marker.setAttribute("x1", x);
    marker.setAttribute("x2", x);

});


// =====================================================
// MAKE FUNCTION AVAILABLE
// =====================================================

window.getHeadacheFuzzy =
    getHeadacheFuzzy;


// =====================================================
// INITIAL CALCULATION
// =====================================================

headAcheSlider.dispatchEvent(
    new Event("input")
);