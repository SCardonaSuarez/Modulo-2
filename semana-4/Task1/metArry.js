//ForEach

const arr=[1,2,3,4,5]

arr.forEach(item => {
    console.log(item)
})


//Map

const arr2 = [1,2,3,4,5,6]
const oneAdded = arr2.map(num => num + 1);
console.log(oneAdded)

console.log(arr)

//Include

const arr3 = [1,2,3]
console.log(arr.includes(2))

const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'))
console.log(pets.includes('at'))


//filter

const arr4 = [1,2,3,4,5,6]

const filtered = arr4.filter(num => num > 3)

console.log(filtered)
console.log(arr4)


//Reduce

const arr5 = [1,2,3,4,5,6]
const sum = arr5.reduce((total,value) => total + value, 0)

console.log(sum)


//some

const arr6 = [1,2,3,4,5,6]

const largeNum = arr6.some(num => num > 4)
console.log(largeNum)

const smallNum = arr6.some(num => num <= 0)
console.log(smallNum)


// 7.every()

const arr7 = [1,2,3,4,5,6]

const greaterFour = arr.every(num => num > 4)
console.log(greaterFour)

const lessTen = arr.every(num => num < 10)
console.log(lessTen)

//sort()

const arr8 = [1,2,3,4,5,6]
const alpha= ['e', 'a', 'c', 'u', 'y']

const descOrder= arr8.sort((a,b)=> a > b ? -1 : 1)
console.log(descOrder)

const ascorder = alpha.sort((a,b) => a > b ? 1 : -1)
console.log(ascorder)


// 9 Array.from()

console.log(Array.from('foo'))
console.log(Array.from([1,2,3], x => x + x))


// array.of()

const nums = Array.of(1,2,3,4,5,6)
console.log(nums)