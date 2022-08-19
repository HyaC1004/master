import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter:'',
            inStockOnly: false
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterChange(filter){
        this.setState({filter: filter});
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly:inStockOnly});
    }

    render() {
        return (
            <div>
                <SearchBar 
                    filter={this.state.filter} 
                    inStockOnly={this.state.inStockOnly} 
                    onFilterChange={this.handleFilterChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable 
                    products = {this.props.products} 
                    filter={this.state.filter} 
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}
