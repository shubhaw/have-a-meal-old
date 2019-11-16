import React from 'react';
import styleClasses from './ItemRow.module.css';
import { Typography, Button, ButtonGroup, Divider } from '@material-ui/core';

export default function ItemRow(props) {
    return (
        <React.Fragment>
            <div className={styleClasses.ItemRow}>
                <div className={styleClasses.row1}>
                    <Typography variant="body1">{props.itemName}</Typography>
                    <ButtonGroup size="small" color="primary" aria-label="add or subtract item">
                        <Button onClick={props.subtractQuantityHandler}>-</Button>
                        <Button disableRipple disableTouchRipple>{props.quantity}</Button>
                        <Button onClick={props.addQuantityHandler}>+</Button>
                    </ButtonGroup>
                </div>
                <div className={styleClasses.row2}>
                    <div>
                        <Typography variant="body2" style={{ display: 'inline' }}>{props.quantity} x </Typography>
                        <Typography variant="body1" style={{ display: 'inline' }}>₹{props.price}</Typography>
                    </div>
                    <Typography variant="body1">₹{props.price * props.quantity}</Typography>
                </div>
            </div>
            <Divider />
        </React.Fragment>
    )
}