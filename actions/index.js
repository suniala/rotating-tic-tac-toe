export const placePebble = (id, pebble) => {
    return {
        type: 'placePebble',
        id: id,
        pebble: pebble
    };
};

export const directionCounterClockwise = 'counterClockwise';
export const directionClockwise = 'clockwise';
export const rotate = (direction) => {
    return {
        type: 'rotate',
        direction: direction
    }
};

export const completeTurn = () => {
    return {
        type: 'completeTurn'
    };
};