document.addEventListener("DOMContentLoaded", function() {
    let lastMarkedNumber = null;

    function markSameNumbers(number) {
        const allDivs = document.querySelectorAll(".grid_number");
        let count = 0;

        allDivs.forEach(div => {
            div.style.backgroundColor = "Lavender";
        });

        allDivs.forEach(div => {
            if (div.textContent.trim() === number) {
                div.style.backgroundColor = "orchid";
                count++;
            }
        });

        const copiesElement = document.getElementById("copies");
        copiesElement.textContent = `Found ${count} copies of number ${number}`;

        lastMarkedNumber = number;
    }

    const numbersContainer = document.getElementById("numbers");

    numbersContainer.addEventListener("click", function(event) {
        const clickedDiv = event.target;

        if (clickedDiv.classList.contains("grid_number")) {
            const number = clickedDiv.textContent.trim();
            markSameNumbers(number);
        }
    });

    document.getElementById("buttonReset").addEventListener("click", function() {
        const allDivs = document.querySelectorAll(".grid_number");
        allDivs.forEach(div => {
            div.style.backgroundColor = "Lavender";
        });

        const copiesElement = document.getElementById("copies");
        copiesElement.textContent = "Click on a number to find copies."; 
        lastMarkedNumber = null; 
    });
});






