import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addItemIncart: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

export default CartContext;