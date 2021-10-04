// Opdracht 1

const btnAlert = document.querySelector(".btn-alert");

btnAlert.addEventListener('click', function () {
    alert("button clicked")
})


// Opdracht 2 + 3

const changeColor = document.querySelector(".blue-background");

changeColor.addEventListener('click', function () {
    changeColor.classList.toggle("red-background")
})
