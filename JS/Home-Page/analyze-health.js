const analyzeButton =
    document.querySelector(".analyze-health-button");


analyzeButton.addEventListener("click", () => {


    // =================================================
    // RAW INPUTS
    // =================================================

    const bodyTemperature =
        Number(
            document.querySelector(".body-slider").value
        );

    const heartRate =
        Number(
            document.querySelector(".heart-slider").value
        );

    const headache =
        Number(
            document.querySelector(".head-slider").value
        );

    const cough =
        Number(
            document.querySelector(".cough-slider").value
        );

    const fatigue =
        Number(
            document.querySelector(".fatigue-slider").value
        );

    const nausea =
        Number(
            document.querySelector(".nausea-slider").value
        );

    const soreThroat =
        Number(
            document.querySelector(".sore-throat-slider").value
        );

    const difficultyBreathing =
        Number(
            document.querySelector(".difficulty-slider").value
        );


    // =================================================
    // FUZZIFICATION
    // =================================================

    const bodyFuzzy =
        getBodyTemperatureFuzzy(bodyTemperature);


    const heartFuzzy =
        getHeartRateFuzzy(heartRate);

    
    const headacheFuzzy =
    getHeadacheFuzzy(headache);


    const coughFuzzy =
    getCoughFuzzy(cough);


    const fatigueFuzzy =
    getFatigueFuzzy(fatigue);

    const nauseaFuzzy =
    getNauseaFuzzy(nausea);

    const soreThroatFuzzy =
    getSoreThroatFuzzy(soreThroat);

    const difficultyFuzzy =
    getDifficultyBreathingFuzzy(difficultyBreathing);

    // =================================================
    // DEBUG
    // =================================================

    console.log("========== BODY TEMPERATURE ==========");

    console.log(
        "Low:",
        (bodyFuzzy.low * 100).toFixed(0) + "%"
    );

    console.log(
        "Normal:",
        (bodyFuzzy.normal * 100).toFixed(0) + "%"
    );

    console.log(
        "High:",
        (bodyFuzzy.high * 100).toFixed(0) + "%"
    );


    console.log("========== HEART RATE ==========");

    console.log(
        "Low:",
        (heartFuzzy.low * 100).toFixed(0) + "%"
    );

    console.log(
        "Normal:",
        (heartFuzzy.normal * 100).toFixed(0) + "%"
    );

    console.log(
        "High:",
        (heartFuzzy.high * 100).toFixed(0) + "%"
    );


    console.log("========== HEADACHE ==========");

console.log(
    "Mild:",
    (headacheFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (headacheFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (headacheFuzzy.severe * 100).toFixed(0) + "%"
);


console.log("========== COUGH ==========");

console.log(
    "Mild:",
    (coughFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (coughFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (coughFuzzy.severe * 100).toFixed(0) + "%"
);


console.log("========== FATIGUE ==========");

console.log(
    "Mild:",
    (fatigueFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (fatigueFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (fatigueFuzzy.severe * 100).toFixed(0) + "%"
);


console.log("========== NAUSEA ==========");

console.log(
    "Mild:",
    (nauseaFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (nauseaFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (nauseaFuzzy.severe * 100).toFixed(0) + "%"
);


console.log("========== SORE THROAT ==========");

console.log(
    "Mild:",
    (soreThroatFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (soreThroatFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (soreThroatFuzzy.severe * 100).toFixed(0) + "%"
);

console.log("========== DIFFICULTY BREATHING ==========");

console.log(
    "Mild:",
    (difficultyFuzzy.mild * 100).toFixed(0) + "%"
);

console.log(
    "Moderate:",
    (difficultyFuzzy.moderate * 100).toFixed(0) + "%"
);

console.log(
    "Severe:",
    (difficultyFuzzy.severe * 100).toFixed(0) + "%"
);

    // =================================================
    // HEALTH DATA
    // =================================================

    const healthData = {

        // RAW VALUES

        bodyTemperature:
            bodyTemperature,

        heartRate:
            heartRate,

        headache:
            headache,

        cough:
            cough,

        fatigue:
            fatigue,

        nausea:
            nausea,

        soreThroat:
            soreThroat,

        difficultyBreathing:
            difficultyBreathing,


        // BODY FUZZY

        bodyLow:
            bodyFuzzy.low,

        bodyNormal:
            bodyFuzzy.normal,

        bodyHigh:
            bodyFuzzy.high,


        // HEART FUZZY

        heartLow:
            heartFuzzy.low,

        heartNormal:
            heartFuzzy.normal,

        heartHigh:
            heartFuzzy.high,
        
    
        // HEADACHE FUZZY

        headacheMild:
            headacheFuzzy.mild,

        headacheModerate:
            headacheFuzzy.moderate,

        headacheSevere:
            headacheFuzzy.severe,

        
        // COUGH FUZZY

        coughMild:
            coughFuzzy.mild,

        coughModerate:
            coughFuzzy.moderate,

        coughSevere:
            coughFuzzy.severe,

        
        // FATIGUE FUZZY

        fatigueMild:
            fatigueFuzzy.mild,

        fatigueModerate:
            fatigueFuzzy.moderate,

        fatigueSevere:
            fatigueFuzzy.severe,

        
        // NAUSEA FUZZY

        nauseaMild:
            nauseaFuzzy.mild,

        nauseaModerate:
            nauseaFuzzy.moderate,

        nauseaSevere:
            nauseaFuzzy.severe,

        
        // SORE THROAT FUZZY

        soreMild:
            soreThroatFuzzy.mild,

        soreModerate:
            soreThroatFuzzy.moderate,

        soreSevere:
            soreThroatFuzzy.severe,

        
        // DIFFICULTY BREATHING FUZZY

        difficultyMild:
            difficultyFuzzy.mild,

        difficultyModerate:
            difficultyFuzzy.moderate,

        difficultySevere:
            difficultyFuzzy.severe

    };


    // =================================================
    // SAVE
    // =================================================

    localStorage.setItem(
        "healthAssessment",
        JSON.stringify(healthData)
    );


    console.log(
        "FINAL HEALTH DATA:",
        healthData
    );


    // =================================================
    // GO TO ANALYSIS
    // =================================================

    window.location.href =
        "analysis-page.html";

});