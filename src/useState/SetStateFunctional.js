import React from "react";
import { useState } from "react";

// set state (here setClickCount) has asynchronous behaviour
// batching of states won't happen because state is dependent upon previous state
function SetStateFunctional() {
    const [clickCount, setClickCount] = useState(0);

    function clickCallback() {
        setClickCount((previousState) => previousState + 1);
        setClickCount((previousState) => previousState + 1);
        setClickCount((previousState) => previousState + 1);
    }

    return (
        <>
            <button onClick={clickCallback}> Fixed Increment Button </button>
            <div> {clickCount} </div>
            <div> Incrementing by 3 </div>
        </>
    );
}

export default SetStateFunctional;