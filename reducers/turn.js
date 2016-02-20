const turn = (state = 'white', action) => {
    switch (action.type) {
        case 'completeTurn':
            if (state === 'white') {
                return 'black';
            } else {
                return 'white';
            }
        default:
            return state;
    }
};

export default turn
