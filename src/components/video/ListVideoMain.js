import React, { Component } from 'react';
import Video from './Video';
import { Link } from 'react-router-dom';

import './video.css';

class ListVideo extends Component {
    render() {
        var { listMV, onClick } = this.props;

        return(
            <div className="list-box">
                <div className="title-box">
                    <Link to="#" className="title" title={listMV.title}>
                        {listMV.title}
                        <i className="fas fa-chevron-right icon-right"></i>
                    </Link>
                    <div className="btn-view-select">
                    {
                        listMV.option.map((item, index) => {
                            return <Link to="#" title={item} key={index} onClick={onClick}>{item}</Link>;
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