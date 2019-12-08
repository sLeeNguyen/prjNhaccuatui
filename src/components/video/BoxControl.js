import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../tag/icon/icon.css';

var classNames = require('classnames');

const boxControl = [
    {cate: 'MỚI & HOT', list: [], more: []},
    {cate: 'VIỆT NAM', list: ['Nhạc Trẻ', 'Trữ Tình', 'Cách Mạng'], more: ['Rap Việt', 'Rock Việt']},
    {cate: 'ÂU MỸ', list: ['Pop', 'Rock', 'Electronica/Dance', 'R&B/Hip Hop/Rap', 'Blues/Jazz', 'Country', 'Latin'], more: ['Indie', 'Âu Mỹ Khác']},
    {cate: 'CHÂU Á', list: ['Nhạc Hàn', 'Nhạc Hoa', 'Nhạc Nhật', 'Nhạc Thái'], more: []},
    {cate: 'KARAOKE', list: ['Nhạc Trẻ', 'Trữ Tình', 'Remix Việt'], more: ['Thiếu Nhi', 'Âu Mỹ', 'Thể Loại Khác']},
    {cate: 'KHÁC', list: ['Clip Vui', 'Hài Kịch', 'Thiếu Nhi'], more: ['Thể Loại Khác', 'Giải Trí Khác', 'Phim Việt Nam']}
]

class BoxControl extends Component {
    constructor() {
        super();
        this.state = {
            cate: 0,
            subitem: ''
        }
    }

    generateMore(more){
        if (more.length >0) {
            return(
                <li className="view-more-list">
                    <div className="dot-more">
                        <span className="dot-circle"></span>
                        <span className="dot-circle"></span>
                        <span className="dot-circle"></span>
                        <span id="listchild-vn">Xem thêm</span>
                    </div>
                    <ul>
                        {
                            more.map((item, index) => {
                                return <li><Link to="#" title={item} key={index}><span className="mdi-hardware-keyboard-arrow-right"></span>{item}</Link></li>;
                            })
                        }
                    </ul>
                </li>
            );
        }
        return null;
    }

    render() {
        return(
            <div className="box-cate-control">
                <ul className="menu-detail">
                    {
                        boxControl.map((item, index) => {
                            return (     
                                <React.Fragment>                       
                                    <li key={index} className="cate havelink">
                                        <h3><Link to="#" title={item.cate} 
                                            className={classNames({active: this.state.cate === index})} 
                                            onClick={e => {
                                                this.setState({cate: index, subitem: ''});
                                            }}> 
                                        {item.cate}</Link></h3>
                                    </li>
                                    {
                                        item.list.map((subitem, subindex) => {
                                            
                                            return (
                                                <li key={subindex}>
                                                    <Link to="#" href="#" title={subitem} className={classNames({active: this.state.subitem === index + '' + subindex})}           
                                                                                onClick={e => {
                                                                                    this.setState({cate: -1, subitem: index + '' + subindex})                                                                                    
                                                                                }}>
                                                        <span className="mdi-hardware-keyboard-arrow-right"></span>
                                                        {subitem}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                    {
                                        this.generateMore(item.more)
                                    }
                                    {
                                        index<boxControl.length-1 && <li className="cate line"></li>
                                    }
                                </React.Fragment>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default BoxControl;