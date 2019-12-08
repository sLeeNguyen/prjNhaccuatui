import React, { Component } from 'react';
import MusicItem from '../components/collection/MusicItem';
import Pagination from '../components/collection/pagination/Pagination';
import Tag from '../components/tag/Tag';

import './style.css';

const arrayMusicInformation = [
    {name: 'Soft Country - I Believe In You', path: 'ibelieveinyou.jpg', countListen: 65489, date: '25/11/2019'},
    {name: 'Soul Music For Today - Show Me Love - V.A', path: 'showme.jpg', countListen: 6544651, date: '25/11/2019'},
    {name: 'Rock Your Day - Crazy', path: 'crazy.jpg', countListen: 654895, date: '25/11/2019'},
    {name: 'Rap In Life - Giants', path: 'giants.jpg', countListen: 265489, date: '25/11/2019'},
    {name: 'Rock Your Day - Get It On', path: 'getiton.jpg', countListen: 165489, date: '25/11/2019'},
    {name: 'Anyway, Go Home', path: 'anyway_gohome.jpg',countListen: 16912, date: '21/11/2019'},
    {name: 'Chiếc Lá Cuối Cùng', path: 'chiecla.jpg', countListen: 132215, date: '21/11/2019'},
    {name: 'Chiều Vắng', path: 'chieuvang.jpg', countListen: 536214, date: '21/11/2019'},
    {name: 'Còn Giữ Còn Thương', path: 'congiuconthuong.jpg', countListen: 23352, date: '21/11/2019'},
    {name: 'Chuyện Chúng Mình', path: 'chuyenchungminh.jpg', countListen: 66213, date: '21/11/2019'},
    {name: 'Có Như Không Có', path: 'conhukhong.jpg', countListen: 1692113, date: '21/11/2019'},
    {name: 'Giá Như Anh', path: 'gianhuanh.jpg', countListen: 1011450, date: '21/11/2019'},
    {name: 'Có Thích Anh Không', path: 'emgido.jpg', countListen: 23039, date: '21/11/2019'},
    {name: 'Em Là Mỹ Nhân Của Anh', path: 'emlaminhan.jpg', countListen: 3296, date: '21/11/2019'},
    {name: 'Hát Cùng Nhau', path: 'hatcungnhau.jpg', countListen: 165459, date: '21/11/2019'}
]

class CollectionPage extends Component {
    render() {
        var album = arrayMusicInformation.map((item, index) => {
            return <MusicItem item={item} key={index} />;
        });
        return(
            <React.Fragment >
                <Tag />
                <div id="list-music">
                    {album}    
                    {album}    
                    {album}    
                </div>
                <Pagination />
            </React.Fragment>
        );
    }
}

export default CollectionPage;
