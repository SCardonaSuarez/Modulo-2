//Ejericici 1

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 500)
  })
  
  myPromise
    .then((result) => {
      return 'This is a ' + result
    })
    .then((result) => {
      console.log(result)
    })
  
  
  // async function promise () {
  //   const thePromise = await myPromise
  // }
  
  const promise = async ()=> {
  
    const thePromise = await myPromise
    console.log(thePromise)
  }

  //Ejercicio 2

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(1)
      } else {
        reject('An error has occurred')
      }
    }, 500)
  })
  
  myPromise
    .then((result:number) => {
      return result + 1
    })
    .then((result) => {
     console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  
  async function thePromise (){
  
    try{
      const  result = await myPromise 
    }catch(err){
      console.log(err.message)
    }
  }



