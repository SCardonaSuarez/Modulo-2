/* Dado una lista de personas que tienen nombre, ingreso mensual y una cantidad de inversión mensual, mostrar las personas  que tengan después de impuestos(deducciones de 8%) un ingreso de más de 3.600.000 y además mostrar cuanto tendrían después de 40 años en sus inversiones con una rentabilidad anual de 10%. */
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var personas = [
    {
        nombre: 'Derlys',
        ingresoMensual: 3800000,
        ganancia: 0,
        inversionMensual: 300000
    },
    {
        nombre: 'Vero',
        ingresoMensual: 6300000,
        ganancia: 0,
        inversionMensual: 500000
    }
];
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var person = personas_1[_i];
    var deducciones = person.ingresoMensual * 0.08;
    var neto = person.ingresoMensual - deducciones;
    if (neto >= 3600000) {
        console.log("La perosna " + person.nombre + " tiene un ingreso neto de " + neto);
    }
    var gananciaInicialAnual = person.ganancia;
    for (var i = 0; i <= 40; i++) {
        var inversionAnual = person.inversionMensual * 12;
        var ganaciaAnual = (gananciaInicialAnual + inversionAnual) * 0.1;
        gananciaInicialAnual = gananciaInicialAnual + inversionAnual + ganaciaAnual;
    }
    console.log(gananciaInicialAnual);
}
