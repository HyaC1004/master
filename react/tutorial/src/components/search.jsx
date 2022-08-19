import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);

        this.search = React.createRef();
    }
    handleSearch = (evt) =>{
        evt.preventDefault();
        console.log(this.search.current.value);
    }
    render() { 
        return (
            <form onSubmit={this.handleSearch}>
                <input type="text"  ref={this.search}/>
                <button>검색</button>
            </form>
        );
    }
}
 
export default Search;