let colCount = 5;
let rowCount = 5;

const configure = (newColCount, newRowCount) => {
    colCount = newColCount;
    rowCount = newRowCount;
};

const initSlots = () => {
    let slots = [];
    for (let row = 0; row < rowCount; row++) {
        slots[row] = [];
        for (let col = 0; col < colCount; col++) {
            slots[row][col] = {
                col: col,
                row: row,
                pebble: null
            };
        }
    }
    return slots;
};

const slot = (state, action) => {
    switch (action.type) {
        case 'placePebble':
            if (state.col !== action.col || state.row !== action.row) {
                return state;
            }

            return Object.assign({}, state, {
                pebble: action.pebble
            });
        default:
            return state;
    }
};

const slotRow = (state, action) => {
    switch (action.type) {
        case 'placePebble':
            if (state[0].row !== action.row) {
                return state;
            }

            return state.map(t => slot(t, action));
        default:
            return state;
    }
};

const slots = (state = initSlots(), action) => {
    switch (action.type) {
        case 'placePebble':
            return state.map(t => slotRow(t, action));
        default:
            return state;
    }
};

export { slots, configure };
