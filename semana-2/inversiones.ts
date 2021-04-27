/* Dado una lista de personas que tienen nombre, ingreso mensual y una cantidad de inversión mensual, mostrar las personas  que tengan después de impuestos(deducciones de 8%) un ingreso de más de 3.600.000 y además mostrar cuanto tendrían después de 40 años en sus inversiones con una rentabilidad anual de 10%. */

class Persona {
    nombre:string;
    ingresoMensual: number;
    inversionMensual: number;
    ganancia: number;
}

const personas: Persona[] = [

    {
        nombre: 'Derlys',
        ingresoMensual: 3800000,
        ganancia: 0,
        inversionMensual: 300000,
    },

    {
        nombre: 'Vero',
        ingresoMensual: 6300000,
        ganancia: 0,
        inversionMensual: 500000,
    }

];

for(let person of personas){
   let deducciones = person.ingresoMensual *0.08;
   let neto = person.ingresoMensual - deducciones;

   if(neto >= 3600000){
       console.log(`La perosna ${person.nombre} tiene un ingreso neto de ${neto}`)
   }


   let gananciaInicialAnual = person.ganancia;
   for (let i = 0; i <= 40; i++){
       
       let inversionAnual = person.inversionMensual * 12;
       let ganaciaAnual = (gananciaInicialAnual + inversionAnual)*0.1;

       gananciaInicialAnual = gananciaInicialAnual + inversionAnual + ganaciaAnual;
   }

   console.log(gananciaInicialAnual);
}
