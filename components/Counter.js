import React, { PropTypes } from 'react'

const Counter = ({ value, onIncreaseClick }) => (
        <div>
            <span>{value}</span>
            <button onClick={onIncreaseClick}>Increase</button>
        </div>
);

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

export default Counter
