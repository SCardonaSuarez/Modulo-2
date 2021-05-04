
// Ejercicio1
// https://www.hackerrank.com/challenges/simple-array-sum/problem

/* function simpleArraySum(ar: number[]): number {
    return ar.reduce((a, b) => a + b);
  } */

  function simpleArraySum(ar: number[]): number {
    let accum = 0
    
  ar.forEach((numbers)=>{
    
    accum += numbers
    
  })
    return accum
  }
  
  console.log(simpleArraySum([1,2,3]))


//   Ejercicio2
  