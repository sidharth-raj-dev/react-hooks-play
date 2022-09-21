import React from "react";
import { useState } from "react";
import Comp from "./Comp";

function UseEffectCompUnmount() {
    const [toggle, setToggle] = useState(true);

    function toggleCallback() {
        setToggle(!toggle);
    }

    return (
        <>
            {toggle && <Comp />}
            <button onClick={toggleCallback}> Click Me! </button>
            <div> Click to hide/unmount above component </div>
        </>
    );
}

export default UseEffectCompUnmount;