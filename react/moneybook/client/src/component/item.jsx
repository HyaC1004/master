
function Item({data,historyAPI,onSelected,setDeleted}) {
    const handleDelete = () =>{    
        const id = data._id;
        if(window.confirm("삭제하시겠습니까?")==true){
            historyAPI.delete(id)
            .then(recv =>{
                setDeleted(id);
                console.log(recv);    
            })
        }else{
            return false;
        }
    }
    const open = () =>{
        console.log(data);
    }
    return ( 
        <tr className="list-area">
            <td><span>{data.itemDate.slice(0,10)}</span></td>
            <td><span>{data.useDesc}</span></td>
            <td><span>{data.cashAmt??0}</span></td>
            <td><span>{data.cardAmt??0}</span></td>
            <td className="mb"><span>{data.category}</span></td>
            <td className="mb"><span>{data.tag}</span></td>
            <td className="fixTd"><span ><i onClick={()=>onSelected(data)} className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#update"></i></span></td>
            <td className="fixTd"><span onClick={handleDelete} ><i className="bi bi-trash-fill"></i></span></td>
        </tr>
     );
}

export default Item;