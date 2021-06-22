/*
!RETO 1 
Para un sistema de gestión de tareas, deseamos registrar todas las tareas, cada tarea tiene asociada la siguiente información: nombre, fecha de inicio, descripción y estatus, el estatus debe ser uno de los siguientes: pendiente, en proceso, terminada, cancelada. Además se requiere una lista con todas las tareas pendientes, las tareas terminadas y las canceladas*/

class Tarea {

    public nombre: string
    public fechaDeInicio: string
    public fechaCulminacion: string
    public status:string

}

enum estatus {

    pendiente = 'Pendiente',
    en_proceso = 'En Proceso',
    terminada = 'Terminada',
    cancelada = 'Cancelada',

}

let TareasPendientes: Tarea[]

let TareasTerminadas: Tarea[]

let TareasCanceladas: Tarea[]