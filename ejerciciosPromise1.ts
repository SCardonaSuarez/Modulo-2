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

  