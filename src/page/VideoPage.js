import React, { Component } from 'react';
import ListVideo from '../components/video/ListVideoMain';
import RightVideo from '../components/video/RightVideo';
import BoxControl from '../components/video/BoxControl';
import Pagination from '../components/collection/pagination/Pagination';
import ListVideoDetail from '../components/video/ListVideoDetail';

import './style.css';


const VideoVietNam = {
    title: 'VIDEO VIỆT NAM',
    option: ['Nhạc Trẻ', 'Trữ Tình', 'Rap Việt', 'Rock Việt'],
    list: [
        {name: ['Yuni, ', 'Goctoc Mixer'], song: 'Bạn Tình Ơi', viewCount: 6068, time: '05:29', path: 'vn_1.jpg'},
        {name: ['Nguyễn Trần Trung Quân'], song: 'Tự Tâm', viewCount: 55958, time: '08:10', path: 'vn_2.jpg'},
        {name: ['2T, ', 'KayTee'], song: 'Hẹn Yêu', viewCount: 18887, time: '04:32', path: 'vn_3.jpg'},
        {name: ['Trang Thiên, ', 'Magazine'], song: 'Được Không Anh', viewCount: 14382, time: '04:32', path: 'vn_4.jpg'},
        {name: ['Yuki Huy Nam'], song: 'Duyên Nợ Chỉ Là Cái Cớ', viewCount: 6752, time: '07:54', path: 'vn_5.jpg'},
        {name: ['Hiền Hồ, ', 'Đạt G'], song: 'Có Như Không Có', viewCount: 1808, time: '05:17', path: 'vn_6.jpg'},
        {name: ['Thanh Hưng Idol'], song: 'Em Muốn Ta Là Gì', viewCount: 1356243, time: '05:59', path: 'vn_7.jpg'},
        {name: ['T.R.I, ', 'Cammie'], song: '2+3=5', viewCount: 10341, time: '02:46', path: 'vn_8.jpg'},
        {name: ['Lip B'], song: 'Đớp Thính Chưa Nà? (Dance Choreography)', viewCount: 36546, time:'03:34', path: 'vn_9.jpg'},
        {name: ['Charles Huỳnh'], song: 'Tưởng Chia Tay Sẽ Vui', viewCount: 6464, time: '03:37', path: 'vn_10.jpg'},
        {name: ['Nguyễn Trọng Tài, ', 'MC 12'], song: 'Hongkong 12', viewCount: 46465, time: '04:33', path: 'vn_11.jpg'},
        {name: ['Trúc Nhân'], song: 'Mấy Khi Mà Sướng Thế Này (Anh Trai Yêu Quái OST)', viewCount: 564613, time: '02:44', path: 'vn_12.jpg'},
        {name: ['Phạm Quỳnh Anh'], song: 'Xiêu Lòng', viewCount: 46546, time: '06:42', path: 'vn_13.jpg'},
        {name: ['Phương Ly, ', 'Rhymastic, ', 'Touliver'], song: 'Đâu Chịu Ngồi Yên', viewCount: 36546, time: '04:08', path: 'vn_14.jpg'},
        {name: ['Noo Phước Thịnh'], song: 'I\'m Still Loving You', viewCount: 1465464, time: '04:09', path: 'vn_15.jpg'},
        {name: ['Đông Nhi, ', 'Ông Cao Thắng'], song: 'Hôm Nay Mình Cưới', viewCount: 11663, time: '03:37', path: 'vn_16.jpg'},
        {name: ['Đình Dũng'], song: 'Sai Lầm Của Anh', viewCount: 54649, time: '04:50', path: 'vn_17.jpg'},
        {name: ['Phạm Quỳnh Anh'], song: 'Xiêu Lòng Remix (Dance Practice)', viewCount: 5546, time: '03:57', path: 'vn_18.jpg'},
        {name: ['GiGi Hương Giang'], song: 'Anh Đưa Em Đi', viewCount: 4649894, time: '04:07', path: 'vn_19.jpg'},
        {name: ['Trang'], song: 'Và Khi Ta Ngả Nghiêng', viewCount: 446666, time: '04:36', path: 'vn_20.jpg'},
        {name: ['Yuni, ', 'Goctoc Mixer'], song: 'Bạn Tình Ơi', viewCount: 6068, time: '05:29', path: 'vn_1.jpg'},
        {name: ['Nguyễn Trần Trung Quân'], song: 'Tự Tâm', viewCount: 55958, time: '08:10', path: 'vn_2.jpg'},
        {name: ['2T, ', 'KayTee'], song: 'Hẹn Yêu', viewCount: 18887, time: '04:32', path: 'vn_3.jpg'},
        {name: ['Trang Thiên, ', 'Magazine'], song: 'Được Không Anh', viewCount: 14382, time: '04:32', path: 'vn_4.jpg'},
        {name: ['Yuki Huy Nam'], song: 'Duyên Nợ Chỉ Là Cái Cớ', viewCount: 6752, time: '07:54', path: 'vn_5.jpg'},
        {name: ['Hiền Hồ, ', 'Đạt G'], song: 'Có Như Không Có', viewCount: 1808, time: '05:17', path: 'vn_6.jpg'},
        {name: ['Thanh Hưng Idol'], song: 'Em Muốn Ta Là Gì', viewCount: 1356243, time: '05:59', path: 'vn_7.jpg'},
        {name: ['T.R.I, ', 'Cammie'], song: '2+3=5', viewCount: 10341, time: '02:46', path: 'vn_8.jpg'},
        {name: ['Lip B'], song: 'Đớp Thính Chưa Nà? (Dance Choreography)', viewCount: 36546, time:'03:34', path: 'vn_9.jpg'},
        {name: ['Charles Huỳnh'], song: 'Tưởng Chia Tay Sẽ Vui', viewCount: 6464, time: '03:37', path: 'vn_10.jpg'},
        {name: ['Nguyễn Trọng Tài, ', 'MC 12'], song: 'Hongkong 12', viewCount: 46465, time: '04:33', path: 'vn_11.jpg'},
        {name: ['Trúc Nhân'], song: 'Mấy Khi Mà Sướng Thế Này (Anh Trai Yêu Quái OST)', viewCount: 564613, time: '02:44', path: 'vn_12.jpg'},
        {name: ['Phạm Quỳnh Anh'], song: 'Xiêu Lòng', viewCount: 46546, time: '06:42', path: 'vn_13.jpg'},
        {name: ['Phương Ly, ', 'Rhymastic, ', 'Touliver'], song: 'Đâu Chịu Ngồi Yên', viewCount: 36546, time: '04:08', path: 'vn_14.jpg'},
        {name: ['Noo Phước Thịnh'], song: 'I\'m Still Loving You', viewCount: 1465464, time: '04:09', path: 'vn_15.jpg'},
        {name: ['Đông Nhi, ', 'Ông Cao Thắng'], song: 'Hôm Nay Mình Cưới', viewCount: 11663, time: '03:37', path: 'vn_16.jpg'},
        {name: ['Đình Dũng'], song: 'Sai Lầm Của Anh', viewCount: 54649, time: '04:50', path: 'vn_17.jpg'},
        {name: ['Phạm Quỳnh Anh'], song: 'Xiêu Lòng Remix (Dance Practice)', viewCount: 5546, time: '03:57', path: 'vn_18.jpg'},
        {name: ['GiGi Hương Giang'], song: 'Anh Đưa Em Đi', viewCount: 4649894, time: '04:07', path: 'vn_19.jpg'},
        {name: ['Trang'], song: 'Và Khi Ta Ngả Nghiêng', viewCount: 446666, time: '04:36', path: 'vn_20.jpg'}
    ]
}
const VideoAuMy = {
    title: 'VIDEO Âu Mỹ',
    option: ['Pop', 'Rock', 'Electronica/Dance', 'R&B/HipHop/Rap'],
    list: [
        {name: ['J.Fla'], song: 'Memories (Maroon 5 Cover)', viewCount: 1970, time: '02:46', path: 'usuk_1.jpg'},
        {name: ['KILLY, ', '16yrold'], song: 'No Romance', viewCount: 3892, time: '02:16', path: 'usuk_2.jpg'},
        {name: ['1312er'], song: 'Strafakten', viewCount: 536, time: '03:43', path: 'usuk_3.jpg'},
        {name: ['Little Mix'], song: 'One I\'ve Been Missing (Lyric Video)', viewCount: 205, time: '03:13', path: 'usuk_4.jpg'},
        {name: ['Aeon Blank, ', 'Ana Coman'], song: 'Fluturi Albi', viewCount: 6725, time: '03:40', path: 'usuk_5.jpg'},
        {name: ['187INC'], song: 'Monkey文豪 / 好久不見 - 187INC', viewCount: 450, time: '05:10', path: 'usuk_6.jpg'},
        {name: ['Kesha'], song: 'My Own Dance', viewCount: 4656, time: '02:45', path: 'usuk_7.jpg'},
        {name: ['MAX'], song: 'Lights Down Low (Not Your Dope Remix)', viewCount: 16514, time: '03:47', path: 'usuk_8.jpg'}
    ]    
}
const VideoHanQuoc = {
    title: 'VIDEO Nhạc Hàn',
    option: [],
    list: [
        {name: ['Kim Jae Hwan'], song: 'If I Was (Vagabond OST)', viewCount: 465441, time: '05:57', path: 'k_1.jpg'},
        {name: ['Min Ah (Girl\'s Day)'], song: 'Butterfly', viewCount: 444984, time: '03:47', path: 'k_2.jpg'},
        {name: ['Tae Yeon (SNSD)'], song: 'Into The Unkown (From "Frozen 2")', viewCount: 16516, time: '03:10', path: 'k_3.jpg'},
        {name: ['(G)I-DLE'], song: 'Lion', viewCount: 26541, time: '03:37', path: 'k_4.jpg'},
        {name: ['IRO'], song: 'Falling In Love (Vagabond OST)', viewCount: 22264, time: '04:18', path: 'k_5.jpg'},
        {name: ['April'], song: 'Felling (Extraordinary You Ost)', viewCount: 3119, time: '03:05', path: 'k_6.jpg'},
        {name: ['MAMAMOO'], song: 'Hip', viewCount: 550, time: '03:30', path: 'k_7.jpg'},
        {name: ['TXT (Tomorrow x Together)'], song: 'Magic Island', viewCount: 3123, time: '13:34', path: 'k_8.jpg'}
    ]
}

