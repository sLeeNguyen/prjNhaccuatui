import React, { Component } from 'react';
import './musicstyle.css';
import icon_play from '../../image/icons_play.png';

class MusicItem extends Component {
    render() {
        var { item } = this.props;

        return (
            <div className="music-item" >
                <a href="#" className="mi-item-link">
                    <div className="mil-album-info">
                        <span className="view-listen">
                            <i className="fas fa-headphones-alt icon-listen"></i>
                            <span className="listen-count">{item.countListen}</span>
                        </span>
                        <div className="overlay">
                            <img src={icon_play} className="icon-play"/>
                        </div>
                    </div>
                    <span className="avatar"><img src={require('../../musicPic/'+item.path)} /></span>
                </a>
                <a href="#" className="mi-song-name">{item.name}</a>
                <div className="mi-date-release">{item.date}</div>
            </div>
        );
    }
}
export default MusicItem;