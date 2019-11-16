import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';


function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <h1>Have A Meal</h1>
                <Layout />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
