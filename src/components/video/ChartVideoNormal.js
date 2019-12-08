import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var classNames = require('classnames');

class ChartVideoNormal extends Component {
    render() {
        var { item, index } = this.props;
        
        return(
            <div className="box">
                <div className="chart-normal">
                    <Link to="/play" title={item.song} className="video-small">
                        <span className={"special " + classNames({two: index === 1}, {three: index === 2})}>{index+1}</span>
                        <span className="icon-play">
                            <img src={require('../../image/icons_play.png')} alt=" "/>
                        </span>
                        <img src={require('../../videoPic/' + item.path)} className="img-small" alt=" "/>
                    </Link>
                    <div className="overlay-large"></div>
                    <div className="part-overlay"></div>
                </div>
                <div className="info">
                    <Link to="#" className="song-name">{item.song}</Link>
                    {item.name.map((name, index) => {
                        return <Link to="/play" className="singer" key={index}>{name}</Link>;
                    })}
                </div>
            </div>
        );
    }
}

export default ChartVideoNormal;