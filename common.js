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
