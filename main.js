/*
ingresar un valor que a futuro vendra de un boton de compra de una tienda virtual
es cliente ?
si es cliente que ingrese nombre y clave
si no dar opcion de continuar como invitado o salir
si es invitado ingresar nombre 
mostrar total 
dar opciones de pago hasta 3 cuotas sin interes
si elige cuotas mostrar montos mensuales
()
*/

function TotalCuotificado(monto, Cuota) {
    let resultado = monto / Cuota;
    return resultado;
}

//para cargar persona cuando valide el usuario mas adelante
let infoPersona = {
    nombre: "Coder",
    apellido: "House",
    edad: 1,
    domicilioE: "CasaE",
    domicilioF: "CasaF",
    CodPostal: 1211,
    email: "email@coder.com.ar",
    frecuente: true,
};

class PersonaBuilder {
    constructor(infoPersona) {
        this.nombre = infoPersona.nombre;
        this.apellido = infoPersona.apellido;
        this.edad = infoPersona.edad;
        this.domicilioE = infoPersona.domicilioE;
        this.domicilioF = infoPersona.domicilioF;
        this.CodPostal = infoPersona.CodPostal;
        this.email = infoPersona.email;
        this.frecuente = infoPersona.frecuente;
    }
};

const Persona1 = new PersonaBuilder(infoPersona);
const Persona2 = new PersonaBuilder(infoPersona);
const Persona3 = new PersonaBuilder(infoPersona);

//generador de Productos
function Producto(idProducto, nombreProducto, monedaProducto, precioProducto, detalleProducto, stockProducto) {
    this.id = idProducto;
    this.nombre = nombreProducto;
    this.moneda = monedaProducto;
    this.precio = precioProducto;
    this.detalle = detalleProducto;
    this.stock = stockProducto;
};

//cargo utilizando funcion
const Producto1 = new Producto(1, "Producto 1", "$ Arg", 1100, "Descripcion basica del producto", true);
const Producto2 = new Producto(1, "Producto 2", "$ Arg", 2200, "Descripcion basica del producto", true);

//cargo a mano solo para ejemplo
const Producto3 = {
    id: 1,
    nombre: "Producto 3",
    moneda: "$ Arg",
    precio: 3300,
    detalle: "Descripcion basica del producto",
    stock: true,
};

//carga del arrayProductos - hacer automatica la carga mas adelante 
const arrayProductos = [];
arrayProductos.push(Producto1)
arrayProductos.push(Producto2)
arrayProductos.push(Producto3)

//chequeo si funciona
/*for (const item of arrayProductos){
alert(item.precio);
}*/

//traigo el form del html
const FormCompra = document.getElementById('FormCompra');

FormCompra.addEventListener('submit', (event) => {
    event.preventDefault();
    montoTotal = 0;

    // cambiar por un for para optimizar
    if (FormCompra.elements['0'].checked) {
        montoTotal = montoTotal + arrayProductos[0].precio;
    };

    if (FormCompra.elements['1'].checked) {
        montoTotal = montoTotal + arrayProductos[1].precio;
    };

    if (FormCompra.elements['2'].checked) {
        montoTotal = montoTotal + arrayProductos[2].precio;
    };

    let clienteRegistrado = prompt('Es usted cliente?: (Si/No)');
if (clienteRegistrado.toLowerCase() === "si") { //si es cliente
    let nombreUsuario = prompt('Ingrese su nombre de usuario:');
    if (nombreUsuario === "") {
        alert('USUARIO INEXISTENTE o VACIO.');
        location.reload();
    }
    else {
        let claveUsuario = prompt('Ingrese su clave de usuario: (Solo numeros)');
        if (claveUsuario === "") {
            alert('LA CLAVE NO DEBE SER VACIA.');
            location.reload();
        }
        else {
            alert('Bienvenido ' + nombreUsuario + '\nUd esta por comprar los productos seleccionados, por un monto de $' + montoTotal);
            let MedioPago = prompt('Como desea abonar?: \n 1-Tarjeta \n 2-Transferencia');

            if (MedioPago == "1") {
                let Cuotas = prompt('Desea abonar en 1 o 3 cuotas?');
                if (Cuotas == "1") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s');
                }
                else if (Cuotas == "3") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s de $' + TotalCuotificado(montoTotal, Cuotas));
                }
                else {
                    alert(Cuotas + ' no es un numero de cuotas disponible por el momento.');
                }
            }
            else if (MedioPago === "2") {
                alert('Usted abonara $' + montoTotal + ' mediante Transferencia en 1 pago.');
            } else {
            }
        }
    }
}
else {   // si no es cliente
    let clienteInvitado = prompt('Desea continuar como invitado?: (Si/No) ');
    if (clienteInvitado.toLowerCase() === "si") {
        alert('Ud ingreso como Invitado');
        alert('Ud esta por comprar los productos seleccionados, por un monto de $' + montoTotal);
        let MedioPago = prompt('Como desea abonar?: \n 1-Tarjeta \n 2-Transferencia');

        if (MedioPago == "1") {
            let Cuotas = prompt('Desea abonar en 1 o 3 cuotas?');
            if (Cuotas == "1") {
                alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s');
            }
            else if (Cuotas == "3") {
                alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s de $' + TotalCuotificado(montoTotal, Cuotas));
            }
            else {
                alert(Cuotas + ' no es un numero de cuotas disponible por el momento.');
            }
        }
        else if (MedioPago === "2") {
            alert('Usted abonara $' + montoTotal + ' mediante Transferencia en 1 pago.');
        } else {
        }

    }
    else {
        alert('Hasta luego');
        location.reload();
    }
}


});

// Proximamente
// genero array de compras ()
// const arrayCompras = [];
// leo los ids que trae y los cargo en un array
// busco esos id en el array de arrayProductos
// saco los valores de los Productos y los sumo
// asigno el valor final a montoTotal

