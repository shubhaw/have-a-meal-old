import React from 'react';
import styleClasses from './Layout.module.css';
import ViewItems from '../ViewItems/ViewItems';
import Cart from '../Cart/Cart';

export default function Layout () {
    return (
        <div className={styleClasses.Layout}>
            <ViewItems />
            <Cart />
        </div>
    )
}
