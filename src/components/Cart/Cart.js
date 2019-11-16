import React from 'react';

import styleClasses from './Cart.module.css';
import { Paper, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../store/actions/actionTypes';
import ItemRow from './ItemRow/ItemRow';

const Cart = props => {
    return (
        <Paper className={styleClasses.Cart}>
            <Typography variant="h5">Cart</Typography>
            {
                props.items.map(item => (
                    <ItemRow {...item} key={item.id} />
                ))
            }
            <div className={styleClasses.totalPrice}>
                <Typography variant="overline">
                    Total Price
                </Typography>
                <Typography>
                    {props.totalPrice}
                </Typography>
            </div>
            <Button variant="contained" color="primary" fullWidth>Checkout</Button>
        </Paper>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch({ type: ADD_TO_CART, item }),
    removeFromCart: itemId => dispatch({ type: REMOVE_FROM_CART, itemId }),
    increaseQuantity: itemId => dispatch({ type: INCREASE_QUANTITY, itemId }),
    decreaseQuantity: itemId => dispatch({ type: DECREASE_QUANTITY, itemId })
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);