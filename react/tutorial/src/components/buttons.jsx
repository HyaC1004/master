import { Component } from "react";

class Buttons extends Component {
    state = { 
        create : 0, read :0, update :0, delete : 0
    } 
    handleUpdate(evt) {
        console.log(this);
        // this.state.update += 1;

        this.setState({update : this.state.update + 1});
    }
    handleDelete = (evt) => {
        console.log(this);
        this.setState({delete : this.state.delete + 1});
    }

   render() { 
        return (
            <div>
                <button onClick={ function(evt){
                    console.log(this);
                    this.setState({create : this.state.create+1});
                }.bind(this) }>Create</button>
                <button onClick= { (evt) =>{
                    console.log(this);
                    this.setState({read : this.state.read + 1});
                } }>Read</button>
                <button onClick= { (evt)=> { 
                        console.log(this);
                        this.handleUpdate(evt);
                    } }>Update-1</button>
                <button onClick= { this.handleUpdate.bind(this) }>Update-2</button>
                <button onClick= { this.handleDelete }>Delete</button>
            </div>
        );
    }
}
 
export default Buttons;