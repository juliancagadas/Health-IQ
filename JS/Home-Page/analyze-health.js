const analyzeButton =
    document.querySelector(".analyze-health-button");


analyzeButton.addEventListener("click", () => {


    // =================================================
    // RAW INPUTS
    // =================================================

    const bodyTemperature = Number(document.querySelector(".body-slider").value);
    const heartRate = Number(document.querySelector(".heart-slider").value);
    const headache = Number(document.querySelector(".head-slider").value);
    const cough = Number(document.querySelector(".cough-slider").value);
    const fatigue = Number(document.querySelector(".fatigue-slider").value);
    const nausea = Number(document.querySelector(".nausea-slider").value);
    const soreThroat = Number(document.querySelector(".sore-throat-slider").value);
    const difficultyBreathing = Number(document.querySelector(".difficulty-slider").value);

    // =================================================
    // FUZZIFICATION
    // =================================================

    const bodyFuzzy = getBodyTemperatureFuzzy(bodyTemperature);
    const heartFuzzy = getHeartRateFuzzy(heartRate);
    const headacheFuzzy = getHeadacheFuzzy(headache);
    const coughFuzzy = getCoughFuzzy(cough);
    const fatigueFuzzy = getFatigueFuzzy(fatigue);
    const nauseaFuzzy = getNauseaFuzzy(nausea);
    const soreThroatFuzzy = getSoreThroatFuzzy(soreThroat);
    const difficultyBreathingFuzzy = getDifficultyBreathingFuzzy(difficultyBreathing);

    // =================================================
    // HEALTH DATA
    // =================================================

    const healthData = {

        // RAW VALUES
        bodyTemperature: bodyTemperature,
        heartRate: heartRate,
        headache: headache,
        cough: cough,
        fatigue: fatigue,
        nausea: nausea,
        soreThroat: soreThroat,
        difficultyBreathing: difficultyBreathing,

        // BODY FUZZY
        bodyLow: bodyFuzzy.low,
        bodyNormal: bodyFuzzy.normal,
        bodyHigh: bodyFuzzy.high,

        // HEART FUZZY
        heartLow: heartFuzzy.low,
        heartNormal: heartFuzzy.normal,
        heartHigh: heartFuzzy.high,
    
        // HEADACHE FUZZY
        headMild: headacheFuzzy.mild,
        headModerate: headacheFuzzy.moderate,
        headSevere: headacheFuzzy.severe,
        
        // COUGH FUZZY
        coughMild: coughFuzzy.mild,
        coughModerate: coughFuzzy.moderate,
        coughSevere: coughFuzzy.severe,
        
        // FATIGUE FUZZY
        fatigueMild: fatigueFuzzy.mild,
        fatigueModerate: fatigueFuzzy.moderate,
        fatigueSevere: fatigueFuzzy.severe,
        
        // NAUSEA FUZZY
        nauseaMild: nauseaFuzzy.mild,
        nauseaModerate: nauseaFuzzy.moderate,
        nauseaSevere: nauseaFuzzy.severe,
        
        // SORE THROAT FUZZY
        soreMild: soreThroatFuzzy.mild,
        soreModerate: soreThroatFuzzy.moderate,
        soreSevere: soreThroatFuzzy.severe,

        // DIFFICULTY BREATHING FUZZY
        difficultyMild: difficultyBreathingFuzzy.mild,
        difficultyModerate: difficultyBreathingFuzzy.moderate,
        difficultySevere: difficultyBreathingFuzzy.severe

    };

        // =================================================
        // FUZZY RULE EVALUATION
        // =================================================

        const riskResult = window.evaluateHealthRules(healthData);

        // =================================================
        // FINAL HEALTH STATUS
        // =================================================

        let finalRisk = "Low Risk";
        let finalRiskValue = riskResult.low;

        if (riskResult.moderate > finalRiskValue) {
            finalRisk = "Moderate Risk";
            finalRiskValue = riskResult.moderate;
        }

        if (riskResult.high > finalRiskValue) {
            finalRisk = "High Risk";
            finalRiskValue = riskResult.high;
        }

        // =================================================
        // SAVE RISK RESULTS
        // =================================================

        healthData.riskLow = riskResult.low;

        healthData.riskModerate = riskResult.moderate;

        healthData.riskHigh = riskResult.high;

        // =================================================
        // RULE RESULTS
        // =================================================

        healthData.rules = riskResult.rules;

        // =================================================
        // SAVE FINAL HEALTH STATUS
        // =================================================

        healthData.finalRisk = finalRisk;

        healthData.finalRiskValue = finalRiskValue;


    // =================================================
    // SAVE
    // =================================================

    localStorage.setItem("healthAssessment", JSON.stringify(healthData));

// =================================================
// SHOW LOADING SCREEN
// =================================================

const loadingScreen = document.querySelector("#analysis-loading-screen");
const loadingVideo = document.querySelector("#analysis-loading-video");


// Show white loading screen
loadingScreen.classList.add("active");


// Start gift animation
loadingVideo.currentTime = 0;
loadingVideo.play();




// =================================================
// GO TO ANALYSIS PAGE AFTER ANIMATION
// =================================================

// loadingVideo.addEventListener("ended", () => {

//     // Start smooth fade
//     loadingScreen.classList.add("fade-out");

//     // Wait for fade animation
//     setTimeout(() => {

//         window.location.href =
//             "analysis-page.html";

//     }, 700);

// });

});