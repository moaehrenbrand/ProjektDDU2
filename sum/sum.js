document.getElementById("buttons").addEventListener("click", function () {
    const input = document.getElementById("inputone");
    const n = Number(input.value);

    newNumbers(n, true);

    const numbers = document.querySelectorAll("#numbers .grid_number");

    let sum = 0;

    numbers.forEach(function (number) {
        sum += Number(number.textContent);
    });

    document.getElementById("all").textContent = sum;
});

let markedNumbers = [];

function updateMarkedSum() {
    const markedDivs = document.querySelectorAll(".grid_number.marked");
    let sum = 0;

    markedDivs.forEach(function (div) {
        sum += Number(div.textContent);
    });

    document.getElementById("marked").textContent = sum;
}

document.getElementById("numbers").addEventListener("click", function(event) {
    if (event.target.classList.contains("grid_number")) {
        event.target.classList.toggle("marked");
        if (event.target.classList.contains("marked")) {
            event.target.style.backgroundColor = "orchid";
        } else {
            event.target.style.backgroundColor = "Lavender";
        }
        updateMarkedSum(); 
    }
});

document.getElementById("buttons").addEventListener("click", function() {
    const input = document.getElementById("inputone");
    const n = input.value * 1;
    newNumbers(n, true);
});

document.getElementById("Reset").addEventListener("click", function() {
    const allDivs = document.querySelectorAll(".grid_number");
    allDivs.forEach(function(div) {
        div.classList.remove("marked");
        div.style.backgroundColor = "Lavender";
    });
    document.getElementById("marked").textContent = " - ";
});