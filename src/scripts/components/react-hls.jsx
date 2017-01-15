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
        if (this.hls) {
            this.hls.destroy();
        }

        let { url, autoplay, hlsConfig, controls } = this.props;
        let { playerId } = this.state;
        let $video = document.getElementById(`react-hls-${playerId}`);
        let hls = new Hls(hlsConfig);

        hls.loadSource(url);
        hls.attachMedia($video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (autoplay) {
                $video.play();
            }
        });

        this.hls = hls;
    }

    render () {
        let { playerId } = this.state;
        let { controls } = this.props;

        return (
            <div key={playerId} className="player-area">
                <video className="hls-player" id={`react-hls-${playerId}`} controls={controls}></video>
            </div>
        )
    }
}

ReactHls.propTypes = {
    url : PropTypes.string.isRequired,
    autoplay : PropTypes.bool,
    hlsConfig : PropTypes.object, //https://github.com/dailymotion/hls.js/blob/master/API.md#fine-tuning
    controls : PropTypes.bool
}

ReactHls.defaultProps = {
    autoplay : true,
    hlsConfig : {},
    controls : true
}

export default ReactHls;
