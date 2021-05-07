/* ----------Ejercicio1-------------- */

//  function quarterOf(month: number): number {

//   if(month >=1 && month<=3){
//     return 1
//   }else if(month >= 4 && month <= 6){
//     return 2
//   }else if(month >=7 && month <=9){
//     return 3
//   }else {
//     return 4
//   } 
// }
// console.log(quarterOf(12))


/* ----------Ejercicio2-------------- */

// export const boolToWord = (bool: boolean): string => {
  
//   if(bool){
//     return 'Yes'
//   }else{
//     return 'NO'
//   }
// };

// console.log(boolToWord(false))


/* ----------Ejercicio3------------- */

// export function abbrevName(name: string): string {


//   // let caracter = name.charAt(0) + '.' + name.charAt(name.indexOf(' ')+1)

//   // let caracter = name.charAt(0).concat('.').concat(name.indexOf())

//   return name.charAt(0).concat(".").concat(name.charAt(name.indexOf(" ") + 1)).toLocaleUpperCase();

// }

// console.log(abbrevName('Robertito Perez'))


/* ----------Ejercicio4-------------- */

// function updateLight(current) {
  
//   if(current === 'green'){
//     return 'yellow'
//   }else if(current === 'yellow'){
//     return 'red'
//   }else if(current === 'red'){
//     return 'green'
//   }


// }

/* ----------Ejercicio5-------------- */

// export function DNAtoRNA(dna: string): string {
  
// //   let change=dna.replaceAll('T', 'U')

// //   return change; 
// // 

//   let change = dna.replace(/T/g, 'U')
//   return change
// }

// console.log(DNAtoRNA('CATG'))