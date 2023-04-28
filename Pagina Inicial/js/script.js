let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let materia = document.querySelectorAll(".materia")
var index = 0

function nexts() {
    materia[index].classList.remove("show");
    index = (index + 1) % materia.length;
    materia[index].classList.add("show");
}

function prevs() {
    materia[index].classList.remove("show");
    index = ((index - 1) + materia.length) % materia.length;
    materia[index].classList.add("show");
}

next.addEventListener('click', nexts)
prev.addEventListener('click', prevs)