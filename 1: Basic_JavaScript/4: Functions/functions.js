function func1(name) {
    console.log("Hey, " + name + " you are good")
    console.log("Hey, " + name + " you are nice")
    console.log("Hey, " + name + " your T-Shirt is very Nice")
    console.log("Hey, " + name + " your Course are good to!")
}
// func1("Jallal")
// func1("Malik")

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(5, 5)

// function sum(a, b) {
//     return a + b
// }
// let value = sum(5, 5)
// console.log(value)

function name(a, b, c = 12) {
    return a + b + c
}
let store = name(2, 5)
console.log(store)


// Arrow Functions

let arr1 = (n, b) => {
    return n + b
}

let finalArr = arr1(5, 10)
console.log(finalArr)  // This is an Arrow Function

let arr2 = (n) => {
    console.log("This is an Arrow Function", n)
}
arr2(28)