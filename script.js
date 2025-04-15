function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Detect bounce using animation events
document.addEventListener("DOMContentLoaded", function () {
    let ball = document.querySelector(".ball");

    ball.addEventListener("animationiteration", function () {
        toggleMode(); // Switch theme every time the animation loops
    });
});