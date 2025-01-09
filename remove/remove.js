document.getElementById("newNumber").addEventListener("click", function () {
    let randomNumberDom = document.getElementById("randomNumber");
    let new_random_number = randomNumber(0,99);
    randomNumberDom.textContent = new_random_number;

    let all_grid_numbers = document.querySelectorAll(".grid_number");

    for (let grid_num of all_grid_numbers) {
        if (grid_num.textContent == new_random_number) grid_num.classList.add("highlighted");
    }
});

document.getElementById("removeNumber").addEventListener("click", function () {
    let randomNumberDom = document.getElementById("randomNumber");
    let targetNumber = randomNumberDom.textContent;
    let removedNumbers = document.getElementById("removeRandomNumber");

    let allGridNumbers = document.querySelectorAll(".grid_number");
    let count = 0;

    for (let grid_num of allGridNumbers) {
        if (grid_num.textContent == targetNumber) {
            count++; 
            grid_num.classList.remove("highlighted");
            grid_num.classList.add("removed");
            grid_num.textContent = "X"; 
        }
    }
    if (count > 0) {
        removedNumbers.textContent = `${targetNumber} removed ${count} times`;
    } else {
        removedNumbers.textContent = "Nothing to remove";
    }
});
