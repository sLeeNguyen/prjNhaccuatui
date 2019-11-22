import React, { Component } from 'react';
import MusicItem from '../components/collection/MusicItem';
import Pagination from '../components/pagination/Pagination';
import Tag from '../components/tag/Tag';

import './cp.css';

const arrayMusicInformation = [
    {name: 'Anyway, Go Home', path: 'anyway_gohome.jpg',countListen: 169, date: '21/11/2019'},
    {name: 'Chiếc Lá Cuối Cùng', path: 'chiecla.jpg', countListen: 1325, date: '21/11/2019'},
    {name: 'Chiều Vắng', path: 'chieuvang.jpg', countListen: 536, date: '21/11/2019'},
    {name: 'Còn Giữ Còn Thương', path: 'congiuconthuong.jpg', countListen: 3352, date: '21/11/2019'},
    {name: 'Chuyện Chúng Mình', path: 'chuyenchungminh.jpg', countListen: 663, date: '21/11/2019'},
    {name: 'Có Như Không Có', path: 'conhukhong.jpg', countListen: 1693, date: '21/11/2019'},
    {name: 'Giá Như Anh', path: 'gianhuanh.jpg', countListen: 100, date: '21/11/2019'},
    {name: 'Có Thích Anh Không', path: 'emgido.jpg', countListen: 2339, date: '21/11/2019'},
    {name: 'Em Là Mỹ Nhân Của Anh', path: 'emlaminhan.jpg', countListen: 396, date: '21/11/2019'},
    {name: 'Hát Cùng Nhau', path: 'hatcungnhau.jpg', countListen: 169, date: '21/11/2019'},
]

class CollectionPage extends Component {
    render() {
        return(
            <div className="container content" style={{maxWidth: '1200px', display: 'flow-root'}}>
                <Tag />
                <div id="list-music">
                    {
                        arrayMusicInformation.map((item, index) => {
                            return <MusicItem item={item} key={index} />;
                        })
                    }
                    {
                        arrayMusicInformation.map((item, index) => {
                            return <MusicItem item={item} key={index} />;
                        })
                    }
                    {
                        arrayMusicInformation.map((item, index) => {
                            return <MusicItem item={item} key={index} />;
                        })
                    }    
                </div>
                <Pagination />
            </div>
        );
    }
}

export default CollectionPage;
