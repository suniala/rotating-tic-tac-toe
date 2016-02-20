import React, { PropTypes } from 'react'

const Slot = ({ pebble, turn, onPlacePebble }) => (
        <div>
            <div style={{width: "100px", height: "20px", border: "1px solid black", display: "inline-block"}}>
                {pebble}
            </div>
            <button onClick={() => {onPlacePebble(turn)}}>Set {turn}</button>
        </div>
);

Slot.propTypes = {
    pebble: PropTypes.string,
    turn: PropTypes.string.isRequired,
    onPlacePebble: PropTypes.func.isRequired
};

export default Slot
