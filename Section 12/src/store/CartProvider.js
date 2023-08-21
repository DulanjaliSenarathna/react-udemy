import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (satate, action) =>{
    if(action.type === 'ADD'){
        const updatedItems = satate.items.concat(action.item);
        const newTotalAmount = satate.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = item =>{
        dispatchCartAction({type: 'ADD', item: item})

    };

    const removeItemToCartHandler = id =>{
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
    };
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider