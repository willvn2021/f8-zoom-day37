import PropTypes from "prop-types";
import React from "react";

const CounterDisplay = React.memo(({ count }) => {
    console.log("Rendering: CounterDisplay");
    return <div>{count}</div>;
});

CounterDisplay.displayName = "CounterDisplay";

CounterDisplay.PropTypes = {
    count: PropTypes.number.isRequired,
};

export default CounterDisplay;
