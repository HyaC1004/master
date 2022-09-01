import { memo } from "react";

const HeadLine = memo (function ({counts}) {
    return (<>
    <div>
     남은 목표 : {counts}
    </div>
    <hr />
    </>);
})

export default HeadLine;