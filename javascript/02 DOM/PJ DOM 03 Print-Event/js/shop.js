// Ara, anem a printar el carrito

const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const templateCarrito = document.getElementById('template-carrito').content


document.addEventListener('DOMContentLoaded', () => {
    pintarCardsProducts(products);
});


//FEM CLICK A CARDS
const cards = document.getElementById('cards')
cards.addEventListener('click', e => {

    if (e.target.classList.contains('cardAdd')) {
        addCarrito(e.target.id);
        //setCarrito(e.target.parentElement)
    }
    if (e.target.classList.contains('cardRemove')) {
        removeFromCart(e.target.id);
    }

    e.stopPropagation()
});







// Pintar tots els productes
function pintarCardsProducts(listProducts) {

    listProducts.forEach(item => {
        templateCard.querySelector('.cardAdd').setAttribute('id', item.id)
        templateCard.querySelector('.cardRemove').setAttribute('id', item.id)
        templateCard.querySelector('img').setAttribute('src', item.img);
        templateCard.querySelector('h5').textContent = item.name
        templateCard.querySelector('p').textContent = item.price
        templateCard.querySelector('h6').textContent = item.type
        const clone = templateCard.cloneNode(true)
        // se guarda en memoria, de momento no se printa
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

function calculateSubtotals() {
    // 1. Create a for loop on the "cart" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    // calculem els subtotals depenent del tipus de compra
    tipus = Object.keys(subtotal);
    for (var i = 0; i < cart.length; i++) {
        tipus.forEach(element => {
            if (cart[i].type == element) {
                total2 = subtotal[element].value + cart[i].price;
                subtotal[element].value = parseFloat(total2.toFixed(2));
                console.table(subtotal);
            }
        });
    }
}

function calculateTotal() {
    total=0;
    // Calculate total price of the cart either using the "cart" array
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].subtotal
    }
    return total.toFixed(2);
}


function applyPromotionsCart(id) {
    // Apply promotions to each item in the array "cart"
    /* Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
    Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:    
    - Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.    
    - En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.            
    En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep el array cart, modificant el camp subtotalWithDiscount en cas que es s'apliqui promoció. D'aquesta manera les promocions apareixeran per producte, no sols en els subtotales!
    */

    /* Si l'usuari compra 3 o més ampolles d'oli (id:1), el preu del producte descendeix a 10 euros. */
    if ((cart[id].quantity >= 3) && (cart[id].id == 1)) {

        let objIndex = products.findIndex((obj => obj.id == cart[id].id));
        cart[id].subtotalWithDiscount = cart[id].quantity * products[cart[id].id].priceDiscount;
        console.log("ha comprat 3 o més ampolles d'oli. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
    /* En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3. */
    if ((cart[id].quantity >= 10) && (cart[id].id == 3)) {        
        cart[id].subtotalWithDiscount = cart[id].quantity * ((cart[id].price) * 2) / 3;
        console.log("ha comprat 10 o més mescles de pastis. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
}

const setCarrito = item => {    
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {
        ...producto
    }
    pintarCarrito()
}

function addCarrito(id) {
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    console.table(cart);
    // El findIndex el fem servir pq ens torni l'id del objecte trobat.  
    // Amb findIndex busquem totes les vegades que ho troba dins l'array

    let objIndex = cart.findIndex((obj => obj.id == products[id - 1].id));
    if (objIndex == -1) {
        //Si no està a la cart, l'afegim
        // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
        cart.push(products[id - 1]);
        cart[cart.length - 1].quantity = 1;
        cart[cart.length - 1].subtotal = products[id - 1].price;
        console.log("Afegit nou producte " + products[id - 1].name);
    } else {
        // Si està a la cart, actualitzem
        cart[objIndex].quantity = cart[objIndex].quantity + 1;
        //OJO, estem arrodonint a dos decimals             
        cart[objIndex].subtotal = parseFloat((cart[objIndex].subtotal + cart[objIndex].price).toFixed(2));
        console.log("Modificat producte de la llista " + cart[objIndex].name);
    }


    calculateSubtotals();
    calculateTotal();
    if (objIndex != -1) applyPromotionsCart(objIndex);

    // cridem pintar carrito
    pintarCarrito();
}


function removeFromCart(id) {
    // Estic passant com a paràmetre el producte 1
    // Busquem si el producte està a la cart
    let objIndex = cart.findIndex((obj => obj.id == id));
    if (objIndex != -1) {
        cart.splice(objIndex, 1);
        console.log("Eliminat producte de la cart: " );
    } else {
        alert("Aquest element no el tens al carret")
    }

    // cridem pintar carrito
    pintarCarrito()
}


function pintarCarrito() {

    let itemscarrito = document.getElementById('items')
    console.log(itemscarrito);
    itemscarrito.innerHTML = ""

    cart.forEach(item => {
        templateCarrito.querySelector('th').textContent = item.id
        templateCarrito.querySelectorAll('td')[0].textContent = item.name
        templateCarrito.querySelectorAll('td')[1].textContent = item.price
        templateCarrito.querySelectorAll('td')[2].textContent = item.quantity
        templateCarrito.querySelectorAll('td')[3].textContent = item.subtotal
        const clone = templateCarrito.cloneNode(true)
        // se guarda en memoria, de momento no se printa
        fragment.appendChild(clone)
    })
    itemscarrito.appendChild(fragment)
    console.log(cart);
}

