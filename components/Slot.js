import React, { PropTypes } from 'react'

const Slot = ({ pebble, onClick }) => (
        <div>
            <div style={{width: "100px", height: "20px", border: "1px solid black", display: "inline-block"}}>
                {pebble}
            </div>
            <button onClick={() => {onClick()}}>Place pebble</button>
        </div>
);

Slot.propTypes = {
    pebble: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Slot
