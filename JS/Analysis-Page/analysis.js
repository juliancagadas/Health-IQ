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

        const riskLow = Number(data.riskLow) || 0;

        const riskModerate = Number(data.riskModerate) || 0;

        const riskHigh = Number(data.riskHigh) || 0;

        
        let finalRisk = "Low Risk";
        let finalRiskValue = riskLow;

        if (riskModerate > finalRiskValue) {

            finalRisk = "Moderate Risk";

            finalRiskValue = riskModerate;
        }


        if (riskHigh > finalRiskValue) {

            finalRisk = "High Risk";

            finalRiskValue = riskHigh;
        }

        document.querySelector
        ("#final-risk").textContent = finalRisk;

        document.querySelector
        ("final-risk-strength").textContent = (finalRiskValue * 100).toFixed(0) + "%";

        // ==========================================
        // RULE STRENGTHS
        // ==========================================

        const rules =
            data.rules || {};

        const rule1 =
            Number(rules.rules1) || 0;

        const rule2 =
            Number(rules.rules2) || 0;
        
        const rule3 =
            Number(rules.rules3) || 0;

        const rule4 =
            Number(rules.rules4) || 0;

        const rules5 =
            Number(rules.rules5) || 0;
        
        const rules6 =
            Number(rules.rules6) || 0;
        

        // ==========================================
        // COUNT ACTIVE RULES
        // ==========================================

        const ruleThreshold = 0;

        const activeRules = [
            
            rule1,
            rule2,
            rule3,
            rule4,
            rule5,
            rule6
        
        ].filter(
            rule => rule > ruleThreshold
        );
        
        const activeRuleCount =
            activeRules.length;


        // For Debug
        console.log(
            "==========ACTIVE RULES==========="
        );

        console.log(
        "Rule 1:",
        (rule1 * 100).toFixed(0) + "%"
        );

        console.log(
        "Rule 2:",
        (rule2 * 100).toFixed(0) + "%"
        );

        console.log(
        "Rule 3:",
        (rule3 * 100).toFixed(0) + "%"
        );

        console.log(
        "Rule 4:",
        (rule4 * 100).toFixed(0) + "%"
        );

        console.log(
        "Rule 5:",
        (rule5 * 100).toFixed(0) + "%"
        );

        console.log(
        "Rule 6:",
        (rule6 * 100).toFixed(0) + "%"
        );


    // ==========================================
    // RECOMMENDATIONS
    // ==========================================

    const recommendations = [];

    // ------------------------------------------
    // LOW RISK
    // ------------------------------------------

    if (finalRisk === "Low Risk") {

        recommendations.push(
            "Rest at home and allow your body to recover."
        );

        recommendations.push(
            "Stay hydrated throughout the day."
        );

        recommendations.push(
            "Continue monitoring your symptoms."
        );
    }


    // ------------------------------------------
    // MODERATE RISK
    // ------------------------------------------

    if (finalRisk === "Moderate Risk") {

        recommendations.push(
            "Rest and avoid hardcore activities."
        );

        recommendations.push(
            "Stay hydrated and monitor your symptoms closely."
        );

        recommendations.push(
            "Consider consulting a healthcare professional if symptoms persist or worsen."
        );
    }

    // ------------------------------------------
    // HIGH RISK
    // ------------------------------------------

    if (finalRisk === "High Risk") {

        recommendations.push(
            "Seek medical attention, especially if symptoms are worsening."
        );

        recommendations.push(
            "Avoid hardcore activities and rest."
        );

        recommendations.push(
            "Monitor your symptoms closely."
        );
    }

    // ==========================================
    // RULE-SPECIFIC RECOMMENDATIONS
    // ==========================================

    // RULE 3 / 4
    // High temperature + moderate/severe headache

    if (rule3 > 0 || rule4 > 0) {
        recommendations.push(
            "Monitor your body temperature and headache symptoms closely."
        );
    }


    // RULE 5
    // Severe difficulty breathing

    if (rule5 > 0) {
        recommendations.push(
            "Difficulty breathing can require urgent medical attention. Seek appropriate medical care promptly."
        );
    }


    // RULE 6
    // Low heart rate + severe headache

    if (rules6 > 0) {
        recommendations.push(
            "Monitor your heart rate and severe headache symptoms closely."
        );
    }


    // ==========================================
    // DISPLAY RECOMMENDATIONS
    // ==========================================

    const recommendationElements = [
        
        document.querySelector(
            ".recommendation-one-text"
        ),

        document.querySelector(
            ".recommendation-two-text"
        ),

        document.querySelector(
            ".recommendation-three-text"
        ),

        document.querySelector(
        ".recommendation-four-text"
        ),
    ];


    recommendationElements.forEach(
        element => {
            if (element) {

                element.textContent = "";
            }
        }
    );

    recommendations
    .slice(0, 4)
    .forEach(
        (recommendation, index) => {

            const element =
            recommendationElements[index];

            if (element) {

                element.textContent =
                recommendation;
            }
        }
    );


    console.log(
        "======== RECOMMENDATIONS ======="
    );

    console.log(
        recommendations
    );


}