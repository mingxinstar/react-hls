'use strict';

import React, { PropTypes } from 'react';
import hls from 'hls.js';

class ReactHls extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerId : Date.now()
        };
    }

    componentDidMount () {

    }

    render () {
        let { playerId } = this.state;

        return (
            <div key={playerId} className="player-area">
                <video className="hls-player" id={`react-hls-${playerId}`}></video>
            </div>
        )
    }
}

ReactHls.propTypes = {
    url : PropTypes.string.isRequired
}

export default ReactHls;
