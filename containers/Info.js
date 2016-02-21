import { connect } from 'react-redux'
import TurnIndicator from '../components/TurnIndicator'

function mapStateToProps(state) {
    return {
        turn: state.turn
    }
}

const Info = connect(
        mapStateToProps
)(TurnIndicator);

export default Info;
