import { Component } from "react";

class RandBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            present: {
                outer : "?",
                inner : "Money"
            }
        }
    }
    componentDidMount() {
        // console.log("componentDidMount");
        const chars = ["?","#","@","!!","%","☆"];
        setInterval( ()=>{
            let idx = Math.floor(Math.random()*chars.length);
            let pick = chars[idx];
            let origin = this.state.present;
            origin.outer = pick;
            let copy = {...origin , outer:pick }
            this.setState({ present : copy });
        }, 100)
    }

    render() {
        console.log("render");

        return (
        <div className="present">
            <span className="outer">{this.state.present.outer} </span>
        </div>
        );
    }


}

export default RandBox;