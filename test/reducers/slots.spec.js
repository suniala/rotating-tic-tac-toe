import expect from 'expect'
import { slots, configure as configureSlots } from '../../reducers/slots'

configureSlots(2, 2);

const defaultSlots = () => (
        [
            [
                {
                    "col": 0,
                    "pebble": null,
                    "row": 0
                },
                {
                    "col": 1,
                    "pebble": null,
                    "row": 0
                }
            ],
            [
                {
                    "col": 0,
                    "pebble": null,
                    "row": 1
                },
                {
                    "col": 1,
                    "pebble": null,
                    "row": 1
                }
            ]
        ]
);

describe('slots reducer', () => {
    it('should handle initial state', () => {
        let actual = slots(undefined, {});
        expect(actual).toEqual(defaultSlots());
    });

    it('should handle placePebble', () => {
        let expected = defaultSlots();
        expected[1][0].pebble = 'white';

        let state = defaultSlots();
        state = slots(state, {
            type: 'placePebble',
            col: 0,
            row: 1,
            pebble: 'white'
        });
        expect(state).toEqual(expected);

        expected[0][1].pebble = 'black';
        state = slots(state, {
            type: 'placePebble',
            col: 1,
            row: 0,
            pebble: 'black'
        });
        expect(state).toEqual(expected);
    });
});