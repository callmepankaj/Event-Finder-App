import React, { Component } from 'react'
import './EventList.css';
export default class Consume extends Component {
    url="http://localhost:3000/events";
    state={events:[]}
    componentDidMount(){
        fetch(this.url)
        .then(response=>response.json())
        .then(response=>this.setState({events:response}))
    }
    render() {
        return (
            
            <div className="tab">
                 <h1>Upcoming Events</h1>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>ID</th> <th>Event Name</th> <th>Event Type</th> <th>Date</th><th>Time</th>
                        </tr>
                    </thead>
                <tbody>
                {this.state.events.map(x=><tr>
                    <td>{x.id}</td> <td>{x.Event_Type}</td> <td>{x.Event_Name}</td> <td>{x.Date}</td> <td>{x.Time}</td>
                </tr>)}
                </tbody>
                </table> 
            </div>
        )
    }
}
