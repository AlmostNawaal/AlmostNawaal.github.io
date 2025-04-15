document.addEventListener("DOMContentLoaded", function () {
    let ball = document.querySelector(".ball");
    let button = document.querySelector(".toggle-btn");

    // Toggle theme when ball is clicked
    ball.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Toggle theme using the button
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Enable dragging functionality for the ball
    let isDragging = false;

    ball.addEventListener("mousedown", function (event) {
        isDragging = true;

        document.addEventListener("mousemove", moveBall);
        document.addEventListener("mouseup", function () {
            isDragging = false;
            document.removeEventListener("mousemove", moveBall);
        });
    });

    function moveBall(event) {
        if (isDragging) {
            ball.style.left = event.clientX - 25 + "px";
            ball.style.top = event.clientY - 25 + "px";
        }
    }
});