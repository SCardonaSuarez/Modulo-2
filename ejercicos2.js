//Ejercicio 1

const myPromise = Promise.then(1)
myPromise.then((value) => {
  console.log(value) // log: 1
}) 

//Ejercicio 2


const myPromise = new Promise((resolve) => {
  resolve(value)  
})

//Ejercicio 3


myPromise.resolve((value) => {
 console.log(value + 1)  // log: 2
})

//Ejercicio 4

const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise
  .resolve((value) => {
    return value + 2
  })
  .resolve((value) => {
   console.log(value + ???) // log: 4
  })


//Ejercicio 5

  const myPromise = new Promise((err, catch) => {
    err('Error: Operation Failed')  
  })
  
  myPromise
    .catch((err) => {
     console.log(err) // log: 'Error: Operation Failed'
    })

    const myPromise = new Promise((err, catch) => {
      err('Error: Operation Failed')  
    })
    
    myPromise
      .catch((err) => {
       console.log(err) // log: 'Error: Operation Failed'
      })