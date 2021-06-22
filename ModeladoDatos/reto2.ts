/*

!Reto 2.
Queremos implementar un sistema de registro de eventos, para esto, necesitamos guardar una lista con  la información de las personas participantes del evento,  los datos mínimos por participante son: nombre completo, teléfono, correo. Cada evento cuenta con un nombre, precio, fecha y aforo máximo. Se desea guardar una lista con el historial de los eventos y que cada persona pueda ver los datos de los eventos a los que asistió y a los que piensa asistir en un futuro*/

class Persona {

    public nombreCompleto : string;
    public telefono : number;
    public correo : string;
    public eventosAsistidos:Evento[];
    public eventosFuturos:Evento[]

}

 class Evento {

    public nombre: string
    public precio : number
    public fecha : string
    public aforo : number
    public descripcion : string
    public estado : estados
    public asistentes: Persona[]
}

enum estados{

    en_proceso= 'En Proceso',
    Proximamente= 'Proximamente',
    Cancelado = 'Cancelado',
    Terminado= 'Terminado'
}

let historialEventos: Evento[]

let EventosFuturos:Evento[]
let EventosPersonas: Array<{persona: Persona, evento:Evento}>
