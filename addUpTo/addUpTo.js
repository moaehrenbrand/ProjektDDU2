document.addEventListener("DOMContentLoaded", function () {
    const buttonAdd = document.getElementById("buttonAdd");
    const inputAdd = document.getElementById("inputAdd");
    const numbersContainer = document.getElementById("numbers");

    let lastPair = [];

    buttonAdd.addEventListener("click", function () {
        const targetSum = +inputAdd.value;

        if (!targetSum || targetSum <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }

        const numbers = Array.from(numbersContainer.getElementsByClassName("grid_number"));

        if (lastPair.length > 0) {
            lastPair.forEach(div => {
                div.style.backgroundColor = "Lavender";
            });
        }

        const numberValues = numbers.map(div => ({
            value: +div.textContent.trim(),
            div: div
        }));
