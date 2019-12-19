'use strict'

// Rest parameter example
function sendCards(day, ...cardIds) {
    cardIds.forEach((id) => {
        console.log(id)
    })
}

sendCards(1, 2, 50, 'Monday')

// Arrow function example
let sum = (...listNumbers) => {
    let total = 0
    listNumbers.forEach((el) => {
        total += el
    })
    return total
}

console.log(sum(1, 5, 6, 3.4))