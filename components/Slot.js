import React, { PropTypes } from 'react'

const Slot = ({ pebble, onClick }) => (
        <div>
            <div
                    onClick={() => {onClick()}}
                    style={{width: "20px", height: "20px", border: "1px solid black", overflow: "hidden"}}>
                {pebble}
            </div>
        </div>
);

Slot.propTypes = {
    pebble: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Slot
