// Lesson 16,17....grab the count-el element, store it in the countEl variable
// grab the sav-el paragraph and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count

}
//1. create a function, save(), which logs out the count when it is called

function save() {
    //ceate a variable that contains both the count and the dash separator, ie "12 - "
    //render the variable in the saveEl using innerText
    //make sure not to delete the existing content of the paragraph 
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(count)
}


