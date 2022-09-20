import React from "react";
import { useState } from "react";

// set state (here setClickCount) has asynchronous behaviour
// due to batching of states, increment button seems not to be working
function SetStateFunctionalBatched() {
    const [clickCount, setClickCount] = useState(0);

    function clickCallback() {
        setClickCount(() => clickCount + 1);
        setClickCount(() => clickCount + 1);
        setClickCount(() => clickCount + 1);
    }

    return (
        <>
            <button onClick={clickCallback}> Broken Increment Button </button>
            <div> {clickCount} </div>
            <div> Increment button doesn't increment by 3. setClickCount is batched without previousState </div>
        </>
    );
}

export default SetStateFunctionalBatched;