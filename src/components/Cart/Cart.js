import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length>0;

    const cartItemAdd = (item) => {
        cartContext.addItem(item);
    };
    const cartItemRemove = (id) => {
        cartContext.removeItem(id);
    };


    const cartItems = <ul className={classes['cart-items']}>
            {cartContext.items.map(item=> 
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}
                    onAdd={cartItemAdd.bind(null,item)}
                    onRemove={cartItemRemove.bind(null,item.id)} 
                    /> )}
        </ul>;

    
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button> }
            </div>
        </Modal>
    );
  };
  
  export default Cart;