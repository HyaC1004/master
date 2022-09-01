import {useContext} from "react";
import {DateContext} from "./body"
function Label() {
    const value = useContext(DateContext);
    return (<>
        <small>{value}</small>
    </>  );
}


export default Label;