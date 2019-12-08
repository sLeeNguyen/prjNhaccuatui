import React, { Component } from 'react';
import Video from './Video';

import './video.css';

var classNames = require('classnames');

class ListVideoDetail extends Component {
    constructor() {
        super();

        this.state = {
            selected: 1
        }
    }

    handleClick(select) {
        return () => this.setState({selected: select});
    }

    render() {
        var { listMV, onClick } = this.props;

        return(
            <div className="list-box">
                <div className="title-box">
                    <h1>{listMV.title}</h1>
                    <div className="btn-view-select">
                        <a href="#" title="Hot Nhất" className={classNames({active: this.state.selected === 1})} onClick={this.handleClick(1)}>Hot Nhất</a>
                        <a href="#" title="Mới Nhất Nhất" className={classNames({active: this.state.selected === 2})} onClick={this.handleClick(2)}>Mới Nhất</a>
                    </div>
                </div>
                <div className="list-video">
                    {
                        listMV.list.map((item, index) => {
                            return <Video item={item} key={index} index={index}/>;                         
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListVideoDetail;