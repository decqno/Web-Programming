document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("partner-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for choosing to partner with us!");

        form.reset();
    });
});
