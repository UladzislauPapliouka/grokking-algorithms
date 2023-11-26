const devideFarm = (width,height)=>{
    if(width===2*height ){
        return `Optimal size is ${height}x${height}`
    }
    if(2*width===height ){
        return `Optimal size is ${width}x${width}`
    }
    if(width>height){
        return devideFarm(width-height,height)
    }
    if(width<height){
        return devideFarm(width,height-width)
    }
    return 'Farm is square'
}

console.log(devideFarm(25,25))

console.log(devideFarm(50,25))
console.log(devideFarm(25,50))

console.log(devideFarm(1680,640))


const sum=(list)=>{
    if(list.length===0) return 0
    return list[0] + sum(list.slice(1))
}

console.log(sum([1,2,3,4]))


const countListElements = (list) =>{
    if(list.length===0) return 0
    return 1 + countListElements(list.slice(1))
}
console.log(countListElements([1,2,3,4]))

const findMax = (list)=>{
    if(list.length === 0) return null
    if(list.length === 1) return list[0]
    const mid_index = Math.floor(list.length/2)
    const max_left = findMax(list.slice(0,mid_index))
    const max_right = findMax(list.slice(mid_index,list.length))
    return max_left >= max_right ? max_left : max_right
}

console.log(findMax([1,2,3,4,90,67]))


const binarySearch = (list,start,finish,value) => {
    if (list.length === 0) return null
    if (list.length === 1) return list[0] === value ? 0 : null
    const mid_index = Math.floor((start+finish)/2)
    if(list[mid_index]===value) return mid_index
    if(list[mid_index]>value){
        return binarySearch(list,start,mid_index-1,value)
    } else {
        return  binarySearch(list,mid_index+1,finish,value)
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],0,8,9))

const quickSort = (list)=>{
    if(list.length<2) return list
    const mid_index = Math.floor(list.length/2)
    const base_element = list[mid_index]
    const less = []
    const great = []
    for (const element of list) {
        if(element>base_element) great.push(element)
        if(element<base_element) less.push(element)
    }
    return quickSort(less).concat([base_element]).concat(quickSort(great))
}

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
console.log(quickSort(list))