const welcome = alert(`Bienvenido a la tienda de "Terra Atelier"
---------------------------------------------
Presione aceptar para continuar`);

const menu = parseInt(
  prompt(`Elija una opción ingresando el número que corresponda
            
            1 - Productos
            2 - Mi carrito
            3 - Info
            4 - Salir`)
);

if (menu !== 1 || 2 || 3 || 4) {
  alert("Por favor ingrese una opción válida");
} else if (menu == 1) {
  const products = parseInt(
    prompt(`Elija uno o varios productos de la siguiente lista. Terminada la compra dirijase al carrito ingresando la opción "4"
              
              1 - Potus
              2 - Suculentas
              3 - Cactus
              4 - Mi carrito de compras`)
  );
} else if (menu == 2) {
  const myCart = alert(
    `Estos son los productos que seleccionaste, presione aceptar para seleccionar el método de pago:`
  );
} else if (menu == 3) {
  const info = alert(
    `¿Sabias que abonando en efectivo tenés un 10% de descuento sobre el valor total de tu compra?
                ---------------------------------------------
                Presioná aceptar para volver al menú anterior
                    `
  );
} else {
  alert(`¡Gracias por tu visita!`);
}

const paymentMethod = parseInt(
  prompt(`Seleccione un método de pago:
1 - Efectivo
2 - Tarjeta de débito`)
);

const TotalCash = alert(`El total a pagar en efectivo es:`);

const TotalCard = alert(`El total a pagar con tarjeta es:`);