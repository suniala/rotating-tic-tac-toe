const initialState = () => {
    return {player: 'black', phase: 'place'};
};

const turn = (state = initialState(), action) => {
    switch (action.type) {
        case 'rotate':
            let nextPlayer;
            if (state.player === 'white') {
                nextPlayer = 'black';
            } else {
                nextPlayer = 'white';
            }
            return Object.assign(initialState(), {player: nextPlayer});
        case 'placePebble':
            return Object.assign({}, state, {phase: 'rotate'});
        default:
            return state;
    }
};

export default turn
