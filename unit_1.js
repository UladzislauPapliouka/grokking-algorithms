const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const simple_search = (list, item_value) => {
    for (let index = 0; index < list.length ; index++) {
        if (list[index] === item_value) return index
    }
    return null
}
const binary_search = (list, item_value) => {
    let min_index = 0;
    let max_index = list.length-1;
    while (min_index <= max_index) {
        const mid_index = Math.floor((min_index + max_index) / 2);
        const variant = list[mid_index]
        if (variant === item_value) return min_index
        if (variant < item_value) {
            min_index = mid_index + 1
        }
        if (variant > item_value) {
            max_index = mid_index - 1
        }
    }
    return null
}

console.time('simple')
console.log(simple_search(list,10))
console.timeEnd('simple')

console.time('binary')
console.log(binary_search(list,10))
console.timeEnd('binary')
