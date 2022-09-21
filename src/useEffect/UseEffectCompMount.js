import React from "react";
import { useEffect } from "react";

function UseEffectCompMount() {

    useEffect(() => {
        console.log('component mounted');
    }, []);

    return (
        <>
            <div>Check console for output</div>
        </>
    );
}

export default UseEffectCompMount;