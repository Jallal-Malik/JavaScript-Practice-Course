// Mouse Events


// First Method

let btn = document.getElementById("btn")
let rightClickBtn = document.getElementById("right-btn")
let doubleClickBtn = document.getElementById("doubleClick-btn")

btn.addEventListener("click", () => {  // Single Click
    alert("Dont hack our system by rigsht click")
})

rightClickBtn.addEventListener("contextmenu", () => {  // Right Click
    alert("Dont hack our system by right click")
})

doubleClickBtn.addEventListener("dblclick", () => {  // Double Click
    alert("Dont hack our system by right click")
})


// Second Method

let newBtn = document.getElementById("new-btn")
newBtn.onclick = (e) => {
    alert("newBtn was clicked")
    console.log(e)  // all pointerEvent properties
    console.log(e.type)  // Click type
    console.log(e.target)  // location / Content
    console.log(e.clientX, e.clientY)  // Axis
}

let mouseOver = document.getElementById("mouseover")
mouseOver.onmouseover = () => {
    alert("mouse over was successful")
}



// Keyboard Events


document.addEventListener("keydown", (e) => {
    // console.log(e)
})

document.addEventListener("keydown", (e) => {
    console.log(e.key)
})

document.addEventListener("keydown", (e) => {
    // console.log(e.key, e.keyCode)
})