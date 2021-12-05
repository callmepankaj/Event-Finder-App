import React, { Component } from 'react'
import EventList from './EventList'
import EventCreate from './EventCreate'
import EventDelete from './EventDelete'
import EventUpdate from './EventUpdate'
import EventSearch from './EventSearch';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './EventIndex.css';
import NavBar from './NavBar'

export default class EventIndex extends Component {
    url ="http://localhost:3000/events";
    state = {events : []}
    componentDidMount(){
        fetch(this.url)
            .then(response => response.json())
            .then(response=>this.setState({events:response}));
    }
    render() {
        return (
            <div className="operation">
                <NavBar/>
                <Router>
                <Switch>
                    <Route exact path="/">
                        <EventList/>
                    </Route>
                    <Route exact path="/EventCreate">
                        <EventCreate/>
                    </Route>
                    <Route exact path="/EventUpdate">
                        <EventUpdate/>
                    </Route>
                    <Route exact path="/EventDelete">
                        <EventDelete/>
                    </Route>
                    <Route exact path="/EventSearch">
                        <EventSearch/>
                    </Route>
                </Switch>
                <button type="button" class="btn btn-outline-light">
                    <div >
                        <Link to="/" className="fur">List</Link>
                    </div>
                    </button>
                    <button type="button" class="btn btn-outline-light">
                    <div>
                        <Link to="/EventCreate" className="fur">Add Event</Link>
                    </div>
                    </button>
                    <button type="button" class="btn btn-outline-light">
                    <div>
                        <Link to="/EventDelete" className="fur">Delete Event</Link>
                    </div>
                    </button>
                    <button type="button" class="btn btn-outline-light">
                    <div>
                        <Link to="/EventUpdate" className="fur">Update Event</Link>
                    </div>
                    </button>
                    <button type="button" class="btn btn-outline-light">
                    <div>
                        <Link to="/EventSearch" className="fur">Search Event</Link>
                    </div>
                    </button>
                </Router>
            </div>
        )
    }
}



