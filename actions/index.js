export const placePebble = (col, row, pebble) => {
    return {
        type: 'placePebble',
        col: col,
        row: row,
        pebble: pebble
    };
};

export const completeTurn = () => {
    return {
        type: 'completeTurn'
    };
};