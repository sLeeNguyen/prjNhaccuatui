import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChartVideoLarge extends Component {
    render() {
        var { item } = this.props;

        return(
            <div className="box">
                <div className="chart-video-large">
                    <Link to="/play" title={item.song} className="img">
                        <span className="special-1">1</span>
                        <span className="icon-play">
                            <img src={require('../../image/icons_play.png')} alt=" "/>
                        </span>
                        <img src={require('../../videoPic/' + item.path)} className="avatar" alt=" "/>
                    </Link>
                    <div className="overlay-large"></div>
                    <div className="name-video-large">
                        <span className="name">{item.song}</span>
                        <span className="singer-name">{item.name}</span>
                    </div>
                    <div className="part-overlay"></div>
                </div>
            </div>
        );
    }
}

export default ChartVideoLarge;