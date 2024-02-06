// Matches, Closest, Contains


// 1: Matches

let container = document.querySelector(".container")
// console.log(container);
// console.log(container.children[2].matches("#extraBox"));  // match css selector or not. True / False


// 2: Closest

let container1 = document.querySelector(".container")
// console.log(container1);
// console.log(container1.children[3].closest(".container"));  // return nearest css selector or parents. null / content


// 3: Contain

let container2 = document.querySelector(".container")
console.log(container2.contains(container2.children[2])) // return element is inside here or not. True / False

let container3 = document.querySelector(".container")
console.log(container3.contains(document.querySelector("body"))) // return false because body is not inside container.