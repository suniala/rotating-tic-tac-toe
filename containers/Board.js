import { connect } from 'react-redux'
import { completeTurn, placePebble } from '../actions'
import SlotGrid from '../components/SlotGrid'

function mapStateToProps(state) {
    return {
        slots: state.slots,
        turn: state.turn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPlacePebble: (col, row, turn) => {
            dispatch(placePebble(col, row, turn));
            dispatch(completeTurn());
        }
    };
}

const Board = connect(
        mapStateToProps,
        mapDispatchToProps
)(SlotGrid);

export default Board;
