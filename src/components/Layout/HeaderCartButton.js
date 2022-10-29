import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) =>  {
  const cartContext = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted]= useState(false);
  const {items} = cartContext;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    },3 00);

    return ()=>{
      clearTimeout(timer);
    }
  },[items])

  const totalCartItems = items.reduce((currentNumber, item)=>{ return currentNumber + item.amount}, 0);

  const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

    return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span >Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
    );
  }
  
  export default HeaderCartButton;
  