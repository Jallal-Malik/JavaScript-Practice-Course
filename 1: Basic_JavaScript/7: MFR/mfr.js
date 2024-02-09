let arr1 = [1, 2, 3, 44, 56]

// let newArr = []

// for (let index = 0; index < arr1.length; index++) { // This is simple for-Loop method to push values into a empty Array.
//     const element = arr1[index];
//     newArr.push(element)
// }

// Map

let newArr = arr1.map(e => { // This is map. Map returns a new Array.
    return e
})

console.log(newArr)


// Filter


// const greaterThanSeven = (e) => {
//     if(e > 7) {
//         return true
//     }
//     return false
// }

const greaterThanSeven = (e) => {
    if(e > 7) {
        return arr1
    }
    return undefined
}

// console.log(arr1.filter(greaterThanSeven))


// Reduce

let arr3 =[1, 2, 55, 44, 5] // adding all values in 2 format.
let newfunc = (a,b) => {
    return a + b
    // return a * b
    // return a - b
    // return a / b
}

console.log(arr3.reduce(newfunc));