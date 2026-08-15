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
            Number(rules.rule1) || 0;

        const rule2 =
            Number(rules.rule2) || 0;
        
        const rule3 =
            Number(rules.rule3) || 0;

        const rule4 =
            Number(rules.rule4) || 0;

        const rule5 =
            Number(rules.rule5) || 0;
        
        const rule6 =
            Number(rules.rule6) || 0;
        

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


// ==========================================
// RECOMMENDATIONS
// ==========================================

// ==========================================
// DEFAULT RECOMMENDATIONS
// Based on FINAL RISK
// ==========================================

const defaultRecommendations = [];

// ------------------------------------------
// LOW RISK
// ------------------------------------------

if (finalRisk === "Low Risk") {

    defaultRecommendations.push(
        "Maintain your usual daily routine while getting adequate rest."
    );

    defaultRecommendations.push(
        "Stay hydrated and continue observing your symptoms for any changes."
    );

}


// ------------------------------------------
// MODERATE RISK
// ------------------------------------------

else if (finalRisk === "Moderate Risk") {

    defaultRecommendations.push(
        "Reduce strenuous activities and give your body enough time to recover."
    );

    defaultRecommendations.push(
        "Monitor your symptoms closely and consider professional advice if they worsen."
    );

}


// ------------------------------------------
// HIGH RISK
// ------------------------------------------

else if (finalRisk === "High Risk") {

    defaultRecommendations.push(
        "Avoid strenuous physical activity and remain at rest while symptoms are significant."
    );

    defaultRecommendations.push(
        "Seek prompt medical evaluation, especially if symptoms are severe or worsening."
    );

}


// ==========================================
// RULE-SPECIFIC RECOMMENDATIONS
// Based on STRONGEST ACTIVE RULE
// ==========================================

const ruleRecommendations = [];


// Create rule list
const activeRuleList = [

    {
        number: 1,
        strength: rule1
    },

    {
        number: 2,
        strength: rule2
    },

    {
        number: 3,
        strength: rule3
    },

    {
        number: 4,
        strength: rule4
    },

    {
        number: 5,
        strength: rule5
    },

    {
        number: 6,
        strength: rule6
    }

];


// Sort from strongest to weakest
activeRuleList.sort(
    (a, b) => b.strength - a.strength
);


// Get strongest active rule
const strongestRule =
    activeRuleList.find(
        rule => rule.strength > 0
    );


// ==========================================
// RULE 6
// LOW HEART RATE + SEVERE HEADACHE
// ==========================================

if (
    strongestRule &&
    strongestRule.number === 6
) {

    ruleRecommendations.push(
        "Your low heart rate and severe headache need immediate medical attention."
    );

    ruleRecommendations.push(
        "Pay close attention to these symptoms and consider medical evaluation if they persist or worsen."
    );

}


// ==========================================
// RULE 5
// SEVERE DIFFICULTY BREATHING
// ==========================================

else if (
    strongestRule &&
    strongestRule.number === 5
) {

    ruleRecommendations.push(
        "Significant difficulty breathing is a serious symptom that requires immediate medical attention."
    );

    ruleRecommendations.push(
        "Stop strenuous activity and seek urgent medical attention if the breathing difficulty is severe or worsening."
    );

}


// ==========================================
// RULE 4
// HIGH TEMPERATURE + SEVERE HEADACHE
// ==========================================

else if (
    strongestRule &&
    strongestRule.number === 4
) {

    ruleRecommendations.push(
        "The combination of elevated temperature and severe headache is a concerning sign that requires medical attention."
    );

    ruleRecommendations.push(
        "Rest, monitor both symptoms closely, and consider medical evaluation if they persist or worsen."
    );

}


// ==========================================
// RULE 3
// HIGH TEMPERATURE + MODERATE HEADACHE
// ==========================================

else if (
    strongestRule &&
    strongestRule.number === 3
) {

    ruleRecommendations.push(
        "Your elevated temperature and moderate headache should be monitored closely, especially if your symptoms worsen."
    );

    ruleRecommendations.push(
        "Stay hydrated, rest, and monitor your temperature and headache for signs of worsening."
    );

}


// ==========================================
// RULE 2
// NORMAL TEMPERATURE + MODERATE SYMPTOMS
// ==========================================

else if (
    strongestRule &&
    strongestRule.number === 2
) {

    ruleRecommendations.push(
        "Moderate headache and cough symptoms should be monitored closely, especially if they worsen or persist."
    );

    ruleRecommendations.push(
        "Prioritize rest and monitor these symptoms for any increase in severity."
    );

}


// ==========================================
// RULE 1
// NORMAL TEMPERATURE + MILD SYMPTOMS
// ==========================================

else if (
    strongestRule &&
    strongestRule.number === 1
) {

    ruleRecommendations.push(
        "Your current assessment is mainly influenced by mild symptoms while your temperature remains within the normal range."
    );

    ruleRecommendations.push(
        "Continue your normal activities as tolerated while keeping track of any changes in your symptoms."
    );

}


// ==========================================
// NO ACTIVE RULE
// ==========================================

else {

    ruleRecommendations.push(
        "No specific fuzzy rule was strongly activated by the current combination of inputs."
    );

    ruleRecommendations.push(
        "Continue monitoring your condition and reassess if your symptoms change."
    );

}


// ==========================================
// DISPLAY RECOMMENDATIONS
// ==========================================

const recommendationContainers = [

    document.querySelector(
        ".recommendation-one-container"
    ),

    document.querySelector(
        ".recommendation-two-container"
    ),

    document.querySelector(
        ".recommendation-three-container"
    ),

    document.querySelector(
        ".recommendation-four-container"
    )

];


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
    )

];


// ==========================================
// RECOMMENDATION BACKGROUND COLOR
// ==========================================

let recommendationBackground = "";


if (finalRisk === "Low Risk") {

    recommendationBackground =
        "#E8F5E9";

}

else if (finalRisk === "Moderate Risk") {

    recommendationBackground =
        "#FFF4E5";

}

else if (finalRisk === "High Risk") {

    recommendationBackground =
        "#FDECEC";

}


// Apply background
recommendationContainers.forEach(
    container => {

        if (container) {

            container.style.backgroundColor =
                recommendationBackground;

        }

    }
);


// ==========================================
// CLEAR OLD TEXT
// ==========================================

recommendationElements.forEach(
    element => {

        if (element) {

            element.textContent = "";

        }

    }
);


// ==========================================
// DISPLAY 2 DEFAULT RECOMMENDATIONS
// ==========================================

defaultRecommendations
    .slice(0, 2)
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


// ==========================================
// DISPLAY 2 RULE RECOMMENDATIONS
// ==========================================

ruleRecommendations
    .slice(0, 2)
    .forEach(
        (recommendation, index) => {

            const element =
                recommendationElements[index + 2];

            if (element) {

                element.textContent =
                    recommendation;

            }

        }
    );

}