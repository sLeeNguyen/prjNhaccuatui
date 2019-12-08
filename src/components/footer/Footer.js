import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footerstyle.css';

const images = [
    {path: '7.png'},
    {path: '1.png'},
    {path: '2.png'},
    {path: '3.png'},
    {path: '4.png'},
    {path: '7.png'},
    {path: '1.png'},
    {path: '2.png'},
    {path: '3.png'},
    {path: '4.png'},
    {path: '7.png'}
]

const detail = [
    {title: 'Hỗ trợ', list: [
        'Trợ giúp', 'Chính sách bảo mật', 'Sơ đồ', 'Chính sách SHTT', 'NCCI', 'Thỏa thuận sử dụng', 'Liên hệ quảng cáo'
    ], isLast: false},
    {title: 'Sản phẩm khác', list: [
        'Mobile App', 'Dịch vụ 3G', 'Mobile App', 'NCT Corp', 'Smart TV', 'Tuyển dụng'
    ], isLast: false},
    {title: 'Top từ khóa', list: [
        'Nhạc Tre', 'Nhac San', 'Tai Nhac', 'Son Tung MTP',
        'Nhac Remix', 'Nhac', 'Nhac Vang', 'Nghe Nhac', 'Quang Le', 
        'Nhac Hai Ngoai'
    ], isLast: true, image: [
        {class: 'mxh', path: 'ic_facebook.png'},
        {class: 'mxh', path: 'ic_instagram.png'},
        {class: 'dowload', path: 't_google_play.png'},
        {class: 'dowload', path: 't_app_store.png'}
    ]},   
]

class Footer extends Component {

    generate() {
        return (
            <div className="row">
                {
                    detail.map((item, index) => {
                        if (!item.isLast) {
                            return (
                                <div className="col-md-4 navigation" key={index}>
                                    <p className="title">{item.title}</p>
                                    <ul>
                                    {
                                        item.list.map((subitem, subindex) => {
                                            return <li key={subindex}>
                                                <Link to="#"><i className="fas fa-chevron-right chevron"></i>{subitem}</Link>
                                            </li>
                                        })
                                    }
                                    </ul>

                                </div>
                            );
                        } else {
                            return(
                                <div className="col-md-4 navigation last" key={index}>
                                    <p className="title">{item.title}</p>
                                    <p className="top-keyword">
                                        {
                                            item.list.map((subitem, index) => {
                                                return <Link to="#" key={index}>{subitem},</Link>
                                            })
                                        }
                                    </p>
                                    <p className="title in-col">Kết nối với chúng tôi</p>
                                    <ul>
                                        {
                                            item.image.map((subitem, index) => {
                                                return <li key={index}><Link to="#">
                                                        <img className={subitem.class} alt=" " src={require('./images_icons/' + subitem.path)}/>
                                                    </Link></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    }

    render() {
        return(
           <footer className="footer">
               <div className="list-cooperation">
                    <div className="container" style={{maxWidth: '1200px'}}>
                        <p className="title-cooperation">Liên kết và hợp tác</p>
                        <div className="slide-cooperation">
                            <div className="all-cooper">
                                {
                                    images.map((item, index) => {
                                        return <div className="slide" key={index}>
                                            <Link to="#">
                                                <img src={require('./images_icons/' + item.path)} alt=" "/>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="icon prev"><i className="fas fa-chevron-left"></i></div>
                            <div className="icon next"><i className="fas fa-chevron-right"></i></div>
                        </div>                        
                    </div>
               </div>
                <div className="footer-container">
                    <div className="container" style={{maxWidth: '1200px'}}>
                        {
                            this.generate()
                        }
                        <div className="line"></div>
                        <div className="box-info-company">
                        <Link to="#" title="NhacCuaTui"><img src={require("./images_icons/t_logo_company.png")} alt=" " style={{width: '80px', height: '42px'}}/></Link>
                        <div className="info">
                            <p className="nameComp">Công ty cổ phần N C T</p>
                            <ul>
                            <li className="detail">Chủ sở hữu website: <span className="bold">Ông Nguyễn Bá Ngọc</span></li>
                            <li className="detail">Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày 28/09/2015.</li>
                            <li className="detail">Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và Đầu tư thành phố Hồ
                                Chí Minh cấp ngày 01/03/2008.</li>
                            </ul>
                        </div>
                        <Link to="#" className="permission one"><img src={require("./images_icons/bo_cong_thuong.png")} alt=" "/></Link>
                        <Link to="#" className="permission two"><img src={require('./images_icons/dmca.png')} alt=" "/></Link>
                        </div>
                    </div>
                </div>
                <div className="coppyright">
                    <div className="container" style={{maxWidth: '1200px'}}>
                        <ul className="list-contact">
                            <li className="contact-detail">
                                <Link to="#">
                                <i className="fas fa-map-marker-alt"></i>
                                Đại học Bách Khoa Hà Nội, số 1, Đại Cồ Việt, HBT, HN
                                </Link>
                            </li>
                            <li className="contact-detail">
                                <Link to="#">
                                <i className="fas fa-envelope"></i>
                                leenguyenboss@vsbg.ai.vn
                                </Link>
                            </li>
                            <li className="contact-detail">
                                <Link to="#">
                                <i className="fas fa-phone-alt"></i>
                                08 6868 6688
                                </Link>
                            </li>
                            <li className="txt-coppyright">© 2019 NCT Corp. All rights reserved</li>
                        </ul>

                    </div>
                </div>
           </footer>
        );
    }
}
export default Footer;