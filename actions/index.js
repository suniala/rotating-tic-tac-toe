export const placePebble = (pebble) => {
    return {
        type: 'placePebble',
        pebble: pebble
    };
};

export const completeTurn = () => {
    return {
        type: 'completeTurn'
    };
};