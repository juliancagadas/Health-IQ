
const heartSlider = document.querySelector(".heart-slider");
const heartvalueBox = document.querySelector(".heart-rate-value");
const heartvalueStatus = document.querySelector(".heart-rate-status");

heartSlider.addEventListener("input", () => {
    heartvalueBox.textContent = heartSlider.value;



    console.log("Working");

    if (heartSlider.value <= 60) {
    heartvalueStatus.textContent = "Low";
    heartvalueStatus.style.color = "yellow";
}

    if (heartSlider.value > 60 && heartSlider.value <= 100) {
    heartvalueStatus.textContent = "Normal";
    heartvalueStatus.style.color = "green";
}

    if (heartSlider.value > 100) {
    heartvalueStatus.textContent = "High";
    heartvalueStatus.style.color = "red";
}

});
