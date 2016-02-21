import React, { PropTypes } from 'react'
import Slot from './Slot'

const SlotGrid = ({ slots, turn, onPlacePebble }) => (
        <table>
            {
                slots.map(slotRow => (
                                  <tr>
                                      {
                                          slotRow.map(slot =>
                                                              <td>
                                                                  <Slot
                                                                          pebble={slot.pebble}
                                                                          onClick={() => onPlacePebble(slot.id, turn)}
                                                                  />
                                                              </td>
                                          )
                                      }
                                  </tr>
                          )
                )
            }
        </table>
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
