import React, { Component } from 'react';   // imrc

class Exchange extends Component {      // cc ccc
    constructor(props) {
        super(props);
        this.state = { code: props.code, money: 100 };
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value }, ()=>{
            this.props.onChange(this.state.code, Number(this.state.money));
        });
    }
    transfer = (value) => {
        const late = { kr: 1, us: 1327.1, jp: 9.74, cn: 194.3 }
        if(this.props.target.code === this.state?.code){
            return value
        } else {
            return (value*late[this.props.target.code] /late[this.state?.code]).toFixed(2);
        }
    }
    // 1dollar = 1327.1원 = 136.22엔 = 6.83 위안
    render() {
        const units = { kr: "원", us: "달러", jp: "엔", cn: "위안" }
        return (<form className="exchangeForm" onSubmit={(evt) => evt.preventDefault()}>
            <div>
                <select value={this.state.code} name="code" onChange={this.handleChange} >
                    <option value="kr">대한민국</option>
                    <option value="us">미국</option>
                    <option value="cn">중국</option>
                    <option value="jp">일본</option>
                </select>
            </div>
            <div className='exchange-inner'>
                <div>
                    <input type="text" name="money" value={this.transfer(this.props.target.money)} onChange={this.handleChange} autocomplete='off'/>
                </div>
                <div >
                    <span>{this.transfer(this.props.target.money)}</span>
                    <span>{units[this.state.code]}</span>
                </div>
            </div>
        </form>);
    }
}

export default Exchange;