import React, { Component } from 'react'
import './tabb.css';

export default class EventDelete extends Component {
    url ="http://localhost:3000/events";
    state={s:{id:"",Event_Type:"",Event_Name:"",Date:"", Time:""}}
    id=React.createRef();
    Event_Type=React.createRef();
    Event_Name=React.createRef();
    Date=React.createRef();
    Time=React.createRef();

    deleteEvent(){
        var id = Number(this.id.current.value);
        var url = `${this.url}/${id}`;
        fetch(url,{method:'DELETE'})
        .then(()=>alert("Event deleted successfully.."))
        .catch(err=>alert("Error"+ err))
    }
    render() {
            return (
            <div>
                <h1>Delete Operation</h1>
                <table className="mtn">
                    <tr>
                        <td>Event ID</td> <td><input type="number" ref={this.id}/></td>
                        <button className="btn btn-outline-secondary" onClick={()=>this.deleteEvent()}>Delete</button>
                    </tr>
                </table>
            </div>
        )
    }
}
