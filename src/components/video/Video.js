import React, { Component } from 'react';
import image from '../../videoPic/henyeu.jpg';
import icon_play from '../../image/icons_play.png';

import './video.css';

class Video extends Component {
    render() {
        return(
            <div className="box-video">
                <div className="video-main">
                    <a href="#" className="video-link">
                        <span className="view-mv">
                            <span className="icon-view"><i class="fas fa-eye view"></i></span>
                            <span className="counter">6.969.566</span>
                        </span>
                        <img src= {image} className="video-img"/>
                    </a>
                    <div className="overlay">
                        <img src={icon_play} className="icon-play" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;