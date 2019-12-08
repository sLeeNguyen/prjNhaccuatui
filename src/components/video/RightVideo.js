import React, { Component } from 'react';
import BoxChartMV from './BoxChartMV';

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
                    <a id="weeklyDiscoveryLink" href="#">
                        <div className="content-playlist">
                            <h2>Gợi ý dành cho bạn</h2>
                            <p className="text-detail">Thưởng thức những ca khúc phù hợp nhất với bạn</p>
                            <p className="btn-playlist">
                                <span className="mdi-av-play-arrow icon-play"></span>
                                <span className="btn-text">Nghe bài hát</span>
                            </p>
                        </div>
                    </a>
                </div>
                { this.props.hide && <div className="advertisement1"></div> }
                { this.props.hide && <div className="advertisement2"></div> }
                <BoxChartMV/>
                { this.props.hide && <div className="box-topic-music">
                    <div className="title-box">
                        <a href="#" title="BXH MV" className="title">
                            CHỦ ĐỀ HOT
                            <i className="fas fa-chevron-right icon-right"></i>
                        </a>
                    </div>
                    {topic.map((item, index) => {
                        return (
                            <div className="single-topic" key={index}>
                                <a href="#" title={item.name}>
                                    <img src={require('../../image/'+item.path)} alt=" "/>
                                </a>
                            </div>
                        );
                    })}
                </div> }
                { this.props.hide && <div className="list-singer-hot">
                    <div className="title-box">
                        <a href="#" title="Ca Sĩ | Nghệ Sĩ" className="title">
                            CA SĨ | NGHỆ SĨ
                            <i className="fas fa-chevron-right icon-right"></i>
                        </a>
                    </div>
                    {singerHot.map((item, index) => {
                        return(
                            <div className={classNames('singer-hot', {top: item.isTop})} key={index}>
                                <a href="#" title={item.name}>
                                    <img src={require('../../image/' + item.path)} alt=" "/>
                                </a>
                                <a className="name-singer-main" href="#" title={item.name}>{item.name}</a>
                            </div>
                            
                        );
                    })}                    
                </div> }

            </React.Fragment>

        );
    }
}

export default RightVideo;