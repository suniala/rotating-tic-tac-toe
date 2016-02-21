import { directionCounterClockwise, directionClockwise} from '../actions'

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

class CRotationIterator {
    constructor(table) {
        this.table = table;
        this.colIdx = 0;
        this.rowIdx = table.length - 1;
    }

    next() {
        let item = this.table[this.rowIdx][this.colIdx];

        this.rowIdx--;
        if (this.rowIdx < 0) {
            this.rowIdx = this.table.length - 1;

            this.colIdx++;
        }

        return item;
    }
}

class CCRotationIterator {
    constructor(table) {
        this.table = table;
        this.colIdx = table[0].length - 1;
        this.rowIdx = 0;
    }

    next() {
        let item = this.table[this.rowIdx][this.colIdx];

        this.rowIdx++;
        if (this.rowIdx >= this.table.length) {
            this.rowIdx = 0;
            this.colIdx--;
        }

        return item;
    }
}

const slots = (state = initSlots(), action) => {
    switch (action.type) {
        case 'placePebble':
            return state.map(t => slotRow(t, action));
        case 'rotate':
            if (directionClockwise === action.direction) {
                let slots = [];
                let iterator = new CRotationIterator(state);

                for (let row = 0; row < state.length; row++) {
                    slots[row] = [];
                    for (let col = 0; col < state[0].length; col++) {
                        slots[row][col] = iterator.next();
                    }
                }

                return slots;
            } else {
                let slots = [];
                let iterator = new CCRotationIterator(state);

                for (let row = 0; row < state.length; row++) {
                    slots[row] = [];
                    for (let col = 0; col < state[0].length; col++) {
                        slots[row][col] = iterator.next();
                    }
                }

                return slots;
            }
        default:
            return state;
    }
};

export { slots, configure };
