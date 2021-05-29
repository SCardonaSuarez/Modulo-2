/* Define una función que reciba como parámetro cualquiera de las siguientes clases de eventos("concierto", "obra de teatro", "Evento deportivo") y devuelva la locación para este evento
concierto → teatro
obra de teatro → Foro
Evento deportivo → Coliseo */


type Evento = {
    concierto: string;
    obraTeatro: string;
    eventoDep:string;
}


function tipoEventos(even: Evento){
    
    console.log(`El concierto sera en el: ${even.concierto}`);
    console.log(`La obra de teatro sera en un: ${even.obraTeatro}`);
    console.log(`El evento deportivo sera en un: ${even.eventoDep}`);

}

tipoEventos({concierto: 'Teatro', obraTeatro: 'Foro', eventoDep:'Coliseo'})





/* En un avión hay tres clases de boletos:

Boletos de primera clase
Boletos clase económica
Boletos a base de puntos

Todos los boletos tienen origen, destino, precio y asientos
Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar
Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo
Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características */



type Viaje = 
{bolet:'Primera clase'; origen: string; destino:string; precio:number; asiento: string} | {bolet:'Economica'; origen: string; destino:string; precio:number; asiento: string} | {bolet:'Puntos'; origen: string; destino:string; precio:number; asiento: string}



const tipoBoleta=(ticket: Viaje): void =>{


    switch(ticket.bolet){
        case'Primera clase':

        const orig = ticket.origen = 'Toronto'
        const dest = ticket.destino = 'Medellin'
        const prec = ticket.precio = 400
        const asiento = ticket.asiento = 'E1'

        console.log(`El pasajero tiene derecho a una maleta de 50 kg de origen ${orig} al destino ${dest} en el asiento ${asiento} y un precio de: ${prec}, tiene privilegio de menu preferencial, snack y bebidas ilimitadas`);
        break;

        case'Economica':

        const origEco = ticket.origen = 'Londres'
        const destEco = ticket.destino = 'Buenos Aires'
        const precEco = ticket.precio = 500
        const asientoEco = ticket.asiento = 'I3'

        console.log(`El pasajero tiene derecho a una maleta de 50 kg de origen ${origEco} al destino ${destEco} en el asiento ${asientoEco} y un precio de: ${precEco}, puede tomar las bebida ilimitadas`);
        break;

        case'Puntos':

        const origenPunt = ticket.origen = 'Tokio'
        const destinoPunt = ticket.destino = 'Bogota'
        const precioPunt = ticket.precio = 560
        const asientoPunt = ticket.asiento = 'B4'

        console.log(`El pasajero tiene derecho a una maleta de 50 kg de origen ${origenPunt} al destino ${destinoPunt} en el asiento ${asientoPunt} y un precio de: ${precioPunt}, puede tomar las bebida ilimitadas`);
        break;

        default:
            console.log('Escriba bien el tipo de Boleta');
            
    }

}





