let cart = [
    {id: 1, productName: "Phone", quantity: 3, unitPrice: 4000},
    {id: 2, productName: "Glass", quantity: 2, unitPrice: 30},
    {id: 3, productName: "Pen", quantity: 1, unitPrice: 20},
    {id: 4, productName: "Charger", quantity: 2, unitPrice: 100},
    {id: 5, productName: "Book", quantity: 3, unitPrice: 30},
    {id: 6, productName: "Pot", quantity: 5, unitPrice: 150},
]

//cart.map(product => console.log(product.productName));
cart.map(product=>{
    console.log(product.productName + ": " + product.unitPrice * product.quantity)
});  

let quantityOver2 = cart.filter(product => product.quantity>2);
console.log(quantityOver2);

let total = cart.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(total);

//Add to the cart
//cart.push({id: 7, productName: "Registration", quantity: 1, unitPrice: 20});

//function addToCart(cartA) {
//    cartA.push({id: 7, productName: "Registration", quantity: 1, unitPrice: 20});
//}

//AddToCart(cart);

//console.log(cart);

//let number = 10;

//function incrementNr(number) {
//    number += 1;
//}

//incrementNr(number);
//console.log(number);