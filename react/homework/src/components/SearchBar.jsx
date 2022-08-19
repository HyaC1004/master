import React, { Component } from 'react'

export default class searchBar extends Component {
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterChange = (evt)=>{
        this.props.onFilterChange(evt.target.value);
    }

    handleInStockChange = (evt)=>{
        this.props.onInStockChange(evt.target.checked);
    }

    render() {

        return (
        <form>
            <input 
                type="text" 
                placeholder='검색어 입력' 
                value={this.props.filter}
                onChange={this.handleFilterChange}
            />
            <p>
                <input 
                    type="checkbox" 
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange}
                />
                {' '}
                재고 상품만 보기
            </p>
        </form>
        )
    }
}
