// DOM / Document Object Model



// 1: Accessing Elements in JavaScript.


// First Method to access Elements.

let heading = document.getElementById("heading")  // Select Element by id.

// console.log(heading)
// console.dir(heading)


// Second Method to access Elements.

let newHeading = document.getElementsByClassName("myClass")  // Select Element by className

// console.log(newHeading)  // getElementByClassName returns a HTML Collection. It is same as array but not exactly array.


// Third Method to access Elements.

let paragraphs = document.getElementsByTagName("p") // returns all paragraphs

// console.log(paragraphs)


// Another Method to access Elelments
// QuerySelector

let selector = document.querySelector("p")  // return first paragraph
// console.log(selector)
let selectId = document.querySelector("#heading") // return id
// console.log(selectId)
let selector2 = document.querySelectorAll("p")  // return all paragraphs & nodelist
// console.log(selector2)



let tagP = document.querySelector("p")
// console.log(tagP)
// tagP.tagName to see tag (p)=> Paragraph

let tagH = document.querySelector("#heading")
// console.log(tagH)
// tagH.tagName to see tag (H1)=> h1

let btnB = document.querySelector("button")
// console.log(btnB);
// btnB.tagName to see tag (BUTTON)=> Button



// 2: Children

// console.log(document.body.firstChild)  // return first child in body & first child is #text node.

/*
There are three nodes in DOM: 
1: text node
2: comment node
3: element node
*/

let childContain = document.querySelector(".child-container").children // access all childrens
// console.log(childContain)

let firstChild = document.querySelector(".child-container").firstChild // access first child
// console.log(firstChild) // return #text

let secondChild = document.querySelector(".child-container").lastChild // access last child
// console.log(secondChild) // return #text

let thirdChild = document.querySelector(".child-container").children[0]
// console.log(thirdChild) // returns first element child (h2)

let fourthChild = document.querySelector(".child-container").children[1]
// console.log(fourthChild) // returns first element child (p)

let fifthChild = document.querySelector(".child-container").firstElementChild
// console.log(fifthChild) // returns first element child

let sixthChild = document.querySelector(".child-container").lastElementChild
// console.log(sixthChild) // returns last element child

let seventhChild = document.querySelector(".child-container").childNodes
// console.log(seventhChild) // returns all childNodes including (text,elements,etc...)

let eighthChild = document.querySelector(".child-container").childNodes[1]
// console.log(eighthChild) // return childnode (text / element)

let ninthChild = document.querySelector(".child-container").childNodes[1].parentElement
// console.log(ninthChild) // return parent element

let tenthChild = document.querySelector(".sibling-container").children[1].nextElementSibling
// console.log(tenthChild) // return next element. Sibling / Brother or Sister

let eleventhChild = document.querySelector(".sibling-container").children[1].previousElementSibling
// console.log(eleventhChild) // return previous element. Sibling / Brother or Sister



// 3: innerText, innerHTML, textContent


let fruit = document.querySelector(".fruits")
// console.log(fruit)
// console.log(fruit.innerText);  // all inner text => 'Fruits\nmango\norange\nbanana'
// /n is a new line

// console.log(fruit.innerHTML); // all inner HTMl tags and content

// fruit.innerText = "Hello Code"  // Change inner text
// fruit.innerHTML = "<h1>Fruits hidden</h1>" // change complete inner html including tags
// fruit.innerHTML = "<b><h1>Fruits hidden</h1></b>"

let childPara = document.querySelector(".child-para")
// console.log(childPara);
// console.log(childPara.textContent);  // taxt content returns hidden text.




// 4: Attributes


let hasAttribute = document.querySelector(".para-2").hasAttribute("name")
// console.log(hasAttribute) // check Attribute or not

let checkAttributes = document.querySelector(".para-2").attributes
// console.log(checkAttributes);  // show all attributes

let removeAttribute = document.querySelector(".para-2").removeAttribute("name")
// console.log(removeAttribute);  // remove attribute

// Get-Attribute

let attribute = document.querySelector(".attributes-container").firstElementChild
// console.log(attribute.getAttribute("class"))  // access attribute (h3 => heading-attribute)

let attribute2 = document.querySelector(".attributes-container").childNodes[3]  // childnodes method
// console.log(attribute2.getAttribute("name"))  // access attribute (name => Jallal)


// Set-Attribute

let attribute3 = document.querySelector(".attributes-container").firstElementChild
// console.log(attribute3.setAttribute("class", "new-Heading"))  // set attribute (h3 => new-Heading)

let attribute4 = document.querySelector(".attributes-container").childNodes[3]  // childnodes method
// attribute4.setAttribute("name", "Jallal_Malik")  // set attribute (name => Jallal_Malik)




// 5: Style

let box = document.getElementsByClassName("box")[0]
// console.log(box);
box.style.width = "100px"
box.style.height = "100px"
box.style.color = "#fff"
box.style.fontSize = "25px"
box.style.background = "blue"
box.style.textAlign = "center"

// document.title = "DOM"  // Change webpage Title

document.querySelectorAll(".boxes").forEach(e => { // change all boxes styling by using loop
    e.style.background = "green"
    e.style.height = "100px"
    e.style.width = "100px"
})

document.querySelector(".sibling-container").style.display = "flex"
document.querySelector(".sibling-container").style.gap = "10px"



// 6: Creating & Adding Elements


// Create Element

let btn = document.createElement("button")
btn.innerText = "Click me!"
// console.log(btn)


// Append / Attach

// box.append(btn)  // (append) inside and end
// box.prepend(btn)  // (append) inside and start
// box.before(btn)  // (append) outside and start
// box.after(btn)  // (append) outside and end


// Create Element

let topHeading = document.createElement("h1")
topHeading.innerHTML = "<i> Complete DOM Explain </i>"
topHeading.style.textAlign = "center"
// console.log(topHeading)


// Attach Element on the top of Body
document.body.prepend(topHeading)



// 7: Removing

let name1 =document.querySelector(".para-2")
name1.remove() // remove elements