'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import Player from 'components/react-hls';

import "styles/index.scss";

class Index extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            hlsUrl : 'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8',
            destroy : false
        };

        this._handleInputBlur = this._handleInputBlur.bind(this);
        this._handleEnter = this._handleEnter.bind(this);
        this._handleDestroyClick = this._handleDestroyClick.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return !_.isEqual(nextState, this.state) || !_.isEqual(nextProps, this.props);
    }

    _handleInputBlur (e) {
        this.setState({
            hlsUrl : e.target.value
        });
    }

    _handleEnter (e) {
        if (e.keyCode === 13) {
            this.setState({
                hlsUrl : e.target.value
            });
        }
    }

    _handleDestroyClick () {
        this.setState({
            destroy : true
        })
    }

    render () {
        let { hlsUrl, destroy } = this.state;

        return (
            <div>
                <div className="url-input-area">
                    <label>hsl url : </label>
                    <input type="text"
                           defaultValue={hlsUrl}
                           onBlur={this._handleInputBlur}
                           onKeyUp={this._handleEnter}/>
                </div>
                {!destroy ? <Player url={hlsUrl} videoProps={{ loop : true }} /> : null}
                <br />
                <button className="destroy-btn"
                        onClick={this._handleDestroyClick}>Destroy Video</button>
            </div>
        )
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('container'));
