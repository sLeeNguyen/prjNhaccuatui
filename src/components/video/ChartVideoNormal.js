import React, { Component } from 'react';
var classNames = require('classnames');

class ChartVideoNormal extends Component {
    render() {
        var { item, index } = this.props;
        
        return(
            <div className="box">
                <div className="chart-normal">
                    <a title={item.song} href="#" className="video-small">
                        <span className={"special " + classNames({two: index === 1}, {three: index === 2})}>{index+1}</span>
                        <span className="icon-play">
                            <img src={require('../../image/icons_play.png')} alt=" "/>
                        </span>
                        <img src={require('../../videoPic/' + item.path)} className="img-small" alt=" "/>
                    </a>
                    <div className="overlay-large"></div>
                    <div className="part-overlay"></div>
                </div>
                <div className="info">
                    <a href="#" className="song-name">{item.song}</a>
                    {item.name.map((name, index) => {
                        return <a href="#" className="singer" key={index}>{name}</a>;
                    })}
                </div>
            </div>
        );
    }
}

export default ChartVideoNormal;