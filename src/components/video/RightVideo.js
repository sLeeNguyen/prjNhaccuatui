import React, { Component } from 'react';
import BoxChartMV from './BoxChartMV';
import { Link } from 'react-router-dom';

var classNames = require('classnames');
const topic = [
    {name: 'Bếp Hát', path: 'bephat.jpg'},
    {name: 'Remix', path: 'remix.jpg'},
    {name: 'Du lịch', path: 'dulich.jpg'},
    {name: 'TOP HITS 2019', path: 'hit.jpg'},
    {name: 'Cà Phê', path: 'cafe.jpg'}
]

const singerHot = [
    {name: 'Sơn Tùng MTP', path: 'mtp.jpg', isTop: true},
    {name: 'Imagine Dragons', path: 'imaginedragons.jpg', isTop: false},
    {name: 'Justin Bieber', path: 'justinbieber.jpg', isTop: false},
    {name: 'Trang Pháp', path: 'trangphap.jpg', isTop: false},
    {name: 'Châu Khải Phong', path: 'chaukhaiphong.jpg', isTop: false}
]

class RightVideo extends Component {
    render() {
        return(
            <React.Fragment >
                <div className="discovery-playlist">
                    <Link to="#" id="weeklyDiscoveryLink">
                        <div className="content-playlist">
                            <h2>Gợi ý dành cho bạn</h2>
                            <p className="text-detail">Thưởng thức những ca khúc phù hợp nhất với bạn</p>
                            <p className="btn-playlist">
                                <span className="mdi-av-play-arrow icon-play"></span>
                                <span className="btn-text">Nghe bài hát</span>
                            </p>
                        </div>
                    </Link>
                </div>
                { this.props.hide && <div className="advertisement1"></div> }
                { this.props.hide && <div className="advertisement2"></div> }
                <BoxChartMV/>
                { this.props.hide && <div className="box-topic-music">
                    <div className="title-box">
                        <Link to="#" title="BXH MV" className="title">
                            CHỦ ĐỀ HOT
                            <i className="fas fa-chevron-right icon-right"></i>
                        </Link>
                    </div>
                    {topic.map((item, index) => {
                        return (
                            <div className="single-topic" key={index}>
                                <Link to="#" title={item.name}>
                                    <img src={require('../../image/'+item.path)} alt=" "/>
                                </Link>
                            </div>
                        );
                    })}
                </div> }
                { this.props.hide && <div className="list-singer-hot">
                    <div className="title-box">
                        <Link to="#" title="Ca Sĩ | Nghệ Sĩ" className="title">
                            CA SĨ | NGHỆ SĨ
                            <i className="fas fa-chevron-right icon-right"></i>
                        </Link>
                    </div>
                    {singerHot.map((item, index) => {
                        return(
                            <div className={classNames('singer-hot', {top: item.isTop})} key={index}>
                                <Link to="#" title={item.name}>
                                    <img src={require('../../image/' + item.path)} alt=" "/>
                                </Link>
                                <Link to="#" className="name-singer-main" title={item.name}>{item.name}</Link>
                            </div>                           
                        );
                    })}                    
                </div> }

            </React.Fragment>

        );
    }
}

export default RightVideo;