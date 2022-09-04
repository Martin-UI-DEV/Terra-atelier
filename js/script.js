/* CALCULO DE TOTALES */
let total = 0;
function finalPrice(price, units) {
  total = price * units;
  return total;
}

/* DECLARACION DE FUNCION DEL MENU PRINCIPAL */
function mainMenu() {
  let units = 0;
  let price = 0;
  let success = "";
  let creditCard = 0;
  /* LISTA DE PRODUCTOS */
  let products = Number(
    prompt(`Elegí el producto que quieras comprar ingresando el número que corresponda

    --------------------------
    
    1 - Potus - $750
    2 - Suculentas - $600
    3 - Cactus - $500`)
  );

  /* SWITCH DE OPCIONES */

  switch (products) {
    /* SI ELEGIS POTUS */
    case 1:
      alert(
        "Recordá que si tu compra supera los $2000 tenés un 10% de descuento"
      );
      /* PROMPT DE CANTIDADES*/
      units = Number(prompt("¿Cuantos desea llevar?"));
      price = 750;
      total = finalPrice(price, units);

      /* CONDICIONAL PARA EL DESCUENTO */
      discount = total - total * 0.1;
      if (total >= 2000) {
        alert(
          `El total a pagar es de $${total} pero con el descuento por cantidad vas a pagar $${discount}`
        );
      } else {
        alert(`El total a pagar es: $${total}`);
      }
      /* MEDIO DE PAGO*/
      success = Number(
        prompt(`¿Cómo desea abonar? 
      1 = Efectivo
      2 = Tarjeta de crédito`)
      );
      if (success == 1) {
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else if (success == 2) {
        creditCard = Number(
          prompt(`Ingrese los datos de su tarjeta de crédito`)
        );
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else {
        alert("Por favor ingresá una opción válida");
      }
      break;

    /* SI ELEGIS SUCULENTAS */
    case 2:
      alert(
        "Recordá que si tu compra supera los $2000 tenés un 10% de descuento"
      );
      /* PROMPT DE CANTIDADES*/
      units = Number(prompt("Cuantas desea llevar?"));
      price = 600;
      total = finalPrice(price, units);

      /* CONDICIONAL PARA EL DESCUENTO */
      discount = total - total * 0.1;
      if (total >= 2000) {
        alert(
          `El total a pagar es de $${total} pero con el descuento por cantidad vas a pagar $${discount}`
        );
      } else {
        alert(`El total a pagar es: $${total}`);
      }
      /* MEDIO DE PAGO*/
      success = Number(
        prompt(`¿Cómo desea abonar? 
      1 = Efectivo
      2 = Tarjeta de crédito`)
      );
      if (success == 1) {
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else if (success == 2) {
        creditCard = Number(
          prompt(`Ingrese los datos de su tarjeta de crédito`)
        );
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else {
        alert("Por favor ingresá una opción válida");
      }
      break;

    /* SI ELEGIS CACTUS */
    case 3:
      alert(
        "Recordá que si tu compra supera los $2000 tenés un 10% de descuento"
      );
      /* PROMPT DE CANTIDADES*/
      units = Number(prompt("¿Cuantos desea llevar?"));
      price = 500;
      total = finalPrice(price, units);

      /* CONDICIONAL PARA EL DESCUENTO */
      discount = total - total * 0.1;
      if (total >= 2000) {
        alert(
          `El total a pagar es de $${total} pero con el descuento por cantidad vas a pagar $${discount}`
        );
      } else {
        alert(`El total a pagar es: $${total}`);
      }
      /* MEDIO DE PAGO*/
      success = Number(
        prompt(`¿Cómo desea abonar? 
      1 = Efectivo
      2 = Tarjeta de crédito`)
      );
      if (success == 1) {
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else if (success == 2) {
        creditCard = Number(
          prompt(`Ingrese los datos de su tarjeta de crédito`)
        );
        alert(
          "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
        );
        alert("¡Gracias por tu compra!");
      } else {
        alert("Por favor ingresá una opción válida");
      }
      break;
  }
}

/* FUNCION INVOCADA*/
mainMenu();
