const inputDOM = document.querySelector("#inputone");

const howManyDivs = document.createElement("p");
howManyDivs.textContent = "How many numbers in the grid?";
const headerElement = document.getElementById("header");
headerElement.appendChild(howManyDivs);

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "inputone";

headerElement.appendChild(inputElement);

const buttonElement = document.createElement("button");
buttonElement.textContent = "Create";
buttonElement.id = "buttons";

headerElement.appendChild(buttonElement);

buttonElement.addEventListener("click", function () {
    let n = document.getElementById("inputone").value;
    newNumbers(n, true);
});

function randomNumber (min, max) {
    return Math.floor(min + (max - min) * Math.random());
}

function newNumbers (n, fill) {
    const numbersContainer = document.getElementById("numbers");
    numbersContainer.innerHTML = "";

    for (let i = 0; i < n; i++) {
        const div = document.createElement("div");
        div.className = "grid_number";
        numbersContainer.appendChild(div);

        div.style.backgroundColor = "Lavender";
        div.style.border = "1px solid black";
        div.style.borderRadius = "5px";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";

        if (fill) {
            div.textContent = randomNumber(1, 99);
        } else {
            div.textContent = "-";
        }
    }
};