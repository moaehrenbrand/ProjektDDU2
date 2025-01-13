document.getElementById("buttonClear").addEventListener("click", function () {
    const gridNumbers = document.querySelectorAll(".grid_number");
    gridNumbers.forEach(function (div) {
        div.style.backgroundColor = "Lavender";
        div.textContent = div.dataset.originalText || div.textContent;
        div.classList.remove("clicked");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const numbersContainer = document.getElementById("numbers");
    numbersContainer.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid_number") && !event.target.classList.contains("clicked")) {
            event.target.style.backgroundColor = "plum";
        }
    });

    numbersContainer.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("grid_number") && !event.target.classList.contains("clicked")) {
            event.target.style.backgroundColor = "Lavender";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("grid_number")) {
            const div = event.target;

            if (!div.classList.contains("clicked")) {
                div.style.backgroundColor = "orchid";
                div.dataset.originalText = div.textContent;
                div.textContent = "";
                div.classList.add("clicked");

                div.addEventListener("mouseleave", function handleMouseLeave() {
                    div.style.backgroundColor = "rebeccapurple";
                    div.removeEventListener("mouseleave", handleMouseLeave);
                });
            } else {
                div.style.backgroundColor = "Lavender";
                div.textContent = div.dataset.originalText;
                div.classList.remove("clicked");
            }
        }
    });

    numbersContainer.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid_number") && event.target.classList.contains("clicked")) {
            event.target.style.backgroundColor = "orchid";
        }
    });

    numbersContainer.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("grid_number") && event.target.classList.contains("clicked")) {
            event.target.style.backgroundColor = "rebeccapurple";
        }
    });
});


