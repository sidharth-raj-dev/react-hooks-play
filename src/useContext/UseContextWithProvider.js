import React from 'react'
import Context from './store';
import Comp from './Comp';

function UseContextWithProvider() {
    return (
        <Context.Provider value={47}>
            <Comp />
        </Context.Provider>
    )
}

export default UseContextWithProvider;