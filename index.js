// get the count elements
let countEl = document.getElementById("count-el");

// get the save element
let saveEl = document.getElementById("save-el");

// Initialize the count
let count = 0
countEl.textContent = count

// Increment the count when the increment button is clicked
function increment() {
    count += 1
    countEl.textContent = count
}

// decrement the count when the increment button is clicked
function decrement() {
    if(count > 0){
        count -= 1
        countEl.textContent = count
        
    }
}

// saving the entries when the button is clicked
function Save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

