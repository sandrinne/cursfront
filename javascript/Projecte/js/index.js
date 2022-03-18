//añadir un elemento al carrito
function buy(id) {
  // método 1
  //     console.table(products[id-1])

  //     cart.push(products[id-1])

  //     console.log("element afegit")
  // }

  //metodo 2

  //   productBuy = products.find(function (element) {
  //     if (element.id == id) return element;
  //   });
  //   cartList.push(productBuy);

  // metode 3
  productBuy = products.find((element) => element.id == id);
  cartList.push(productBuy);
}

// cleanCart()
// Ara implementarem una funció que permeti a l'usuari eliminar l’array generat en l'anterior:
// En aquest cas, hauràs d’escriure la funció cleanCart(),i reinicialitzar la variable cartList.

function cleanCart() {
  cartList.length = 0;
}

// subtotal()

// function sumarSubtotal() {
//   for (let i = 0; i < cartList.length; i++) {
//     if (cartList[i].type == "grocery") {
//       subtotal.grocery.value += cartList[i].price;
//     }
//     if (cartList[i].type == "beauty") {
//       subtotal.beauty.value += cartList[i].price;
//     }
//     if (cartList[i].type == "clothes") {
//       subtotal.clothes.value += cartList[i].price;
//     }
//   }
// }

//subtotal de forma dinámica
function sumarSubtotaldinamica() {
  for (const key in subtotal) {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].type == key) {
        subtotal[key].value += cartList[i].price;
      }
    }
  }
}

//calcular total de forma dinamica
function calculateTotal() {
  let sum = 0;
  for (const key in subtotal) {
    sum += subtotal[key].value;
  }
  return sum;
}

//removeFromCart()
// Encara no hem proporcionat una funcionalitat molt important a l'usuari: restar productes del
// carret. Has de completar la funció removeFromCart(), la qual rep l'id del producte per al qual
// es deu decrementar la seva quantitat en una unitat.
// Tingues en compte que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del
// carret, no passar la seva quantitat a 0.

// Ajuda: Ajuda: Garanteix que el teu codi no dóna error, si un producte que l'usuari vol
// decrementar la seva quantitat no està en el carret.
// function removeFromCart(id) {
//   for (let i = 0; i< cart.length; i++) {
//     id === cart[i].id ? cart.splice(i, 1) : false
//   }
//   return(cart)

// }

function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
      } else {
        cart.splice(i, 1);
      }
      return cart;
    }
  }
  return cart;
}
//getAllProducts()
// Fes una funció que mostri per pantalla ( o de moment per consola ) tots els productes.
function getAllProducts() {
  products.forEach((product) => {
    console.table(product);
  });
}
// getProductsFromCategory()
// Una altra funcionalitat necessària és mostrar productes segons una categoria
function getProductsFromCategory(type) {
  let aux = []
products.forEach(product => {
  if (product.type === type) {
    aux.push(product)    
  } 
});
return aux
}
  
