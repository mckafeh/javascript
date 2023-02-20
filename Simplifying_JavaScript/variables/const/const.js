const taxrate = 0.1;
const shipping = 5.00;
const total = 100 + (100 * taxrate) + shipping;
conts discountable = cart.filter(item => item.discountAvailable);

// Skip 100 lines of code
return `Your order is ${total}`;

for (let i =0; i < cart.length; i++){
    if (cart[i].discountAvailable){
        discountable.push(cart[i]);
    }
}