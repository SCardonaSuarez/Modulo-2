
// Ejercicio 1

export function even_or_odd(n:number):String {
    // ...
    
    if(n % 2 == 0){
      return 'Even'
    }
    else{
      return 'Odd'
    }
    
  }
  
  console.log(even_or_odd(6))


// Ejercicio 2

let numb = 74
let numbAux = numb % 10;

// console.log(numbAux)

if(numb < 4){
  
  console.log('El numero es: ', numb - numbAux)
  
}else{

   console.log((numb + 10) - numbAux)

}

//Ejercicio 3

export function runningPace(distance: number, time: string): string {
  let separar: string[] = time.split(":");
  // me separa los numeros["3", "15"] 0:"3" 1: "15"
  let tiempoSegundos: number = parseInt(separar[0]) * 60;
  //me devuelve el tiempo en segundos el indice 0 ejm 180
  let sumTiempoSegundos: number = (tiempoSegundos + parseInt(separar[1]));
  // suma los segundos ejemplo 195
  let division: number = sumTiempoSegundos / distance;
  // hace la division en segundos del tiempo
  let minutos: string[] = (division / 60).toFixed(2).toString().split(".");
  // me pasa de segundos a minutos, me pasa de numero a string y me cuenta solo 2 decimales
  //console.log(separar);
  let newMinutos: number = parseInt(minutos[1]);
  console.log(minutos[0] + ":" + Math.trunc(newMinutos * 0.6));
  //return minutos[0] + ":" +   Math.trunc(newMinutos * 0.6);
}

runningPace(1, "3:15");
runningPace(5, "25:00");
runningPace(15, "75:00");
runningPace(2.51, "10:43");
runningPace(4.99, "22:32");
runningPace(0.2, "0:38");
runningPace(42.195, "122:57");
