// /* ARRAY VACIO PARA EL CARRITO*/

// let cart = [];

// /* DECLARACION DE FUNCION PARA CANTIDADES */
// function productOption(price, productName) {
//   /* PROMPT DE CANTIDADES*/
//   const units = Number(prompt("¿Cuantos desea llevar?"));
//   const total = price * units;

//   cart.push({ productName, units, price });
// }

// /* DECLARACION DE FUNCION PARA EL CARRITO */
// function myCart() {
//   const decision = parseInt(
//     prompt(`Estos son los productos que seleccionaste:\n\n${cartItems()}

//   1 para finalizar la compra
//   2 para agregar mas productos
//   3 para vaciar el carrito`)
//   );

//   switch (decision) {
//     case 1:
//       finishShop();
//       break;
//     case 2:
//       addProducts();
//       break;
//     case 3:
//       deleteProducts();
//       break;

//     default:
//       alert("ingrese una opción válida");
//       myCart();
//       break;
//   }
// }

// /* DECLARACION DE FUNCION PARA SUMAR PRODUCTOS AL CARRITO */
// function cartItems() {
//   let allItems = "";
//   for (let i = 0; i < cart.length; i++) {
//     const product = cart[i];
//     const productName = product.productName;
//     const units = product.units;
//     const subtotal = product.price * product.units;
//     const textItems = `Cant. ${units} ${productName}: $${subtotal} \n`;
//     allItems = allItems + textItems;
//   }
//   return allItems;
// }

// /* DECLARACION DE FUNCION PARA FINALIZAR COMPRA */
// function finishShop() {
//   /* MEDIO DE PAGO*/
//   success = Number(
//     prompt(`¿Cómo desea abonar?
// 1 = Efectivo
// 2 = Tarjeta de crédito`)
//   );
//   if (success == 1) {
//     alert(
//       "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
//     );
//     alert("¡Gracias por tu compra!");
//   } else if (success == 2) {
//     creditCard = Number(prompt(`Ingrese los datos de su tarjeta de crédito`));
//     alert(
//       "¡Listo! Tu orden se generó con exito, en 24hs hábiles tu producto ya estará listo para retirar"
//     );
//     alert("¡Gracias por tu compra!");
//   } else {
//     alert("Por favor ingresá una opción válida");
//   }
// }

// /* DECLARACION DE FUNCION PARA VACIAR CARRITO */
// function deleteProducts() {
//   cart = [];
//   myCart();
// }

// /* DECLARACION DE FUNCION DEL MENU PRINCIPAL */
// function addProducts() {
//   /* LISTA DE PRODUCTOS */
//   let products = Number(
//     prompt(`Elegí el producto que quieras comprar ingresando el número que corresponda

//     --------------------------

//     1 - Potus - $750
//     2 - Suculentas - $600
//     3 - Cactus - $500`)
//   );

//   /* SWITCH DE OPCIONES */

//   switch (products) {
//     /* SI ELEGIS POTUS */
//     case 1:
//       productOption(750, "potus");
//       break;

//     /* SI ELEGIS SUCULENTAS */
//     case 2:
//       productOption(600, "suculentas");
//       break;

//     /* SI ELEGIS CACTUS */
//     case 3:
//       productOption(500, "cactus");
//       break;

//     /* SI LA OPCION INGRESADA NO ES VÁLIDA */
//     default:
//       alert("Ingrese una opción válida");
//       addProducts();
//       return;
//   }
//   myCart();
// }

// /* FUNCION INVOCADA*/
// addProducts();

/* DOM */

class Product {
  constructor(id, img, name, price) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;  
  }
}

let dataBase = [];
dataBase.push(new Product(0, "img/pinoLimon.jpg", "Pino", 890));
dataBase.push(new Product(1, "img/photus.jpg", "Potus", 1100));
dataBase.push(new Product(2, "img/helecho.jpg", "Helecho", 500));
dataBase.push(new Product(3, "img/cactus.jpg", "Cactus", 3500));
dataBase.push(new Product(4, "img/suculenta.jpg", "Suculenta", 2000));
dataBase.push(new Product(5, "img/jazmin.jpg", "Jazmin", 2400));
dataBase.push(new Product(6, "img/orquidea.jpg", "Orquidea", 6500));
dataBase.push(new Product(7, "img/lavanda.jpg", "Lavanda", 190));
dataBase.push(new Product(8, "img/kalanchoe.jpg", "Kalanchoe", 590));
dataBase.push(new Product(9, "img/ficus.jpg", "Ficus", 4200));
dataBase.push(new Product(10, "img/corteza.jpg", "Corteza de pino", 300));
dataBase.push(new Product(11, "img/pometina.jpg", "Pometina", 300));
dataBase.push(new Product(12, "img/humus.jpg", "Humus de lombriz", 210));
dataBase.push(new Product(13, "img/sustrato.jpg", "Sustrato para huerta", 420));
dataBase.push(new Product(14, "img/macetaPlastico.jpg", "Maceta de plástico", 260));
dataBase.push(new Product(15, "img/macetaTerracota.jpg", "Maceta de terracota", 150));

let section = document.querySelector(".grid__cart");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");

dataBase.forEach((Product) => {
  let cardClon = card.cloneNode(true);
  section.appendChild(cardClon);
  cardClon.children[0].src = Product.img;
  cardClon.children[1].innerText = Product.name;
  cardClon.children[2].innerText = Product.price;
});
