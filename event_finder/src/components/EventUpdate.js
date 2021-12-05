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
    updateEvent(){
        var id = Number(this.id.current.value);
        var s = {
            id:this.id.current.value,
            Event_Type:this.Event_Type.current.value,
            Event_Name:this.Event_Name.current.value,
            Date:this.Date.current.value,
            Time:this.Time.current.value
        };
        var url = `${this.url}/${id}`
        fetch(url,{method:'PUT',headers:{'Content-Type':'Application/json'}, body:JSON.stringify(s)})
        .then(()=>alert("Row updated successfully..."))
        .catch(err=>alert("Error"+ err))
    }
    render() {    
        return (
            <div>
                <h1>Update Event</h1>
                <table className="mtn">
                    <tr>
                        <td>Event ID</td> <td><input type="number" ref={this.id}/></td>
                        <button className="btn btn-outline-secondary" onClick={()=>this.updateEvent()}>Update</button>
                    </tr>
                    <tr>
                        <td>Event Type:</td> <td><input type="text" ref={this.Event_Type}/></td>
                    </tr>
                    <tr>
                        <td>Event Name:</td> <td><input type="text" ref={this.Event_Name}/></td>
                    </tr>
                    <tr>
                        <td>Date:</td> <td><input type="text" ref={this.Date}/></td>
                    </tr>
                    <tr>
                        <td>Time:</td> <td><input type="text" ref={this.Time}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}
