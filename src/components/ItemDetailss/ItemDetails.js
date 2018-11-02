import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return(
            <div>
                <Button 
                className="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({
                    open: !this.state.open
                })}>
                {this.state.open=== false? `See` : `Hide`} Item Details 
                {this.state.open === false? `+` : `-`}
                </Button>   
                <Collapse in={this.state.open}>
                    <Well>
                        <Media>
                            <Media.Left>
                                <img 
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src="https://i5.walmartimages.com/asr/3d91c385-ca11-4e80-a51a-f5ee01c78473_1.df9f38e9371c5d7f047957c8ced0fc38.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                                />
                            </Media.Left>    
                            <Media.Body>
                                <p>Essentials by OF ESS-3085 Racing chair, Red</p>
                                <Row>
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br/>
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                    Qty: 1
                                    </Col>
                                </Row>    
                            </Media.Body>
                        </Media>    
                    </Well>   
                </Collapse>  
            </div>    
        );
    }
}

