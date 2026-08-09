// =====================================================
// FUZZY RULE EVALUATION
// =====================================================

function evaluateHealthRules(data) {

    // ==========================================
    // RULE STRENGTHS
    // ==========================================

    let lowRisk = 0;
    let moderateRisk = 0;
    let highRisk = 0;


    // ==========================================
    // RULE 1
    // Normal temperature + mild symptoms
    // = Low Risk
    // ==========================================

    const rule1 = Math.min(
            data.bodyNormal,
            data.headMild,
            data.coughMild
        );

    lowRisk = Math.max(lowRisk, rule1);


    // ==========================================
    // RULE 2
    // Normal temperature + moderate symptoms
    // = Moderate Risk
    // ==========================================

    const rule2 = Math.min(
            data.bodyNormal,
            data.headModerate,
            data.coughModerate
        );

    moderateRisk = Math.max(moderateRisk, rule2);


    // ==========================================
    // RULE 3
    // High temperature + moderate symptoms
    // = High Risk
    // ==========================================

    const rule3 = Math.min(
            data.bodyHigh,
            data.headModerate
        );

    highRisk = Math.max(highRisk, rule3);


    // ==========================================
    // RULE 4
    // High temperature + severe symptoms
    // = High Risk
    // ==========================================

    const rule4 = Math.min(
            data.bodyHigh,
            data.headSevere
        );

    highRisk = Math.max(highRisk, rule4);


    // ==========================================
    // RULE 5
    // Severe difficulty breathing
    // = High Risk
    // ==========================================

    const rule5 = data.difficultySevere;
    
    highRisk = Math.max(highRisk, rule5);


    // ==========================================
    // RULE 6
    // Low heart rate + severe symptoms
    // = High Risk
    // ==========================================

    const rule6 = Math.min(
            data.heartLow,
            data.headSevere
        );

        highRisk = Math.max(highRisk, rule6);

    // ==========================================
    // RETURN FINAL RULE STRENGTHS
    // ==========================================

    return {
        low: lowRisk,
        moderate: moderateRisk,
        high: highRisk,

        rules: {
            rule1: rule1,
            rule2: rule2,
            rule3: rule3,
            rule4: rule4,
            rule5: rule5,
            rule6: rule6
        }
    };
}


// =====================================================
// MAKE FUNCTION AVAILABLE TO OTHER JS FILES
// =====================================================

window.evaluateHealthRules = evaluateHealthRules;


// =====================================================
// DEBUG
// =====================================================

console.log(
    "FUZZY RULES LOADED:",
    typeof window.evaluateHealthRules
);