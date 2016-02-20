const slot = (state = null, action) => {
    switch (action.type) {
        case 'placePebble':
            return action.pebble;
        default:
            return state;
    }
};

export default slot
