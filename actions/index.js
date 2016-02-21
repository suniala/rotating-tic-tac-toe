export const placePebble = (id, pebble) => {
    return {
        type: 'placePebble',
        id: id,
        pebble: pebble
    };
};

export const completeTurn = () => {
    return {
        type: 'completeTurn'
    };
};