import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './registerServiceWorker';
//components

import Home from './components/home'
import Artist from './components/artists'

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/artist/:artistid" component={Artist} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();