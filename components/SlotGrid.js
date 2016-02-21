import React, { PropTypes } from 'react'
import Slot from './Slot'

const SlotGrid = ({ slots, turn, onPlacePebble, onRotateCounterClockwise, onRotateClockwise }) => (
        <div>
            <button disabled={turn.phase !== 'rotate'} onClick={onRotateCounterClockwise}>counter clockwise</button>
            <button disabled={turn.phase !== 'rotate'} onClick={onRotateClockwise}>clockwise</button>
            <table>
                {
                    slots.map(slotRow => (
                                      <tr>
                                          {
                                              slotRow.map(slot =>
                                                                  <td>
                                                                      <Slot
                                                                              enabled={turn.phase === 'place' && slot.pebble == null}
                                                                              pebble={slot.pebble}
                                                                              onClick={() => onPlacePebble(slot.id, turn.player)}
                                                                      />
                                                                  </td>
                                              )
                                          }
                                      </tr>
                              )
                    )
                }
            </table>
        </div>
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
    turn: React.PropTypes.shape(
            {
                player: PropTypes.string.isRequired,
                phase: PropTypes.string.isRequired
            }
    ).isRequired,
    onPlacePebble: PropTypes.func.isRequired,
    onRotateCounterClockwise: PropTypes.func.isRequired,
    onRotateClockwise: PropTypes.func.isRequired
};

export default SlotGrid;
