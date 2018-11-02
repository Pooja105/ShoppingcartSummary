import React, { Component} from 'react';
import { Row, Col, Button, Collapse, Well, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../Actions/promocodeActions';

class PromoCode extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    }

    handleChange = e =>{
        this.props.handleChange(e);
    }

    render() {
        return(
            <div>
                <Button 
                bsStyle="link"
                className="promo-code"
                onClick={() => this.setState({
                    open: !this.state.open
                }) }
                >
                {this.state.open=== false ? `Apply` : `Hide`} Promo code
                {this.state.open===false ? `+`: `-`}
                </Button>
                <Collapse in={this.state.open}>
                    <Well>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <FormGroup>
                                        <ControlLabel>
                                            Promo Code
                                        </ControlLabel>   
                                        <FormControl 
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        value={this.props.promocode}
                                        onChange={this.handleChange}
                                        /> 
                                        <Button 
                                        block
                                        bsStyle="success"
                                        className="btn-round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                        >
                                            Apply Promocode
                                        </Button>    
                                    </FormGroup>    
                                </Form>    
                            </Col>
                        </Row>    
                    </Well>    
                </Collapse> 
            </div>    
        );
    }
}
const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});


export default connect(mapStateToProps, { handleChange })(PromoCode);