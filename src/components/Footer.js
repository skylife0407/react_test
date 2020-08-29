import React, {Component} from 'react';

import {Navbar, Container, Col} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();

        return (
            <div className="footer">
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}-{fullYear+1}, @ All Rights Reserved by Jun</div>
                    </Col>
                </Container>
            </Navbar>
            </div>
        );
    }
}