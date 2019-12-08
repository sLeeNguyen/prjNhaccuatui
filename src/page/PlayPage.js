import React, { Component } from 'react';
import RightVideo from '../components/video/RightVideo';
import PlayVideo from '../components/video/PlayVideo';
import ListVideo from '../components/video/ListVideoMain';


const VideoVietNam = {
    title: 'VIDEO | MV',
    option: [],
    list: [
        {name: ['Yuni, ', 'Goctoc Mixer'], song: 'Bạn Tình Ơi', viewCount: 6068, time: '05:29', path: 'vn_1.jpg'},
        {name: ['Nguyễn Trần Trung Quân'], song: 'Tự Tâm', viewCount: 55958, time: '08:10', path: 'vn_2.jpg'},
        {name: ['2T, ', 'KayTee'], song: 'Hẹn Yêu', viewCount: 18887, time: '04:32', path: 'vn_3.jpg'},
        {name: ['Trang Thiên, ', 'Magazine'], song: 'Được Không Anh', viewCount: 14382, time: '04:32', path: 'vn_4.jpg'},
        {name: ['Yuki Huy Nam'], song: 'Duyên Nợ Chỉ Là Cái Cớ', viewCount: 6752, time: '07:54', path: 'vn_5.jpg'},
        {name: ['Hiền Hồ, ', 'Đạt G'], song: 'Có Như Không Có', viewCount: 1808, time: '05:17', path: 'vn_6.jpg'},
        {name: ['Thanh Hưng Idol'], song: 'Em Muốn Ta Là Gì', viewCount: 1356243, time: '05:59', path: 'vn_7.jpg'},
        {name: ['T.R.I, ', 'Cammie'], song: '2+3=5', viewCount: 10341, time: '02:46', path: 'vn_8.jpg'}
    ]
}

class PlayPage extends Component {
    render() {
        return(
            <div className="row">
                {/* <div className="adver3"><img src={require('../image/adver3.jpg')}/></div> */}
                <div className="col-md-9 left">
                    <PlayVideo/>
                    <div className="space"></div>
                    <ListVideo listMV={VideoVietNam}/>
                </div>
                <div className="col-md-3 right">
                    <RightVideo hide={false}/>
                </div>
            </div>
        );
    }
}

export default PlayPage;