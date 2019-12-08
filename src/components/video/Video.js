import React, { Component } from 'react';
import icon_play from '../../image/icons_play.png';
import { Link } from 'react-router-dom';

import './video.css';

var classNames = require('classnames');

class Video extends Component {
    format(x) {
        return isNaN(x)?"":x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render(){
        var { item, index } = this.props;
        
        return(
            <div className={ classNames('box-video', {last: (index%4 === 3)}) }>
                <div className="video-main">
                    <Link to="/play" className="video-link">
                        <span className="view-mv">
                            <span className="icon-view"><i className="fas fa-eye view"></i></span>
                            <span className="counter">{this.format(item.viewCount)}</span>
                        </span>
                        <img src= {require('../../videoPic/' + item.path)} className="video-img" alt=" "/>
                        <span className="time-video">{item.time}</span>
                        <div className="overlay">
                            <img src={icon_play} className="icon-play" alt=" "/>
                        </div>
                    </Link>
                    
                </div>
                <Link to="#" className="video-name" title={item.song}>{item.song}</Link>
                <div className="singer">
                    {item.name.map((name, index) => {
                        return <Link to="#" className="singer-name" key={index}>{name}</Link>;
                    })}
                </div>
            </div>
        );
    }
}

export default Video;