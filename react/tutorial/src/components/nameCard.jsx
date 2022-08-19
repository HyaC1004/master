import React from "react";

class NameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            value: this.props.value
        }
    }
    handleEdit = (evt) => {
        // const nState = { edit :  !this.state.edit};
        // this.setState(nState);
        if (this.state.edit) {
            const hp = this.state.hp ?? this.props.value.hp;
            const email= this.state.email ?? this.props.value.email;
            this.props.onUpdate(this.props.value.name, hp, email);
        }
        this.setState((current) => {
            return { edit: !current.edit };
        //  return {};
        });
    };
    
    componentDidMount() {
        // 생성되서 V-DOM에 장착됬을때
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        // 업데이트가 반영됫을때 
        console.log("componentDidUpdate");
    }

    componentWillUnmount( ) {
        // 생성되서 V-DOM에 빠질때
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        // const value = this.props.value;
        const { value } = this.props;
        let email;
        if (this.state.edit) {
            email = <input type="text" defaultValue={this.props.value.email} 
                        onChange={(evt)=>{
                        this.setState({email : evt.target.value});
                    }} />
        } else {
            email = <span>{this.props.value.email}</span>
        }
        return (
            <fieldset style={{float :"left"}}>  
                <legend>{this.props.value.name}</legend>
                <div style={{ textAlign: "right" }}>
                    <div>
                        HP : {
                            this.state.edit ?
                                (<input type="text" defaultValue={this.props.value.hp} 
                                    onChange={(evt)=>{
                                        this.setState({hp : evt.target.value});
                                    }} />) :
                                (<span>{value.hp}</span>)
                        }
                    </div>
                    <div>
                        E-Mail : {email}
                    </div>
                </div>
                <div>
                    <button onClick={this.handleEdit}>{this.state.edit ? "확인" : "수정"}</button>
                    <button onClick={() => {
                        this.props.onDelete(value.name)
                    }}>삭제</button>
                </div>
            </fieldset>
        );
    }
}




export default NameCard;