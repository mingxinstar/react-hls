'use strict';

import React, { PropTypes } from 'react';
import Hls from 'hls.js';

class ReactHls extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerId : Date.now()
        };
    }

    componentDidUpdate () {
        console.log('componentDidUpdate');

        this._initPlayer();
    }

    componentDidMount () {
        this._initPlayer();
    }

    _initPlayer () {
        let { url } = this.props;
        let { playerId } = this.state;
        let $video = document.getElementById(`react-hls-${playerId}`);
        let hls = new Hls();

        hls.loadSource(url);
        hls.attachMedia($video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            $video.play();
        });
    }

    render () {
        console.log('render video');

        let { playerId } = this.state;

        return (
            <div key={playerId} className="player-area">
                <video className="hls-player" id={`react-hls-${playerId}`} controls></video>
            </div>
        )
    }
}

ReactHls.propTypes = {
    url : PropTypes.string.isRequired
}

export default ReactHls;
