import React from 'react';
import Top10 from './dashboard/Top10';
import EventPerhour from './dashboard/EventPerhour';


import EventPerDay from './dashboard/EventPerDay';
//import Card from 'react-bootstrap/Card'
import Counter from './dashboard/Counter';
import LastAlerts from './dashboard/LastAlerts';

//import Top10 from './dashboard/Top10';
//import EventPerDay from './dashboard/EventPerDay';
//import EventPerhour from './dashboard/EventPerhour';
//import LastAlerts from './dashboard/LastAlerts';


export default function Dashboard(props) {
    return (
        <div>
            <h2>Dashboard</h2>
            <hr/>
            <div style={{width:"100%", display:"flex", justifyContent:"center,", alignItems:"center"}}>
                <div style={{width:"30%"}}><Counter />COUNTER</div>
                <div style={{width:"35%"}}><Top10 />TOP 10</div>
                <div style={{width:"35%"}}><EventPerhour />TEST</div>
            </div>
            <hr/>
            <div style={{width:"100%", display:"flex", justifyContent:"center,", alignItems:"center"}}>
                <div style={{width:"100%"}}><h5>LAST ALERTS</h5><p/><LastAlerts/></div>
            </div>
            <hr/>
            <div style={{width:"100%", display:"flex", justifyContent:"center,", alignItems:"center"}}>
                <div style={{width:"50%"}}><h5>EVENT PER DAY</h5><p/><EventPerDay /></div>
                <div style={{width:"50%"}}><h5>EVENT PER DAY</h5><p/><EventPerDay /></div>
            </div>
            <hr/>
        </div>
        
    );
}
