import React from "react";
import { useState, useEffect } from "react";

function UseEffectCompEveryStateUpdate() {
    const [clickCount, setClickCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log('clickCount value is ' + clickCount);
        console.log('toggle value is ' + toggle);
    });

    function clickCallback() {
        setClickCount(clickCount + 1);
    }

    function toggleCallback() {
        setToggle(!toggle);
    }

    return (
        <>
            <button onClick={clickCallback}> Increment Button </button>
            <button onClick={toggleCallback}> Toggle </button>
            <div>Check console for message after every state update</div>
        </>
    );
}

export default UseEffectCompEveryStateUpdate;