import { connect } from 'react-redux'
import { completeTurn, placePebble } from '../actions'
import Slot from '../components/Slot'

function mapStateToProps(state) {
    return {
        pebble: state.slot,
        turn: state.turn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPlacePebble: (pebble) => {
            dispatch(placePebble(pebble));
            dispatch(completeTurn());
        }
    }
}

const Grid = connect(
        mapStateToProps,
        mapDispatchToProps
)(Slot);

export default Grid;
