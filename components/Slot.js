import React, { PropTypes } from 'react'

const Slot = ({ col, row, pebble, onPlacePebble }) => (
        <div>
            <div style={{width: "100px", height: "20px", border: "1px solid black", display: "inline-block"}}>
                {pebble}
            </div>
            <button onClick={() => {onPlacePebble()}}>Place pebble</button>
        </div>
);

Slot.propTypes = {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    pebble: PropTypes.string,
    onPlacePebble: PropTypes.func.isRequired
};

export default Slot
