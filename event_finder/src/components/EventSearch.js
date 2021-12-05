import React, { Component } from 'react'
import './tabb.css';

export default class EventUpdate extends Component {
    url="http://localhost:3000/events";
    state={s:{id:"",Event_Type:"",Event_Name:"",Date:"", Time:""}}
    id=React.createRef();
    Event_Type=React.createRef();
    Event_Name=React.createRef();
    Date=React.createRef();
    Time=React.createRef();
    searchEvent(){
        var id =Number(this.refs.id.value);
        var url =`${this.url}/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(response=>this.setState({s:response}));
    }
    render() {    
        var s =this.state.s;
        return (
            <div>
                <h1>Search Event</h1>
                <table className="mtn">
                    <tr>
                        <td>Event ID</td> <td><input type="number" ref="id"/></td>
                        <button className="btn btn-outline-secondary" onClick={()=>this.searchEvent()}>Search</button>
                    </tr>
                    <tr>
                        <td>Event Type:</td> <td><input type="text" ref="Event_Type" value={s.Event_Type}/></td>
                    </tr>
                    <tr>
                        <td>Event Name:</td> <td><input type="text" ref="Event_Name" value={s.Event_Name}/></td>
                    </tr>
                    <tr>
                        <td>Date:</td> <td><input type="text" ref="Date" value={s.Date}/></td>
                    </tr>
                    <tr>
                        <td>Time:</td> <td><input type="text" ref="Time" value={s.Time}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}
