/*
es cliente ?
si es cliente que ingrese nombre y clave
si no dar opcion de continuar como invitado o salir
si es invitado ingresar nombre 
mostrar productos y elegir numericamente
mostrar total 
dar opciones de pago hasta 3 sin interes
si son cuotas mostrar montos mensuales
()
*/

let montoTotal = 10000 //entra por parametro de un carrito de compras

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
            alert('Bienvenido ' + nombreUsuario);
            alert('Ud esta por comprar los productos seleccionados, por un monto de $' + montoTotal);
            let MedioPago = prompt('Como desea abonar?: 1-Tarjeta, 2-Transferencia');

            if (MedioPago == "1") {
                let Cuotas = prompt('Desea abonar en 1 o 3 cuotas?');
                if (Cuotas == "1") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s');
                } else if (Cuotas == "3") {
                    alert('Usted abonara $' + montoTotal + ' en ' + Cuotas + ' cuota/s de $' + montoTotal / Cuotas);
                } else { alert(Cuotas + ' no es un numero de cuotas disponible por el momento.'); }
            }

            else if (MedioPago === "2") { alert('Usted abonara $' + montoTotal + ' mediante Transferencia en 1 pago.'); } else { }
        }
    }
}
else {   // si no es cliente
    let clienteInvitado = prompt('Desea continuar como invitado?: (Si/No) ');
    if (clienteInvitado.toLowerCase() === "si") {
        alert('Ud ingreso como Invitado');
    } else { location.reload(); }
}
