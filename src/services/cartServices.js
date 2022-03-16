


export const addToCartService =(product, units) => {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    
}