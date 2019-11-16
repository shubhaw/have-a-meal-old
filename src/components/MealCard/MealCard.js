import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, Button, ButtonGroup } from '@material-ui/core';

import styleClasses from './MealCard.module.css';
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../store/actions/actionTypes';
import { connect } from 'react-redux';

const MealCard = function (props) {
    const currentItem = props.items[props.items.findIndex(item => item.id === props.id)];
    
    let quantity = 0;
    if(currentItem) {
        quantity = currentItem.quantity;
    }

    const addQuantityHandler = () => {
        if (quantity === 0) {
            const item = {
                id: props.id,
                itemName: props.itemname,
                price: props.price,
                quantity: 1
            }
            props.addToCart(item);
        } else {
            props.increaseQuantity(props.id);
        }
    }

    const subtractQuantityHandler = () => {
        if (quantity === 1) {
            props.removeFromCart(props.id);
        } else {
            props.decreaseQuantity(props.id);
        }
    }

    const addButton = (
        <Button size="small" variant="outlined" color="primary" onClick={addQuantityHandler}>Add</Button>
    )

    const buttonGroup = (
        <ButtonGroup size="small" color="primary" aria-label="add or subtract item">
            <Button onClick={subtractQuantityHandler}>-</Button>
            <Button disableRipple disableTouchRipple>{quantity}</Button>
            <Button onClick={addQuantityHandler}>+</Button>
        </ButtonGroup>
    )

    return (
        <Card className={styleClasses.MealCard}>
            <CardContent>
                <Typography variant="h6">{props.itemname}</Typography>

            </CardContent>
            <CardActions className={styleClasses.cardActions}>
                <Typography variant="body1">₹{props.price}</Typography>
                {
                    quantity === 0 ? addButton : buttonGroup
                }
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch({ type: ADD_TO_CART, item }),
    removeFromCart: itemId => dispatch({ type: REMOVE_FROM_CART, itemId }),
    increaseQuantity: itemId => dispatch({ type: INCREASE_QUANTITY, itemId }),
    decreaseQuantity: itemId => dispatch({ type: DECREASE_QUANTITY, itemId })
});

export default connect(mapStateToProps, mapDispatchToProps)(MealCard);

