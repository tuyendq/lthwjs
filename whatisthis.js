console.log(this) // Window

let message = {
    name: 'Tuyen',
    whatisthis: function (){
        console.log(this)
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this)
        console.log(this.name)
    }
}

console.log(message.name) // Tuyen
console.log(message.whatisthis) //f (){...}
console.log(message.arrowFunction)