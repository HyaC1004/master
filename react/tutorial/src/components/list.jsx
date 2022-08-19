import { Component } from "react";

class List extends Component {
    state = { items : ["감혜빈","공병구","정상춘","최윤주","유유유","이혜주","이솔"]  } 

    handleMoveUp = (evt) =>{
        const newItems = [...this.state.items];
        // 이 타겟 찾아서 하나 위에꺼랑 값 바꿔주면 ?
        const targetIdx = newItems.indexOf(this.state.target);  // findIndex ..?  객체 타입일때
        if(targetIdx === -1 || targetIdx === 0 ) {   // 
            return;
        }
        newItems[targetIdx] =newItems[targetIdx-1];
        newItems[targetIdx-1] = this.state.target;
        this.setState({items : newItems});
    }

    handleMoveDown = (evt) =>{
        const newItems = [...this.state.items];
        // 이 타겟 찾아서 하나 위에꺼랑 값 바꿔주면 ?
        const targetIdx = newItems.indexOf(this.state.target);  // findIndex ..?  객체 타입일때
        if(targetIdx === -1 || targetIdx === newItems.length-1 ) {   // targetIdx === -1 || targetIdx === 0 
            return;
        }
        newItems[targetIdx] =newItems[targetIdx+1];
        newItems[targetIdx+1] = this.state.target;
        this.setState({items : newItems});
    }
   
    handleCheckTarget =(evt) =>{
        if(!this.state.target) {
            return this.setState({target : evt.target.value });
        }else {
            if(this.state.target === evt.target.value) {
                return this.setState({target : null});
            }
            evt.preventDefault();
        }
    }

    render() { 
        // const tags = this.state.items.map((one, idx)=>{
        //     return (
        //         <p><label>
        //             <input type="checkbox" 
        //                 onClick={this.handleCheckTarget} value={one} />{one}</label>
        //         </p>
        //     );
        // });
        const tags = [];
        this.state.items.forEach((one, idx)=> {
            tags.push(<p key={one} >
                        <label>
                        <input type="checkbox" 
                            onClick={this.handleCheckTarget} value={one} />{one}</label>
                    </p>);
        });


        return (
            <>
                <div>
                    { tags }
                </div>
                <div>
                    <button onClick={this.handleMoveUp}>위로</button> 
                    <button onClick={this.handleMoveDown}>아래로</button>
                </div>
            </>
        );
    }
}
 
export default List;