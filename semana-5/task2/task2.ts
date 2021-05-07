/* **************Ejercicio 1************** */


// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
//     let newGeese = [...geese]
  
//     return birds.filter((black)=> !newGeese.includes(black))
  
  
//   };




/* **************Ejercicio 2************** */


// export class Kata {
//     static highAndLow(numbers: string) {
//       // throw new NotImplementedException() ?
//       // No, wait, this is TypeScript.
//           let numbArr:number[] = numbers.split(' ')
//       .map(item => parseInt(item))
  
  
//       let numberX = Math.max.apply(0,numbArr)+ " " + Math.min.apply(0,numbArr)
//       return numberX
  
//     }
//   }

/* **************Ejercicio 3************** */


// export class Kata {
//     static getCount(str: string) {
//       // your code here
      
//       let vocales = str.match(/(a|e|i|o|u)/g)
      
//       return vocales === null ? 0 : vocales.length
//     }
//   }

/* **************Ejercicio 4************** */


// export class Kata {
//     static disemvowel(str: string) {
//           return str.split('').map((x) => x.replace(/a|e|i|o|u/gi, '')).join('');
//     }
//   }


/* **************Ejercicio 6************** */


// function solution(value){
//     //...
//       return "Value is " + ("00000" + value).slice(-5);
// }



/* **************Ejercicio 7************** */


// function plant(seed, water, fert, temp){
//     //your code here
//       let steam = "-"
//      let container= "";
//      if (temp >= 20 && temp <= 30){
//        for(let i = 0; i < water; i++){
//          container += steam.repeat(water).concat(seed.repeat(fert))
//        }
//      }else{
//        for(let i = 0; i < water; i++){
//          container += steam.repeat(water)
//        }
//        container = container.concat(seed)
//      }
//      return container
// }
