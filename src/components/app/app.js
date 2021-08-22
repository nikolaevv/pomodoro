import React from 'react';
import {Route} from 'react-router';
import Header from '../header';
import {MainPage, SettingsPage} from '../pages';

import './app.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Route path="/" exact component={MainPage}/>
            <Route path="/settings" component={SettingsPage}/>
        </div>
    );
};

export default App;