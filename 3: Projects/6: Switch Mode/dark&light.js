// let btn = document.querySelector(".Btn")
// let mode = "light"

// btn.addEventListener("click", () => {
//     if(mode === "light") {
//         mode = "dark"
//         document.body.style.background = "black"
//     }else {
//         mode = "light"
//         document.body.style.background = "white"
//     }
// })


let btn = document.querySelector(".Btn")
let body = document.querySelector("body")
let mode = "light"

btn.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark"
        body.classList.add("dark")
        body.classList.remove("white")
    }else {
        mode = "light"
        body.classList.add("white")
    }
})