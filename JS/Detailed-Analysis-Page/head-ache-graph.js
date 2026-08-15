// =====================================================
// HEADACHE DETAILED GRAPH
// =====================================================

const headSavedData = localStorage.getItem("healthAssessment");

if (headSavedData) {

    const data = JSON.parse(headSavedData);


    // =================================================
    // CURRENT HEADACHE VALUE
    // =================================================

    const headache = Number(data.headache);

    document.querySelector("#graph-headache-value" ).textContent = headache.toFixed(1) + " / 10";


    // =================================================
    // FUZZY MEMBERSHIP VALUES
    // =================================================

    const mild = Number(data.headMild) || 0;
    const moderate = Number(data.headModerate) || 0;
    const severe = Number(data.headSevere) || 0;

    // =================================================
    // DISPLAY MEMBERSHIP VALUES
    // =================================================

    document.querySelector("#graph-headache-mild").textContent = (mild * 100).toFixed(0) + "%";
    document.querySelector("#graph-headache-moderate").textContent = (moderate * 100).toFixed(0) + "%";
    document.querySelector("#graph-headache-severe").textContent = (severe * 100).toFixed(0) + "%";

    // =================================================
    // MOVE CURRENT VALUE MARKER
    // =================================================

    const marker = document.querySelector("#headache-marker");
    const point = document.querySelector("#headache-point");


    // Graph range
    const minHeadache = 0;
    const maxHeadache = 10;

    const graphLeft = 80;
    const graphRight = 750;


    // Calculate X position
    const x =
        graphLeft +
        ((headache - minHeadache) /
        (maxHeadache - minHeadache))
        * (graphRight - graphLeft);


    // Move vertical marker
    marker.setAttribute("x1", x);
    marker.setAttribute("x2", x);


    // Move point horizontally
    point.setAttribute("cx", x);


    // =================================================
    // MOVE POINT VERTICALLY
    // =================================================

    // Get strongest membership
    let strongestMembership = 0;

    if (mild > strongestMembership) {
        strongestMembership = mild;
    }

    if (moderate > strongestMembership) {
        strongestMembership = moderate;
    }

    if (severe > strongestMembership) {
        strongestMembership = severe;
    }

    const y = 330 - (strongestMembership * 290);


    point.setAttribute("cy", y);

}