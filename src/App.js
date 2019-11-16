import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrimarySearchAppBar from './components/Navigation/Header/Header';


function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <PrimarySearchAppBar />
                <Layout />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
