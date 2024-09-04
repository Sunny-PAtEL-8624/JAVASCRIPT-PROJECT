export const cart = [];


export function addToCart(productId) {
    let matchingItem = false;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1; // Increment the quantity
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
        });
    }
}