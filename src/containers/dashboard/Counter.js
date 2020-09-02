import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Counter extends Component{
    render() {
        return(
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>
                        <Card border="Secondary " style={{ width: '22rem' }}>
                            <Card.Header>Today</Card.Header>
                            <Card.Body>
                            <Card.Title>23,000</Card.Title>
                            </Card.Body>
                        </Card>
                        <p/>
                        <Card border="Secondary " style={{ width: '22rem' }}>
                            <Card.Header>YESTERDAY</Card.Header>
                            <Card.Body>
                            <Card.Title>23,000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
        );
    }
}
export default Counter;