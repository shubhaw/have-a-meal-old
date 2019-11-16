import React from 'react';
import MealCard from '../MealCard/MealCard';

import styleClasses from './ViewItems.module.css';

export default function ViewItems(props) {

    const mealItems = [
        {
            id: 1,
            itemname: 'Non Veg Combo',
            availabletime: '12:00 PM',
            price: '259'
        },
        {
            id: 2,
            itemname: 'Veg Combo',
            availabletime: '12:00 PM',
            price: '249'
        },
        {
            id: 3,
            itemname: 'Fish Combo',
            availabletime: '12:00 PM',
            price: '289'
        },
        {
            id: 4,
            itemname: 'Chicken Biryani',
            availabletime: '12:00 PM',
            price: '259'
        },
        {
            id: 5,
            itemname: 'Veg Biryani',
            availabletime: '12:00 PM',
            price: '229'
        },
        {
            id: 6,
            itemname: 'Paneer Combo',
            availabletime: '12:00 PM',
            price: '249'
        }
    ];

    return (
        <div className={styleClasses.ViewItems}>
            {
                mealItems.map(mealItem => {
                    return <MealCard key={mealItem.itemname} {...mealItem} />
                })
            }
        </div>
    )
}