import expect from 'expect'
import { slots, configure as configureSlots } from '../../reducers/slots'

configureSlots(2, 2);

const defaultSlots = () => (
        [
            [
                {
                    id: 1,
                    pebble: null
                },
                {
                    id: 2,
                    pebble: null
                }
            ],
            [
                {
                    id: 3,
                    pebble: null
                },
                {
                    id: 4,
                    pebble: null
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
            id: 3,
            pebble: 'white'
        });
        expect(state).toEqual(expected);

        expected[0][1].pebble = 'black';
        state = slots(state, {
            type: 'placePebble',
            id: 2,
            pebble: 'black'
        });
        expect(state).toEqual(expected);
    });
});