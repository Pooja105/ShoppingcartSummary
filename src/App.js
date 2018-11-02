import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import Pickupsavings from './components/PickupSavings/Pickupsavings';
import Taxesfees from './components/Taxesfees/Taxesfees';
import ItemDetails from './components/ItemDetailss/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from './Actions/promocodeActions';

import './App.css';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';

class App extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
      total: 100,
      Pickupsavings: -3.85,
      taxes:0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount() {
    this.setState({
      taxes: (this.state.total + this.state.Pickupsavings) * 0.065
    }, function() {
      this.setState({
        estimatedTotal: (this.state.total + this.state.Pickupsavings + this.state.taxes)
      });
    })
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode==='DISCOUNT'){
        this.setState({
            estimatedTotal: this.state.estimatedTotal * 0.9
        }, function() {
            this.setState({
                disablePromoButton: true
            })
        })
    }
}

  render() {
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 100}}>
        <h1> SHOPPING CART SUMMARY </h1>
      <div className="container">
         <Grid classname="purchase-card">
              <SubTotal price={this.state.total.toFixed(2)} /> <br/>
              <Pickupsavings price={this.state.Pickupsavings} /> <br/>
              <Taxesfees taxes={this.state.taxes.toFixed(2)} />
              <hr />
              <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
              <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
              <hr />
              <PromoCode 
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoButton}
              />
         </Grid>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange})(App);
