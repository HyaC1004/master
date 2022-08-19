import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        const filter = this.props.filter;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;
        
        this.props.products.forEach((product) => {
            if(product.name.indexOf(filter)=== -1){
                // 검색내용 포함 안될 때
                return;
            }
            if(inStockOnly && !product.stocked){
                // 재고없을때 
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                product={product}
                key={product.name} />
            );
            lastCategory = product.category;
        });


        return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        )
    }
}
