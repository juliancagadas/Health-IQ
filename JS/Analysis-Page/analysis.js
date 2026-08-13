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
        Number(data.bodyTemperature).toFixed(1) + " °C";


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
        Number(data.headache).toFixed(1) + " /10";

    document.querySelector("#analysis-cough").textContent =
        Number(data.cough).toFixed(1) + " /10";

    document.querySelector("#analysis-fatigue").textContent =
        Number(data.fatigue).toFixed(1) + " /10";

    document.querySelector("#analysis-nausea").textContent =
        Number(data.nausea).toFixed(1) + " /10";

    document.querySelector("#analysis-sore-throat").textContent =
        Number(data.soreThroat).toFixed(1) + " /10";

    document.querySelector("#analysis-breathing").textContent =
        Number(data.difficultyBreathing).toFixed(1) + " /10";


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

        const finalRiskElement = document.querySelector("#final-risk");

        const finalRiskStrengthElement = document.querySelector("#final-risk-strength");

        const imageContainerElement = document.querySelector("#image-container-id");

        const detailedAnalysisElement = document.querySelector("#detailed-analysis-id");

        const sectionTwoElement = document.querySelector("#section-two-id");

        // Display text
        finalRiskElement.textContent = finalRisk;

        finalRiskStrengthElement.textContent = (finalRiskValue * 100).toFixed(0) + "%";

        imageContainerElement.style.backgroundColor = "#16A34A";

        detailedAnalysisElement.style.backgroundColor = "#16A34A";
        // ==========================================
        // CHANGE RISK COLOR
        // ==========================================

        if (finalRisk === "Low Risk") {

            finalRiskElement.style.color = "#16A34A";

            finalRiskStrengthElement.style.color = "#16A34A";

            imageContainerElement.style.backgroundColor = "#16A34A";

            detailedAnalysisElement.style.backgroundColor = "#16A34A";

            sectionTwoElement.style.backgroundColor = "#E8F5E9";


        }

        else if (finalRisk === "Moderate Risk") {

            finalRiskElement.style.color = "#F59E0B";

            finalRiskStrengthElement.style.color = "#F59E0B";

            imageContainerElement.style.backgroundColor = "#F59E0B";

            detailedAnalysisElement.style.backgroundColor = "#F59E0B";

            sectionTwoElement.style.backgroundColor =  "#FFF4E5";


        }

        else if (finalRisk === "High Risk") {

            finalRiskElement.style.color = "#ff0000";

            finalRiskStrengthElement.style.color = "#fc0000";

            imageContainerElement.style.backgroundColor = "#fc0000";

            detailedAnalysisElement.style.backgroundColor = "#fc0000";

            sectionTwoElement.style.backgroundColor =  "#FDECEC";

        }


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

        const rule5 =
            Number(rules.rules5) || 0;
        
        const rule6 =
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
            "Active Rules:",
            activeRuleCount
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

        recommendations.push(
            "Stay hydrated and monitor your symptoms closely."
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

    if (rule6 > 0) {
        recommendations.push(
            "Monitor your heart rate and severe headache symptoms closely."
        );
    }


    // ==========================================
    // DISPLAY RECOMMENDATIONS
    // ==========================================
    const recommendationContainers = [
        document.querySelector(".recommendation-one-container"),
        document.querySelector(".recommendation-two-container"),
        document.querySelector(".recommendation-three-container"),
        document.querySelector(".recommendation-four-container"),
    ]

    const recommendationElements = [
        
        document.querySelector(".recommendation-one-text"),
        document.querySelector(".recommendation-two-text"),
        document.querySelector(".recommendation-three-text"),
        document.querySelector(".recommendation-four-text")
    ];

        // ==========================================
        // RECOMMENDATION BACKGROUND COLOR
        // ==========================================

        let recommendationBackground = "";
        
        if (finalRisk === "Low Risk") {
            recommendationBackground = "#E8F5E9";
        }

        else if (finalRisk === "Moderate Risk") {
            recommendationBackground = "#FFF4E5";
        }

        else if (finalRisk === "High Risk") {
            recommendationBackground = "#FDECEC";
        }

        // Apply background to all recommendation containers

        recommendationContainers.forEach(container => {
            if (container) {
                container.style.backgroundColor = recommendationBackground;
            }
        });



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