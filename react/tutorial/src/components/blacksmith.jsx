import { useCallback } from "react";
import { useState } from "react";
import Item from "./item";

function BlackSmith() {
    const [items, setItems] = useState([
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "검"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "도"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "단검"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "창"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "지팡이"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "활"}
    ]);

    // useCallback Hook 상위 컴퍼넌트에서 하위컴퍼넌트로 콜백용씀
    const deleteHandle = useCallback((target) =>{
        setItems(items.filter(item=>item.name !== target.name));
    },[items]);  // [] => 뭐가 바뀔때마다를 안정해서 함수를 다시 안만듬
    
    const temp = [
        { category: "Electronics", price: "$399.99", stocked: false, name: "도끼" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "방패" },
    ]
    return (<div>
        {items.map(item=><Item data={item} key={item.name} onDelete={deleteHandle} />)}
        {temp.map(item => <Item data={item} key={item.name} onDelete={deleteHandle} />)}
    </div>);
};

export default BlackSmith;