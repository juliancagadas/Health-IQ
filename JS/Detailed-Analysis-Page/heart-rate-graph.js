// =====================================================
// HEART RATE DETAILED GRAPH
// =====================================================

const heartSavedData = localStorage.getItem("healthAssessment");

if (heartSavedData) {

    const data = JSON.parse(heartSavedData);


    // ==========================================
    // CURRENT HEART RATE
    // ==========================================

    const heartRate = Number(data.heartRate);

    document.querySelector("#graph-heart-rate").textContent = heartRate + " BPM";


    // ==========================================
    // FUZZY MEMBERSHIP VALUES
    // ==========================================

    const low = Number(data.heartLow) || 0;
    const normal = Number(data.heartNormal) || 0;
    const high = Number(data.heartHigh) || 0;


    // ==========================================
    // DISPLAY MEMBERSHIP VALUES
    // ==========================================

    document.querySelector("#graph-heart-low").textContent = (low * 100).toFixed(0) + "%";
    document.querySelector("#graph-heart-normal").textContent = (normal * 100).toFixed(0) + "%";
    document.querySelector("#graph-heart-high").textContent = (high * 100).toFixed(0) + "%";


    // ==========================================
    // MOVE HEART RATE MARKER
    // ==========================================

    const marker = document.querySelector("#heart-rate-marker");
    const point = document.querySelector("#heart-rate-point");


    const minHeartRate = 30;
    const maxHeartRate = 150;

    const graphLeft = 80;
    const graphRight = 750;


    const x =
        graphLeft +
        ((heartRate - minHeartRate) /
        (maxHeartRate - minHeartRate))
        * (graphRight - graphLeft);


    marker.setAttribute("x1", x);
    marker.setAttribute("x2", x);

    point.setAttribute("cx", x);


    // ==========================================
    // MOVE POINT VERTICALLY
    // ==========================================

    let strongestMembership = 0;

    if (low > strongestMembership) {
        strongestMembership = low;
    }

    if (normal > strongestMembership) {
        strongestMembership = normal;
    }

    if (high > strongestMembership) {
        strongestMembership = high;
    }


    const y = 330 - (strongestMembership * 290);

    point.setAttribute("cy", y);

}