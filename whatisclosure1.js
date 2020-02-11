const powerOf = (x) => {
    const power = (y) => {
        return y**x
    }
    return power
}

const square = powerOf(2)
const cube = powerOf(3)

console.log(square(4))
console.log(cube(5))

console.log(typeof(()=>{}))

test = () => console.log("I am an IIFE")
test()
   
