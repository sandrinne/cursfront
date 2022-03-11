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

function sumarSubtotal() {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].type == "grocery") {
      subtotal.grocery.value += cartList[i].price;
    }
    if (cartList[i].type == "beauty") {
      subtotal.beauty.value += cartList[i].price;
    }
    if (cartList[i].type == "clothes") {
      subtotal.clothes.value += cartList[i].price;
    }
  }
}

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
