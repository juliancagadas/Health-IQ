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

    lowRisk = Math.max(
        lowRisk,
        Math.min(
            data.bodyNormal,
            data.headMild,
            data.coughMild
        )
    );


    // ==========================================
    // RULE 2
    // Normal temperature + moderate symptoms
    // = Moderate Risk
    // ==========================================

    moderateRisk = Math.max(
        moderateRisk,
        Math.min(
            data.bodyNormal,
            data.headModerate,
            data.coughModerate
        )
    );


    // ==========================================
    // RULE 3
    // High temperature + moderate symptoms
    // = High Risk
    // ==========================================

    highRisk = Math.max(
        highRisk,
        Math.min(
            data.bodyHigh,
            data.headModerate
        )
    );


    // ==========================================
    // RULE 4
    // High temperature + severe symptoms
    // = High Risk
    // ==========================================

    highRisk = Math.max(
        highRisk,
        Math.min(
            data.bodyHigh,
            data.headSevere
        )
    );


    // ==========================================
    // RULE 5
    // Severe difficulty breathing
    // = High Risk
    // ==========================================

    highRisk = Math.max(
        highRisk,
        data.difficultySevere
    );


    // ==========================================
    // RULE 6
    // Low heart rate + severe symptoms
    // = High Risk
    // ==========================================

    highRisk = Math.max(
        highRisk,
        Math.min(
            data.heartLow,
            data.headSevere
        )
    );


    // ==========================================
    // RETURN FINAL RULE STRENGTHS
    // ==========================================

    return {
        low: lowRisk,
        moderate: moderateRisk,
        high: highRisk
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