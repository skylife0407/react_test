import React from 'react';
import Top10 from './dashboard/Top10';
import EventPerhour from './dashboard/EventPerhour';


import EventPerDay from './dashboard/EventPerDay';
//import Card from 'react-bootstrap/Card'
import Counter from './dashboard/Counter';

//import Top10 from './dashboard/Top10';
//import EventPerDay from './dashboard/EventPerDay';
//import EventPerhour from './dashboard/EventPerhour';
//import LastAlerts from './dashboard/LastAlerts';


export default function Dashboard(props) {
    return (
        <div>
            <div className="db-1st-row">
                <div className="db-1st-col">COUNTER
                    <Counter />
                </div>
                <div className="db-1st-col">TOP 10
                    <div className="db-top10"><Top10 /></div>
                </div>
                <div className="db-1st-col">TOP 102
                    <div><EventPerhour /></div>
                </div>
            </div>
            <div className="db-1st-row">
                <div style={{ width:'500px', display: "inline-block"}}>Event Per Day
                    <EventPerDay />
                </div>
                <div style={{ width:'500px', display: "inline-block"}}>Event Per Day
                    <EventPerDay />
                </div>
            </div>

        </div>
        
    );
}