class VideoPage extends Component {
    constructor() {
        super();

        this.state = {
            page: (
                <React.Fragment>
                    <BoxControl/>
                    <ListVideo listMV={{...VideoVietNam, list: [...VideoVietNam.list.slice(0, 8)]}} onClick={this.onSelected('vn')}/>
                    <ListVideo listMV={{...VideoAuMy, list: [...VideoAuMy.list.slice(0, 8)]}} onClick={this.onSelected('usuk')}/>
                    <ListVideo listMV={{...VideoHanQuoc, list: [...VideoHanQuoc.list.slice(0, 8)]}}/>
                    <ListVideo listMV={{...VideoVietNam, list: [...VideoVietNam.list.slice(0, 8)]}} onClick={this.onSelected('vn')}/>
                    <ListVideo listMV={{...VideoAuMy, list: [...VideoAuMy.list.slice(0, 8)]}} onClick={this.onSelected('usuk')}/>
                    <ListVideo listMV={{...VideoHanQuoc, list: [...VideoHanQuoc.list.slice(0, 8)]}}/>
                </React.Fragment>
            )
        }
    }

    onSelected(region) {
        return () => {
            var list;
            if (region === 'vn') {
                list = <ListVideoDetail listMV={VideoVietNam}/>;
            } else {
                list = <ListVideoDetail listMV={VideoAuMy}/>;
            }
            this.setState({
                page: (
                    <React.Fragment>
                        <BoxControl/>
                        {list}
                        <Pagination/>
                    </React.Fragment>
                )
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9 left">
                    {this.state.page}
                </div>
                <div className="col-md-3 right">
                    <RightVideo hide={true}/>
                </div>
            </div>
        );
    }
}

export default VideoPage;
