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
