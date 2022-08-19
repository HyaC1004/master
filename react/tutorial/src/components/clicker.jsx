
import React from "react";

class Clicker extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count : 0,
            history : [0],
            max : this.props.max
        }
    }
    render() {
        console.log("render");
        return(
            <div>
                <button onClick={(evt)=>{
                    console.log(evt);
                    this.setState({ count : this.state.count+1 })
                }} >! Click Me !</button>
                <span>{this.state.count}</span>
                <hr/>
                <button onClick={(evt)=>{
                    let nHistory = [...this.state.history];
                    nHistory.push(this.state.count);
                    this.setState({ history  : nHistory  });
                }}>
                    Save
                </button>
                <span>
                    { this.state.history }
                </span>
               
            </div>
        );
    }
}
export default Clicker;
