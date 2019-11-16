import React from 'react';
import MealCard from '../MealCard/MealCard';
import {connect} from 'react-redux';

import styleClasses from './ViewItems.module.css';

const mapStateToProps = state => ({
    mealItems: state.availableItems.searchResults
})

export default connect(mapStateToProps)(function ViewItems(props) {

    return (
        <div className={styleClasses.ViewItems}>
            {
                props.mealItems.map(mealItem => {
                    return <MealCard key={mealItem.itemname} {...mealItem} />
                })
            }
        </div>
    )
})