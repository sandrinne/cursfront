//añadir un elemento al carrito
function buy(id) {
    console.table(products[id-1])
   
    cart.push(products[id-1])

    console.log(cart)
}