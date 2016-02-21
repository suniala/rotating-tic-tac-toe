let colCount = 5;
let rowCount = 5;

const configure = (newColCount, newRowCount) => {
    colCount = newColCount;
    rowCount = newRowCount;
};

class IdSequence {
    constructor() {
        this.sequence = 0;
    }

    next() {
        return ++this.sequence;
    }
}

const initSlots = () => {
    let slots = [];
    let idSequence = new IdSequence();

    for (let row = 0; row < rowCount; row++) {
        slots[row] = [];
        for (let col = 0; col < colCount; col++) {
            slots[row][col] = {
                id: idSequence.next(),
                pebble: null
            };
        }
    }
    return slots;
};

const slot = (state, action) => {
    switch (action.type) {
        case 'placePebble':
            if (state.id !== action.id) {
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
