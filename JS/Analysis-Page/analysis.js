const savedData =
    localStorage.getItem("healthAssessment");


if (savedData) {

    const data =
        JSON.parse(savedData);


    console.log("FINAL DATA:", data);


    // ==========================================
    // BODY TEMPERATURE
    // ==========================================

    document.querySelector("#analysis-temperature").textContent =
        data.bodyTemperature.toFixed(1) + " °C";


    console.log(
        "Low:",
        (data.bodyLow * 100).toFixed(0) + "%"
    );

    console.log(
        "Normal:",
        (data.bodyNormal * 100).toFixed(0) + "%"
    );

    console.log(
        "High:",
        (data.bodyHigh * 100).toFixed(0) + "%"
    );


    // ==========================================
    // OTHER INPUTS
    // ==========================================

    document.querySelector("#analysis-heart-rate").textContent =
        data.heartRate + " BPM";

    document.querySelector("#analysis-headache").textContent =
        data.headache.toFixed(1) + " /10";

    document.querySelector("#analysis-cough").textContent =
        data.cough.toFixed(1) + " /10";

    document.querySelector("#analysis-fatigue").textContent =
        data.fatigue.toFixed(1) + " /10";

    document.querySelector("#analysis-nausea").textContent =
        data.nausea.toFixed(1) + " /10";

    document.querySelector("#analysis-sore-throat").textContent =
        data.soreThroat.toFixed(1) + " /10";

    document.querySelector("#analysis-breathing").textContent =
        data.difficultyBreathing.toFixed(1) + " /10";


        // ==========================================
        // FINAL HEALTH RISK
        // ==========================================

        document.querySelector("#final-risk").textContent =
            data.finalRisk;

        document.querySelector("#final-risk-strength").textContent =
            (data.finalRiskValue * 100).toFixed(0) + "%";


        console.log(
            "Final Risk:",
            data.finalRisk
        );

        console.log(
            "Risk Strength:",
            (data.finalRiskValue * 100).toFixed(0) + "%"
        );
}