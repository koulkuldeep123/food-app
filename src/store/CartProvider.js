import { useReducer } from "react";
import CardContext from "./cart-context";


const defultCartState = {items: [], totalAmount: 0};

const cartReducer = (state, action)=>{
    if(action.type === 'ADD_ITEM'){
        //const updatedItems = state.items.concat(action.item);
        const exitingCartItemsIndex = state.items.findIndex(item=> item.id === action.item.id);
        const exitingCartItem = state.items[exitingCartItemsIndex];

        let updatedItems;

        if(exitingCartItem){
           const updatedItem = {
                ...exitingCartItem,
                amount: exitingCartItem.amount + action.item.amount,
            };

            updatedItems = [...state.items];
            updatedItems[exitingCartItemsIndex]= updatedItem;
        }else {
            updatedItems = state.items.concat(action.item);

        }
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return  {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }

    else if(action.type === 'REMOVE_ITEM'){
        const exitingCartItemIndex = state.items.findIndex(item=> item.id === action.id);
        const exitingCartItem = state.items[exitingCartItemIndex];
        const updatedAmount = state.totalAmount - exitingCartItem.price;

        let updatedItems;
        if(exitingCartItem.amount === 1){
            updatedItems = state.items.filter((item)=>  item.id !== action.id);
        } else {
            const updateItem = {...exitingCartItem, amount: exitingCartItem.amount-1 };
            updatedItems = [...state.items];
            updatedItems[exitingCartItemIndex] = updateItem; 
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    
    return defultCartState;
};

const CardProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defultCartState);

    const addItemToCartHandler = (item) => {

        dispatchCartAction({type:'ADD_ITEM', item:item});
    };
    const removeItemFromCartHandler = (id) => {

        dispatchCartAction({type:'REMOVE_ITEM', id:id});
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };


    return <CardContext.Provider value = { cartContext } > { props.children } </CardContext.Provider>
}

export default CardProvider;