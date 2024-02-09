// Nesting

// let age = 19
// if(age >= 18) {
//     if(age >= 60) {
//         console.log("Your age is above 60")
//     }else {
//         console.log("Your age is not above 60")
//     }
// }else {
//     console.log("less than")
// } // nesting callback hell.


// GetData & Callback Hell

// function getData(dataId) {   // get normal data without setTimeout;
//     console.log("data:", dataId)
// }

// getData(1)

// function getData(dataId) {  // get one data with setTimeout;
//     setTimeout(() => {
//     console.log("data:", dataId)
//     }, 2000)
// }

// getData(1)


// function getData(dataId, getNextData) {  // get 2 data with setTimeout, arrow function & callback.
//     setTimeout(() => {
//     console.log("data:", dataId)
//     if(getNextData) {
//         getNextData()
//     }
//     }, 2000)
// }

// getData(1, () => { // passed an arrow function, then passed callback to acheive nextData.
//     getData(2)
// })


// function getData(dataId, getNextData) {  // get more than data with setTimeout, arrow function & callback.
//     setTimeout(() => {
//         console.log("data:", dataId)
//         if(getNextData) {
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => { // get more data through an arrow function and callback pass.
//     getData(2, () => {
//         getData(3)
//     })
// })
// This is Callback Hell / Pyramid of Doom.