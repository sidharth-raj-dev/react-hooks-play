import React from "react";
import { useState, useEffect } from "react";

// below useEffect will run after 
// component mount and
// when any of its dependency state changes
function UseEffectCompDependency() {
    const [clickCount, setClickCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    // below useEffect gets called when state of toggle variable changes
    useEffect(() => {
        console.log('clickCount value is ' + clickCount);
        console.log('toggle value is ' + toggle);
    }, [toggle]);

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
            <div> {`clickcount state-> `} {clickCount} </div>
            <div> {`toggle state-> `} {toggle.toString()} </div>
            <div>Check console for message after toggle state update</div>
        </>
    );
}

export default UseEffectCompDependency;