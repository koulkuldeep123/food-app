import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'shusi' , amount: 2, price: 22.88}].map(item=> <li>{item.name}</li>)}
        </ul>;
    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total Amount </span>
                <span>32.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
  };
  
  export default Cart;