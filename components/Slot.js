import React, { PropTypes } from 'react'

const Slot = ({ pebble, onPlacePebble }) => (
        <div>
            <div style={{width: "100px", height: "20px", border: "1px solid black", display: "inline-block"}}>
                {pebble}
            </div>
            <button onClick={() => {onPlacePebble('black')}}>Set black</button>
            <button onClick={() => {onPlacePebble('white')}}>Set white</button>
        </div>
);

Slot.propTypes = {
    pebble: PropTypes.string,
    onPlacePebble: PropTypes.func.isRequired
};

export default Slot
