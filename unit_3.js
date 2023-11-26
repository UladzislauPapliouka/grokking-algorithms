const factorial = (number)=>{
    if(number === 1 || number===0) return 1
    return number * factorial(number-1)
}

console.time('factorial1')
console.log(factorial(1))
console.timeEnd('factorial1')

console.time('factorial10')
console.log(factorial(10))
console.timeEnd('factorial10')

console.time('factorial100')
console.log(factorial(100))
console.timeEnd('factorial100')

console.time('factorial1000')
console.log(factorial(1000))
console.timeEnd('factorial1000')