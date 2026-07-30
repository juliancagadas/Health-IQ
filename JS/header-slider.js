const navs = document.querySelectorAll(".nav");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(element){
    indicator.style.left = element.offsetLeft + "px";
    indicator.style.width = element.offsetWidth + "px";
}

// initial position (Home)
moveIndicator(document.querySelector(".nav.active"));

navs.forEach(nav => {

    nav.addEventListener("mouseenter", () => {
        moveIndicator(nav);
    });

    nav.addEventListener("click", () => {

        document.querySelector(".nav.active")
            .classList.remove("active");

        nav.classList.add("active");

        moveIndicator(nav);
    });

});

document.querySelector(".header-right-section")
.addEventListener("mouseleave", () => {

    moveIndicator(document.querySelector(".nav.active"));

});