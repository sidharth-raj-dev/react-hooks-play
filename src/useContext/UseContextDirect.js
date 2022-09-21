import React from 'react';
import { useContext } from "react";
import Context from './store';

function UseContextDirect() {
    // using context
    console.log(useContext(Context));

    return (
        <div> check console for context value </div>
    )
}

export default UseContextDirect;
