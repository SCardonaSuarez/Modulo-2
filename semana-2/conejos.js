/* - Dado una pista que comienza de 0 hasta 10, dos conejos y una zanahoria, decir que conejo llegaría primero a la zanahoria suponiendo que ambos conejos se mueven a la misma velocidad, si ambos llegan al mismo tiempo decir que es un empate, por ejemplo el conejo1 esta en la posición 1, el conejo2 en la posición 7 y la zanahoria en la posición 5, el ganador seria el conejo 2. */


// console.log(Math.round(Math.random() * 10))
/* 

let rabbit1 = Math.round(Math.random() * 10)
let rabbit2 = Math.round(Math.random() * 10)
let carrot = Math.round(Math.random() * 10)
console.log(rabbit1 + ' rabbit1')
console.log(rabbit2 + ' rabbit2')
console.log(carrot + ' carrot')


if(Math.abs(rabbit1 - carrot) === Math.abs(rabbit2 - carrot)){

    console.log(`there was a draw`)
}else if(Math.abs(rabbit1 - carrot) < Math.abs(rabbit2 - carrot) ){
    console.log(`Rabbit one won!!!`)
}else if(Math.abs(rabbit2 - carrot) < Math.abs(rabbit1 - carrot)) {
    console.log(`Rabbit two won!!`)
}


/* function generatingRabbitPositions(){
    return parseInt((Math.random() * 10) + 1);
}



function generatingCarrotPositions(){
    return parseInt((Math.random() * 10) + 1);
}

function raceTime(){

    let rabbit = generatingRabbitPositions();
    let rabbitNumber2 = generatingRabbitPositions();
    let carrot = generatingCarrotPositions();

    console.log(`Rabbit #1 position is ${rabbit}`);
    console.log(`Rabbit #2 position is ${rabbitNumber2}`);
    console.log(`Carrot position is ${carrot}`);

    console.log(`Distance between rabbit 1 & carrot is ${Math.abs(rabbit - carrot)}`);
    console.log(`Distance between rabbit 1 & carrot is ${Math.abs(rabbitNumber2 - carrot)}`);

    if(Math.abs(rabbit - carrot) < (Math.abs(rabbitNumber2 - carrot)) ){
        console.log("Rabbit 1 won");
    }else if(Math.abs(rabbit - carrot) > (Math.abs(rabbitNumber2 - carrot)) ){
        console.log("Rabbit 2 won");
    }else{
        console.log("It's a draw")
    }
}
raceTime(); */




/* 
let rabbit = Math.ceil(Math.random() * 10);
let rabbit2 = Math.ceil(Math.random() * 10);
let carrot = Math.ceil(Math.random() * 10);

let rabbit1Abs = Math.abs(rabbit - carrot);
let rabbit2Abs = Math.abs(rabbit2 - carrot);

console.log(rabbit, carrot, rabbit2);
console.log(rabbit1Abs, rabbit2Abs);

console.log(rabbit1Abs !== 0 && rabbit2Abs !== 0);

while (rabbit1Abs !== 0 && rabbit2Abs !== 0) {
  rabbit1Abs--;
  rabbit2Abs--;

  if (rabbit1Abs === 0) {
    console.log("Rabbit 1 won");
  } else if (rabbit2Abs === 0) {
    console.log("Rabbit 2 won");
  } else if (rabbit2Abs === 0 && rabbit1Abs === 0) {
    console.log("RAW");
  }
}
 */


 









































/*- Dado un empleado que tiene nombre y sueldo, calcular su sueldo neto (sueldo después de impuestos), deduciendo el 4% por salud y el 3% por pensión, si el sueldo el mayor a 6 millones deducirle el 3% de retención en la fuente, si esta entre 5 millones y menos de 6 millones deducir 2% de otra forma solo deducir 1.5% adicionales */


sueldo = parseInt(prompt('Digite el sueldo del empleado: '));

salud = sueldo*0.04;
pension = sueldo*0.03;
suelNeto = sueldo - (salud - pension)


console.log(suelNeto);

if(sueldo >= 6000000){

    impuesto = suelNeto*0.03;
    sueldoBruto = suelNeto - impuesto;


    console.log(`1.Sueldo del empleado: $${sueldo}, el sueldo neto es de: $${suelNeto} y el total bruto es de $${sueldoBruto}`)

}else if(sueldo >=5000000 && sueldo <6000000){

    impuesto = suelNeto*0.02;
    sueldoBruto = suelNeto - impuesto;
    
    console.log(`1.Sueldo del empleado: $${sueldo}, el sueldo neto es de: $${suelNeto} y el total bruto es de $${sueldoBruto}`)

}else if(sueldo < 5000000){

    impuesto = suelNeto*0.015;
    sueldoBruto = suelNeto - impuesto;

    console.log(`1.Sueldo del empleado: $${sueldo}, el sueldo neto es de: $${suelNeto} y el total bruto es de $${sueldoBruto}`)

}



 