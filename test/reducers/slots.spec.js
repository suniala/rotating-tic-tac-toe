import expect from 'expect'
import { directionCounterClockwise, directionClockwise} from '../../actions'
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

const slot = (id, pebble) => {
    return {
        id,
        pebble
    };
};

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

    it('should handle rotate', () => {
        let state = [
            [slot(1, null), slot(2, 'white')],
            [slot(3, 'black'), slot(4, null)]
        ];

        state = slots(state, {
            type: 'rotate',
            direction: directionClockwise
        });
        expect(state).toEqual(
                [
                    [slot(3, 'black'), slot(1, null)],
                    [slot(4, null), slot(2, 'white')]
                ]
        );

        state = slots(state, {
            type: 'rotate',
            direction: directionCounterClockwise
        });
        expect(state).toEqual(
                [
                    [slot(1, null), slot(2, 'white')],
                    [slot(3, 'black'), slot(4, null)]
                ]
        );
    });
});
