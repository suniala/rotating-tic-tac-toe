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
                                                                          pebble={slot.pebble}
                                                                          onClick={() => onPlacePebble(slot.id, turn)}
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
                                id: PropTypes.number.isRequired,
                                pebble: PropTypes.string
                            }
                    )
            ).isRequired
    ).isRequired,
    turn: PropTypes.string.isRequired,
    onPlacePebble: PropTypes.func.isRequired
};

export default SlotGrid;
