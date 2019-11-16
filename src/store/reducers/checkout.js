import {
    ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY
} from '../actions/actionTypes';

const initialState = {
    items: [],
    totalPrice: 0,
    isFinalCheckout: false
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const updatedItems = [...state.items, action.item];
            const updatedTotalPrice = state.totalPrice + Number(action.item.price);
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
        case INCREASE_QUANTITY: {
            const updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex(item => item.id === action.itemId);
            const updatedQuantity = updatedItems[itemIndex].quantity + 1;
            const updatedTotalPrice = state.totalPrice + Number(updatedItems[itemIndex].price);
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                quantity: updatedQuantity
            }
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
        case REMOVE_FROM_CART: {
            const updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex(item => item.id === action.itemId);
            const removedItems = updatedItems.splice(itemIndex, 1);
            console.log(removedItems);
            const updatedTotalPrice = state.totalPrice - Number(removedItems[0].price);
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
        case DECREASE_QUANTITY: {
            const updatedItems = [...state.items];
            const itemIndex = updatedItems.findIndex(item => item.id === action.itemId);
            const updatedQuantity = updatedItems[itemIndex].quantity - 1;
            const updatedTotalPrice = state.totalPrice - Number(updatedItems[itemIndex].price);
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                quantity: updatedQuantity
            }
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
        default:
            return state;
    }
}

export default checkoutReducer;