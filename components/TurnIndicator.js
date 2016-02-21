import React, { PropTypes } from 'react'

const TurnIndicator = ({ turn }) => (
        <div>
            <p>
                Current turn: {turn.player}
            </p>
        </div>
);

TurnIndicator.propTypes = {
    turn: PropTypes.string.isRequired
};

export default TurnIndicator
