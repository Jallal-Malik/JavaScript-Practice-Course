let random = Math.random()
console.log(Math.random())
let a = prompt("Enter first number")
let c = prompt("Enter your Operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random > 0.1) {
    alert(`The result is, ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj[c]
    alert(`The result is, ${eval(`${a} ${c} ${b}`)}`)
}