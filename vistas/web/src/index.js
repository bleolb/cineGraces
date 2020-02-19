import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';

import Login from './pages/login';
import Home from './pages/home';
import AddMovie from './pages/addMovie';
import Page404 from './pages/Page404';
import Register from './pages/register';
import Movies from './pages/movies';
import Rooms from './pages/rooms';
import FilmsRoom from './pages/films_room';
import FilmsRoomAdd from './pages/films_room_add';
import Schedules from './pages/schedules';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/home" component={ Home } />
            <Route path="/register" component={ Register } />
            <Route path="/add_movie" component={ AddMovie } />
            <Route path="/movies" component={ Movies } />
            <Route path="/rooms" component={ Rooms } />
            <Route path="/films_room" component={ FilmsRoom } />
            <Route path="/films_room_add" component={ FilmsRoomAdd } />
            <Route path="/schedules" component={ Schedules } />
            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
