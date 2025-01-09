document.getElementById("newNumber").addEventListener("click", function () {
    let randomNumberDom = document.getElementById("randomNumber");
    let new_random_number = randomNumber(0,99);
    randomNumberDom.textContent = new_random_number;

    let all_grid_numbers = document.querySelectorAll(".grid_number");

    for (let grid_num of all_grid_numbers) {
        if (grid_num.textContent == new_random_number) grid_num.classList.add("highlighted");
    }
});
