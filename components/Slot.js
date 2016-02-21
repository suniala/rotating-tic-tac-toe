import React, { PropTypes } from 'react'

const Slot = ({ pebble, enabled, onClick }) => (
        <div>
            <button
                    disabled={!enabled}
                    onClick={() => {onClick()}}
                    style={{width: "30px", height: "30px", overflow: "hidden"}}>
                {pebble}
            </button>
        </div>
);

Slot.propTypes = {
    enabled: PropTypes.bool.isRequired,
    pebble: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Slot
