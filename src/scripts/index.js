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
            hlsUrl : 'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8'
        }
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

    render () {
        let { hlsUrl } = this.state;

        return (
            <div>
                <div className="url-input-area">
                    <label>hsl url : </label>
                    <input type="text"
                           defaultValue={hlsUrl}
                           onBlur={this._handleInputBlur.bind(this)}
                           onKeyUp={this._handleEnter.bind(this)}/>
                </div>
                <Player url={hlsUrl} />
            </div>
        )
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('container'));
