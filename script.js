//importing module
import './shoppingCart.js'

console.log('importing module');

// ifi function 
const ShoppingCart2 = (function(){ 
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function (product, quantity) {
        cart.push({product,quantity});
        console.log(`${quantity} ${product} added to the cart  `);
    };
    const orderStock = function(product,quantity){
        // cart.push({product,quantity});
        console.log(`${quantity} ${product} ordered form the suppliar  `);
    };
    return {
        addToCart,
        cart,
        totalQuantity,
        totalPrice,
        shippingCost
    }
})();
ShoppingCart2.addToCart('apple',6);