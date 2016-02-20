export const increase = () => {
    return {type: 'increase'};
};

export const placePebble = (pebble) => {
    return {
        type: 'placePebble',
        pebble: pebble
    };
};
