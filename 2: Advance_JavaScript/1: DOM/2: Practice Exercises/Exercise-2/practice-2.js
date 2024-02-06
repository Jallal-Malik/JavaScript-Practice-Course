/*
1: Create 3 divs with common className
2: Each div have some styling
2: Access all divs and assign a text to each div
*/

let box = document.querySelectorAll(".box")  // First Method
// box[0].innerText = "Daba 1"
// box[1].innerText = "Daba 2"
// box[2].innerText = "Daba 3"  // Text assigned


let val = 1
for (const iterator of box) {
    iterator.innerText = `Daba ${val}`  // for-of Loop Method
    val++
}