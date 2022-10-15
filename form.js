let count = 0

const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}