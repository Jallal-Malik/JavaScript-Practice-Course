// First (Under 18 not Drive, Upper 18 Drive)

// let age  = prompt("Enter your age")
//    age = Number.parseInt(age)

//    let canDrive = (age) => {
//     return age >= 18 ? true : false
// }

//    if(canDrive(age)) {
//     alert("Yes you can drive")
// }else {
//     alert("You cannot drive")
// }


// Second (Again and again loop)


// let runAgain = true

// let canDrive = (age) => {
//     return age >= 18 ? true : false
// }

// while(runAgain) {
//    let age  = prompt("Enter your age")
//    age = Number.parseInt(age)
   
//    if(canDrive(age)) {
//        alert("Yes you can drive")
//    }else {
//        alert("You cannot drive")
//    }
   
//    runAgain = confirm("Do you want to play again ?")
// }



// Third (Again and again with negative Value error message)


let runAgain = true

let canDrive = (age) => {
    return age >= 18 ? true : false
}

while(runAgain) {
   let age  = prompt("Enter your age")
   age = Number.parseInt(age)

   if(age < 0) {
    console.error("Please enter a valid age")
   }
   
   if(canDrive(age)) {
       alert("Yes you can drive")
   }else {
       alert("You cannot drive")
   }
   
   runAgain = confirm("Do you want to play again ?")
}