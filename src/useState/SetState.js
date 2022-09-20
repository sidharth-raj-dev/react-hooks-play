import React from "react";
import { useState } from "react";

function SetState() {
    const [input, setInput] = useState('');

    function changeCallback(event) {
        setInput(event.target.value);
    }

    return (
        <>
            <input type="text" onChange={changeCallback}></input>
            <div> you have entered {input} </div>
        </>
    );
}

export default SetState;