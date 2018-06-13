import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

//components

import Home from './components/home'
import Artists from './components/artists'

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="artist/:artistid" component={Artists} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));