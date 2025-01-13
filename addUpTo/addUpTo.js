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

        let foundPair = false;

        for (let i = 0; i < numberValues.length; i++) {
            for (let j = i + 1; j < numberValues.length; j++) {
                if (numberValues[i].value + numberValues[j].value === targetSum &&
                    !numberValues[i].div.classList.contains("marked") &&
                    !numberValues[j].div.classList.contains("marked")) {

                    numberValues[i].div.style.backgroundColor = "orchid";
                    numberValues[j].div.style.backgroundColor = "orchid";

                    numberValues[i].div.classList.add("marked");
                    numberValues[j].div.classList.add("marked");

                    lastPair = [numberValues[i].div, numberValues[j].div];

                    foundPair = true;
                    break;
                }
            }
            if (foundPair) break;
        }

        if (!foundPair) {
            alert("No more pairs found.");
        }
    });
});


















