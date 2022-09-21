import React from "react";
// import SetState from "./src/useState/SetState";
// import SetStateBatchingBehaviour from "./src/useState/SetStateBatchingBehaviour";
// import SetStateFunctional from "./src/useState/SetStateFunctional";
// import SetStateFunctionalBatched from "./src/useState/SetStateFunctionalBatched";
// import SetStateClassCompWithCallback from "./src/useState/SetStateClassCompWithCallback";
// import UseEffectCompMount from "./src/useEffect/UseEffectCompMount";
// import UseEffectCompEveryStateUpdate from "./src/useEffect/UseEffectCompEveryStateUpdate";
// import UseEffectCompDependency from "./src/useEffect/UseEffectCompDependency";
// import UseEffectCompUnmount from "./src/useEffect/unmount/UseEffectCompUnmount";
// import UseContextDirect from "./src/useContext/UseContextDirect";
import UseContextWithProvider from "./src/useContext/UseContextWithProvider";

const App = () => {
    return (
        <div>
            <UseContextWithProvider />
        </div>
    );
};

export default App;
