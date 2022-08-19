import { Component } from "react";

class CreateNameCard extends Component {
    state = {  } 
    
    handleSubmit = (evt) =>{
        evt.preventDefault();
        const {name, hp, email} = this.state;
        this.props.onCreate(name, hp, email);
        // this.props.onCreate(this.state.name, this.state.hp, this.state.email);
        // 
        // this.props.onCreate(evt.target.name.value, evt.target.hp.value, evt.target.email.value, );
        evt.target.reset();
    }

    saveState = (evt) =>{
        const name = evt.target.name;
        const value = evt.target.value;

        this.setState( { [name] : value   });
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>이름 : <input type="text" name="name" onChange={this.saveState}/></label>
                
                    <label>H.P : <input type="text" name="hp" onChange={this.saveState}/></label>
                
                    <label>E-Mail : <input type="text" name="email" onChange={this.saveState}/></label>
                
                    <button>추가</button>
                </p>
            </form>
        );
    }
}
 
export default CreateNameCard;