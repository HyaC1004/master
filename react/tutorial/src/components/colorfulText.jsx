/*
    리액트 컴포넌트는 function 혹은 class 로 설계할 수 있는데
    class 로 설계하게 된다면, 
    state(상태) 와 라이프 사이클 (life cycle) 관련된 기능을 사용할 수 있다.

    function 과는 이게 차별화 된 점이었는데 , Hook 이후에는 function 으로도 가능
*/
import React from "react";

class ColorfulText extends React.Component {
    constructor(){
        super();
        this.state = {
            red : 0,
            manager : "edupoll"
        }
    }

    render() {
        console.log("ColorfulText.RENDER !");
        const style = {
            color : `rgb(${this.state.red}, 0, 0)`
        }
        return (
            <h1 
                style={style }
                onMouseOver={ (evt) => {
                    // this.state.red += 15;
                    this.setState({ manager : this.state.manager });
                    console.log(this.state);
                } }
                onClick={ (evt)=> {
                    this.setState({red : this.state.red +15});
                    console.log(this.state);
                }}
            >
                {this.state.manager?? "No Content"}
            </h1>
        );
    }

}

export default ColorfulText;

