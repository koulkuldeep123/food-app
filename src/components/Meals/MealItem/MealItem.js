import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) =>  {

    const cardContext = useContext(CartContext);

    const addCartHandler = (amount)=>{
        cardContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price

        })
    };

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}> {props.description} </div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddCart={addCartHandler}/>
            </div>    
        </li>
    );
  }
  
  export default MealItem;
  