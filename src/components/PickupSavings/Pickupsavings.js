import React, { Component } from 'react';

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

class Pickupsavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
            <p>Picking Up Order in store helps you to cut costs, and we pass savings on to you</p>
        </Tooltip>
        );
        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupSavings}>
                            PickupSavings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        );
    }
}

export default Pickupsavings;

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}