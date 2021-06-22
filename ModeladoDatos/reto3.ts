/*
!Reto 3.

D2 requiere un registro de inventario básico, para ello necesita saber la lista de productos existentes en su  almacén principal, cada producto debe tener asignados los siguientes atributos: Nombre, fecha de vencimiento, precio, peso, uuid, distribuidor, cantidad.Se cuenta también con los datos de los distribuidores entre ellos: nombre, teléfono, productos que ofrece. Además, D2 requiere las siguientes listas: productos en almacén, productos por solicitar a distribuidor y lista de distribuidores*/

class producto {

    public nombre : string;
    public fechaVencimiento : string;
    public precio : number;
    public peso : number;
    public uuid : string;
    public distribuidor : Distribuidor;
    public cantidad : number;   
}

class Distribuidor {

    public nombre : string;
    public telefono : number;
    public productos : producto[];
}

let productosAlmacenprincipal: producto[];
let productosSolicitar: producto[];
let productoAlmacen: producto[];
let distribuidores: Distribuidor[];