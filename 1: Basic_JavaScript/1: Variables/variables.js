// console.log("Hey this is JavaScript Variables Practice Set No:1"); // Basic Console log Print

// Basic Variables

var a = 11
var b = 12
var c = 13
let str1 = "Jallal"

// console.log(a); // Simple Variable Print
// console.log(a + b); // Adding Numbers
// console.log(a + b + 8) // Adding More Numbers
// console.log(typeof a) // Number
// console.log(typeof str1) // String
// console.log(typeof a, typeof b, typeof str1) // Checking typeof

// const a1 = "Harry"
// a1 = "Jallal"
// console.log(a1) // Constant not changeAble

// {
//     let a = 66 // Let is blocked Scope
//     console.log(a)
// }

{
    var a = 66; // Var is Globally Scoped
    console.log(a)
}
console.log(a);

// Basic DataTypes

let str = "Jallal" // String
let num1 = 18 // Number
let num2 = 18.66 // Decimal Number
let bool1 = true // Boolean Value 1
let bool2 = false // Boolean Value 2 
let undef1 = undefined // Undefined Value 1
let undef2; // Undefined Value 2
let null1 = null // Null
let bigNumber = 15234164054169n // Bigint / BigNumber

// console.log(str, num1, num2, bool1, bool2, undef1, undef2, null1, bigNumber)
// console.log(typeof str, typeof num1, typeof num2, typeof bool1, typeof bool2, typeof undef1, typeof undef2, typeof null1, typeof bigNumber)


// Basic Object

let obj = {
    name: "Jallala Malik",
    email: "jallalmalik58@gmail.com"
}
obj.id = 18
console.log(obj.id)
obj.id = 28
console.log(obj.id)
obj.isLoggedIn = true
console.log(obj)