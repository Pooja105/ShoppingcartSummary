import React, { Component} from 'react';
import { Col, Row } from 'react-bootstrap';

class Taxesfees extends Component{
     render() {
         return(
             <Row>
                 <Col md={6}> Est. taxes && fees (Based on 94085)</Col>
                 <Col md={6}> {`$${this.props.taxes}`}</Col>
             </Row>    
         );
     }
}

export default Taxesfees;