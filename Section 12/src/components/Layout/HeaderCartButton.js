import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

   const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numOfCartItems = items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  },0);

  

  const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(cartCtx.items.length ===0){
      return;
    }
    setButtonIsHighlighted(true);
   const timer= setTimeout(()=>{setButtonIsHighlighted(false)},300);

   return ()=>{clearTimeout(timer)} //cleanup function
  },[items]);

  return ( 
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton