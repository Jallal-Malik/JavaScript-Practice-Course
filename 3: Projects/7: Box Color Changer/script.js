let box = document.getElementById("box")
box.addEventListener("mouseover", () => {
    box.style.background = "yellow"
})

box.addEventListener("mouseout", () => {
    box.style.background = "lightgray"
})

let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    box.style.background = "white"
})