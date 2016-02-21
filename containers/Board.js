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
        onPlacePebble: (id, turn) => {
            dispatch(placePebble(id, turn));
            dispatch(completeTurn());
        }
    };
}

const Board = connect(
        mapStateToProps,
        mapDispatchToProps
)(SlotGrid);

export default Board;
