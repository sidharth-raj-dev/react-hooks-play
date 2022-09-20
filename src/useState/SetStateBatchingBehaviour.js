import React from "react";
import { useState } from "react";

// set state (here setClickCount) has asynchronous behaviour
// the 'count' variable might not be what we are expecting
function SetStateBatchingBehaviour() {
    const [clickCount, setClickCount] = useState(0);

    function clickCallback() {
        setClickCount(clickCount + 1);
        setClickCount(clickCount + 1);
        setClickCount(clickCount + 1);
    }

    return (
        <>
            <button onClick={clickCallback}> Broken Increment Button </button>
            <div> {clickCount} </div>
            <div> It should have incremented by 3 (as there are 3 set states) but only incrementing by 1!! </div>
            <div> We need functional setState </div>
        </>
    );
}

export default SetStateBatchingBehaviour;
