document.getElementById("buttonClear").addEventListener("click", function () {
    const gridNumbers = document.querySelectorAll(".grid_number");
    gridNumbers.forEach(function (div) {
        div.style.backgroundColor = "Lavender";
        div.textContent = div.dataset.originalText || div.textContent;
        div.classList.remove("clicked");
    });
});
