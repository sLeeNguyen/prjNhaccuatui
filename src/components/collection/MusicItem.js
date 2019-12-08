import React, { Component } from 'react';
import './musicstyle.css';
import icon_play from '../../image/icons_play.png';

import { Link } from "react-router-dom";

class MusicItem extends Component {
    format(x) {
        return isNaN(x)?"":x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        var { item } = this.props;

        return (
            <div className="music-item" >
                <Link to="/play" className="mi-item-link" title={item.name}>
                    <div className="mil-album-info">
                        <span className="view-listen">
                            <i className="fas fa-headphones-alt icon-listen"></i>
                            <span className="listen-count">{this.format(item.countListen)}</span>
                        </span>
                        <div className="overlay">
                            <img src={icon_play} className="icon-play" alt=" "/>
                        </div>
                    </div>
                    <span className="avatar"><img src={require('../../musicPic/'+item.path)} alt=" "/></span>
                </Link>
                <Link to="#" className="mi-song-name">{item.name}</Link>
                <div className="mi-date-release">{item.date}</div>
            </div>
        );
    }
}
export default MusicItem;