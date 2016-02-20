import { connect } from 'react-redux'
import { placePebble } from '../actions'
import Slot from '../components/Slot'

function mapStateToProps(state) {
    return {
        pebble: state.slot
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPlacePebble: (pebble) => {
            dispatch(placePebble(pebble));
        }
    }
}

const Grid = connect(
        mapStateToProps,
        mapDispatchToProps
)(Slot);

export default Grid;
