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

class BaseRotateSquareIterator {
    constructor(table) {
        for (let row = 0; row < table.length; row++) {
            if (table.length != table[row].length) {
                throw "Looks like the table is not square";
            }
        }
        this.table = table;
        this.sideLength = table.length;
        this.colIdx = this.initialColIdx(table);
        this.rowIdx = this.initialRowIdx(table);
    }

    initialRowIdx(table) {
    }

    initialColIdx(table) {
    }

    updateIdx() {
    }

    next() {
        let item = this.table[this.rowIdx][this.colIdx];
        this.updateIdx();
        return item;
    }
}

class RotateSquareClockwiseIterator extends BaseRotateSquareIterator {
    constructor(table) {
        super(table);
    }

    initialRowIdx(table) {
        return table.length - 1;
    }

    initialColIdx(table) {
        return 0;
    }

    updateIdx() {
        this.rowIdx--;
        if (this.rowIdx < 0) {
            this.rowIdx = this.table.length - 1;

            this.colIdx++;
        }
    }
}

class RotateSquareCounterClockwiseIterator extends BaseRotateSquareIterator {
    constructor(table) {
        super(table);
    }

    initialRowIdx(table) {
        return 0;
    }

    initialColIdx(table) {
        return table[0].length - 1;
    }

    updateIdx() {
        this.rowIdx++;
        if (this.rowIdx >= this.table.length) {
            this.rowIdx = 0;
            this.colIdx--;
        }
    }
}

const slots = (state = initSlots(), action) => {
    switch (action.type) {
        case 'placePebble':
            return state.map(t => slotRow(t, action));
        case 'rotate':
            let rotatedSquareIterator;
            if (directionClockwise === action.direction) {
                rotatedSquareIterator = new RotateSquareClockwiseIterator(state);
            } else {
                rotatedSquareIterator = new RotateSquareCounterClockwiseIterator(state);
            }

            let slots = [];

            for (let row = 0; row < rotatedSquareIterator.sideLength; row++) {
                slots[row] = [];
                for (let col = 0; col < rotatedSquareIterator.sideLength; col++) {
                    slots[row][col] = rotatedSquareIterator.next();
                }
            }

            return slots;
        default:
            return state;
    }
};

export { slots, configure };
