
/* ***********Ejercicio 1*********** */

let estudiantes = [
    {nombre: 'Santiago', edad: 27, nota:[(3.4 + 3.6 + 4.6)]},
    {nombre: 'Sara', edad: 24, nota:[(2.4 + 3.5 + 1.4)]},
    {nombre: 'Andres', edad: 50, nota:[(3.4 + 3.1+ 3.7)]},
    {nombre: 'Juliana', edad: 39, nota:[3.7 + 4.1 + 3.8]},
    {nombre: 'Leonardo', edad: 18, nota:[(2.4 + 3.0 + 2.9)]}

]

for(let e = 0; e <estudiantes.length; e++){
    
    let definitita = estudiantes[e].nota/3
    
    if(definitita >= 3.0){
        
        console.log(`El estudiante ${estudiantes[e].nombre} pasa`)
    }

}


console.log('--------------------------------------------')


/* ***********Ejercicio 2*********** */



for(let n = 1; n < 20; n++){

    if(n % 5 == 0){
        console.log(`El numero ${n} es multiplo de 5`)
        break;

    }else if( n % 2 == 1){
        console.log(`El numero ${n} es impar`)
    }
}


console.log('--------------------------------------------')


/* ***********Ejercicio 3*********** */


let flag = true

while(flag){
    
   let number = Math.round(Math.random() * (1 - 10 ) + 10);

   if(number=== 6){

       flag === false;
       console.log(`Se encontro el numero ${number}`)
       break

    }else{
       console.log(`El numero es: ${number}`)
   }

}


estudiantes.forEach((valor, inice)=>{
    
})