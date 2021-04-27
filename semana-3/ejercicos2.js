//Ejercicio 1

const myPromise = Promise.resolve(1)

myPromise.then((value) => {

  console.log(value) // log: 1
}) 

//Ejercicio 2

const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise.then((value) => {
 console.log(value + 1)  // log: 2
})

//Ejercicio 3

const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise
  .then((value) => {
    return value + 2
  })
  .then((value) => {
   console.log(value + 1) // log: 4
})

//Ejercicio 4

const myPromise = new Promise((resolve, reject) => {
  reject('Error: Operation Failed')  
})

myPromise
  .catch((err) => {
   console.log(err) // log: 'Error: Operation Failed'
})

//Ejercicio 5

const callback1 = (value) => console.log('Esto es un texto:', value)
const callback2 = (value) => console.log('Esto es un numero:', value)

const myPromise = new Promise((resolve) => {
  setTimeout((callback1) => {
  
    resolve(2)
  }, 1000) 
})

myPromise.then(callback2) // log: Esto es un numero: 2



const callback1 = (value) => console.log('Esto es un texto:', value)
const callback2 = (value) => console.log('Esto es un numero:', value)

const myPromise = new Promise ((resolve) => {

  setTimeout((callback1) => {
    resolve(2)
  }, 2000)
})

myPromise.then(callback2)