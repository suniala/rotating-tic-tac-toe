import React, { PropTypes } from 'react'
import Slot from './Slot'

const SlotGrid = ({ slots, turn, onPlacePebble }) => (
        <ol>
            {
                slots.map(slotRow => (
                                  <li>
                                      <ol>
                                          {
                                              slotRow.map(slot =>
                                                                  <Slot
                                                                          row={slot.row}
                                                                          col={slot.col}
                                                                          pebble={slot.pebble}
                                                                          onClick={() => onPlacePebble(slot.col, slot.row, turn)}
                                                                  />
                                              )
                                          }
                                      </ol>
                                  </li>
                          )
                )
            }
        </ol>
);

SlotGrid.propTypes = {
    slots: PropTypes.arrayOf(
            PropTypes.arrayOf(
                    PropTypes.shape(
                            {
                                col: PropTypes.number.isRequired,
                                row: PropTypes.number.isRequired,
                                pebble: PropTypes.string
                            }
                    )
            ).isRequired
    ).isRequired,
    turn: PropTypes.string.isRequired,
    onPlacePebble: PropTypes.func.isRequired
};

export default SlotGrid;
