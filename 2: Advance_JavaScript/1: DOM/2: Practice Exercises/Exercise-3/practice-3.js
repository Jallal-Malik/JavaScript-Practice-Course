/*
1: create a button Element
2: Put text "Click me!"
3: set background-color is red
4: set background-color is white
*/

let btn = document.createElement("button")
btn.innerText = "Click me!"
btn.style.background = "red"
btn.style.color = "#fff"

document.body.prepend(btn)