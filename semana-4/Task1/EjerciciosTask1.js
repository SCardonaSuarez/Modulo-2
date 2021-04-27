var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, correo, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.promedio = promedio;
    }
    return Alumno;
}());
var alumnos = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 },
];
/* *********Ejercicio1*********** */
// Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.
var alumDatos = (function (student) {
    var promedio = student.filter(function (prom) { return prom.promedio > 6; });
    return promedio;
});
console.log(alumDatos(alumnos));
/* *********Ejercicio2*********** */
// Devuelva una lisita de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
var studentAgePro = (function (student) {
    var ageProm = student.filter(function (proAge) { return proAge.edad > 19 && proAge.promedio < 6; });
    return ageProm;
});
console.log(studentAgePro(alumnos));
/* *********Ejercicio3*********** */
// Devuelva un arreglo ordenado segun el promedio de forma ascendente
var proAscendente = (function (student) {
    var listaAlum = __spreadArrays(student);
    // let listaAlum = Array.from(student);
    var stuAscend = listaAlum.sort(function (a, b) {
        return a.promedio - b.promedio;
    });
    return stuAscend;
});
console.log(proAscendente(alumnos));
/* *********Ejercicio4*********** */
// El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, devuelva un arreglo que cumpla con esta condición
var regaloNota = (function (student) {
    // const regalo = student.filter(nota => nota.promedio >= 4 ? (nota.promedio + 2) : 0)
    // return regalo
    var regalo = student.map(function (alumno) {
        /*         let sumaPro = {
                    ...alumno,
                    promedio: alumno.promedio <=4 ? alumno.promedio += 2 : alumno.promedio,
                
                }
                return sumaPro  */
        // return {
        //     ...alumno,
        //     promedio: alumno.promedio <=4 ? alumno.promedio += 2 : alumno.promedio,
        // }
        return {
            nombre: alumno.nombre,
            edad: alumno.edad,
            correo: alumno.correo,
            promedio: alumno.promedio <= 4 ? alumno.promedio += 2 : alumno.promedio
        };
    });
    return regalo;
});
console.log(regaloNota(alumnos));
/* *********Ejercicio5*********** */
// Devuelva el promedio general de todos los alumnos
var proGeneral = (function (student) {
    // const regalo =student.forEach(nota => nota.promedio)
    // return regalo
    var prom = student.reduce(function (total, value) { return total + value.promedio; }, 0);
    var total = (prom / 12).toFixed(1);
    return "El promedio general del grupo es de " + total;
});
console.log(proGeneral(alumnos));
