const list = [
    1,
    10,
    2,
    9,
    3,
    8,
    4,
    7,
    5,
    6
]
const list2 = [
    1,
    10,
    2,
    9,
    3,
    8,
    4,
    7,
    5,
    6
]

const findSmallest= (list)=>{
    let smallest = list[0]
    let smallest_index = 0
    for (let index = 1; index < list.length ; index++) {
        const variant = list[index]
        if(variant<smallest){
            smallest=variant
            smallest_index=index
        }
    }
    return smallest_index
}

const selection_sort = (list)=>{
    const result_list = []
    let new_list = [...list]
    for (const list_element of list) {
        const smallest_index = findSmallest(new_list)
        result_list.push(new_list[smallest_index])
        new_list = new_list.slice(0,smallest_index).concat(new_list.slice(smallest_index+1,new_list.length))
    }
    return result_list
}

console.time('sort')
console.log([...list2].sort((a,b)=>{
    if(a<b) return -1
    if(a>b) return 1
    return 0
}))
console.timeEnd('sort')

console.time('selection_sort')
console.log(selection_sort(list))
console.timeEnd('selection_sort')