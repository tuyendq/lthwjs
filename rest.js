'use strict'

// Rest parameter example
function sendCards(day, ...cardIds) {
    cardIds.forEach((id) => {
        console.log(id)
    })
}

sendCards(1, 2, 50, 'Monday')