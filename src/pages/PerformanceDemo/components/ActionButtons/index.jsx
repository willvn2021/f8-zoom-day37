import React from "react";

const ActionButtons = React.memo(({ onIncrement, onReset }) => {
    console.log("Rendering: ActionButtons");
    return (
        <div>
            <button onClick={onIncrement}>Increment Count</button>
            <button onClick={onReset}>Reset Count</button>
        </div>
    );
});

ActionButtons.displayName = "ActionButtons";

export default ActionButtons;
