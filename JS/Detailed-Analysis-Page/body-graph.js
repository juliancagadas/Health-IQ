// =====================================================
// BODY TEMPERATURE DETAILED GRAPH
// =====================================================

const savedData =
    localStorage.getItem("healthAssessment");

if (savedData) {

    const data =
        JSON.parse(savedData);


    // ==========================================
    // CURRENT TEMPERATURE
    // ==========================================

    const temperature =
        Number(data.bodyTemperature);

    document.querySelector("#graph-temperature").textContent =
        temperature.toFixed(1) + " °C";


    // ==========================================
    // FUZZY MEMBERSHIP VALUES
    // ==========================================

    const low =
        Number(data.bodyLow) || 0;

    const normal =
        Number(data.bodyNormal) || 0;

    const high =
        Number(data.bodyHigh) || 0;


    // ==========================================
    // DISPLAY MEMBERSHIP VALUES
    // ==========================================

    document.querySelector("#graph-low").textContent =
        (low * 100).toFixed(0) + "%";

    document.querySelector("#graph-normal").textContent =
        (normal * 100).toFixed(0) + "%";

    document.querySelector("#graph-high").textContent =
        (high * 100).toFixed(0) + "%";


    // ==========================================
    // CURRENT TEMPERATURE MARKER
    // ==========================================

    const marker =
        document.querySelector("#temperature-marker");

    const point =
        document.querySelector("#temperature-point");


    const minTemp = 35;
    const maxTemp = 40;

    const graphLeft = 80;
    const graphRight = 750;


    const x =
        graphLeft +
        ((temperature - minTemp) /
        (maxTemp - minTemp))
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


    const y =
        330 -
        (strongestMembership * 290);


    point.setAttribute("cy", y);


    // ==========================================
    // DEBUG
    // ==========================================

    console.log("========== BODY GRAPH ==========");

    console.log(
        "Temperature:",
        temperature + " °C"
    );

    console.log(
        "Low:",
        (low * 100).toFixed(0) + "%"
    );

    console.log(
        "Normal:",
        (normal * 100).toFixed(0) + "%"
    );

    console.log(
        "High:",
        (high * 100).toFixed(0) + "%"
    );
}