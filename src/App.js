import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage';
import ShowNews from './components/ShowNews';

const App = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/:type" component={ShowNews} />
            <Route component={PageNotFound} />
        </Switch>
        </BrowserRouter>
    )
}

export default App;