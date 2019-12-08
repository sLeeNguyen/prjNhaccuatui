import React, { Component } from 'react';
import Video from './Video';

import './video.css';

class ListVideo extends Component {
    render() {
        var { listMV, onClick } = this.props;

        return(
            <div className="list-box">
                <div className="title-box">
                    <a className="title" title={listMV.title} href="#">
                        {listMV.title}
                        <i className="fas fa-chevron-right icon-right"></i>
                    </a>
                    <div className="btn-view-select">
                    {
                        listMV.option.map((item, index) => {
                            return <a href="#" title={item} key={index} onClick={onClick}>{item}</a>;
                        })
                    }
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

export default ListVideo;