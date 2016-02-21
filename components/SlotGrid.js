import React, { PropTypes } from 'react'
import Slot from './Slot'

const SlotGrid = ({ slots, onPlacePebble }) => (
        <ol>
            {slots.map(slot =>
                               <Slot
                                       row={slot.row}
                                       col={slot.col}
                                       pebble={slot.pebble}
                                       onClick={() => onPlacePebble(slot.col, slot.row)}
                               />
            )}
        </ol>
);

SlotGrid.propTypes = {
    slots: PropTypes.arrayOf(
            PropTypes.shape(
                    {
                        col: PropTypes.number.isRequired,
                        row: PropTypes.number.isRequired,
                        pebble: PropTypes.string
                    }
            ).isRequired
    ).isRequired,
    onPlacePebble: PropTypes.func.isRequired
};

export default SlotGrid;
