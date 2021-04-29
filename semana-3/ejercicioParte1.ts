//Ejercicio 1
const myPromise =  new Promise((res, rej) => {
    setTimeout(() => {
      res('Success')
    }, 850)
  })
  
  async function getResult() {
    const result = await myPromise
    
    console.log('Result:', result) // log: 'Result: Success'
  }
  
  getResult()


//Ejercicio 2

const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
      success(1)
    }, 1000)
  })
  
  async function getResult() {
    const result = await myPromise
   
    const result2 = result + 2
  
    console.log('Result:', result2) // log: 'Result: 3'
  }
  
  getResult()

//Ejercicio 3

const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
      success(1)
    }, 1000)
  })
  
  async function getResult() {
    const result = await myPromise
   
    const result2 = result + 2
  
    return result2
  }
  
  getResult().then((result) => {
    console.log('Result:', result) // log: 'Result: 3'
  })

//Ejercicio 4

const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
      reject('error!')
    }, 1000)
  })
  
  async function getResult() {
    try {
      const result = await myPromise 
      console.log(result)
    } catch(err) {
      console.error(err)
    }
  }
  
  getResult()
  