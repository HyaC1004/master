import React, { Component } from 'react';
import Exchange from './exchange';

import Currency from '../utils/cuurrency';

const Text = (props) =>{
    return <span className="text">{props.txt }</span>
}

class Exchanger extends Component {
    constructor(props) {
        super(props);
        this.currency = new Currency();
        this.currency.setWon(1000);
        this.state = {
            target : { code : "kr" , money : 1000  },
            currency: this.currency.lean()
        };
    }

    handleChangeTarget = (code, money) =>{
        this.setState( {target : {code : code, money : money} } );
        switch (code) {
            case "kr": this.currency.setWon(money); break;
            case "us": this.currency.setDollar(money); break;
            case "cn": this.currency.setYuan(money); break;
            case "jp": this.currency.setYen(money); break;
        }
        this.setState({currency:this.currency.lean()});
    }



    // <Exchange code="kr" target={ this.state.currency } onChange={this.handleChangeTarget}/>
    render() { 
        return (<div>
            <Text txt="환율계산-React"/>
            <Exchange code="kr" target={ this.state.target } onChange={this.handleChangeTarget}/>
            <Text txt="="/>
            <Exchange code="us" target={ this.state.target } onChange={this.handleChangeTarget}/>
        </div>);
    }
}
 
export default Exchanger;