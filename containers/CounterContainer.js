import { connect } from 'react-redux'
import { increase } from '../actions'
import Counter from '../components/Counter'

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => {
            dispatch(increase());
        }
    }
}

const CounterContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(Counter);

export default CounterContainer;
