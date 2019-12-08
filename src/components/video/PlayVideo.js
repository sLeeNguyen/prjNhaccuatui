import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayVideo extends Component {
    render() {
        return(
            <div className="pv-box">
                <div className="box-playing">
                    <video className='video-tag' controls autoPlay src={require('../../mp4/TuTam.mp4')}></video>
                    {/* <span className='vic-play'><img src={require('../../image/nowplaying_icon_play.png')} onCl/></span> */}
                    {/* <iframe className="video-tag" src="https://www.youtube.com/embed/knW7-x7Y7RE" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> */}
                    <div className="info-mv">
                        <div className="topbreadCrumb">
                            <Link to="#" title="">Nghe Nhạc</Link>
                            <i className="fas fa-chevron-right"></i>
                            <Link to="#" title="">Video Việt Nam</Link>
                            , 
                            <Link to="#" title="">Video Nhạc Trẻ</Link>
                            <i className="fas fa-chevron-right"></i>
                            <Link to="#" title="">Nguyễn Trần Trung Quân</Link>
                        </div>
                        <h1>Tự Tâm</h1>
                        <span style={{fontSize: '22px'}}> - </span>
                        <h1 className="name-singer"><Link to="#">Nguyễn Trần Trung Quân</Link></h1>
                        
                        <div className="box-link-songmv">
                            <Link to="#" title="Nghe phiên bản Audio của Video này" 
                                className="btn-to-music"><i className="fas fa-music"></i></Link>
                        </div>
                        <div className="show-listen">
                            <i className="fas fa-headphones-alt"></i>
                            <span>31.646</span>
                        </div>
                    </div>
                </div>
                <div className="box-menu-player">
                <div className="user-upload">
                    <Link to="#" title="">
                        <img src={require('../../image/upload.jpg')} 
                            className="userImageNowplaying" alt=" "/>
                    </Link>
                    <i>Upload bởi:</i> <br/>
                    <Link to="#" title="">Lee Nguyen</Link>
                </div>
                <ul>
                    <li>
                        <Link to="#" title="Thêm Vào">
                            <span className="mdi-av-playlist-add"></span>
                            Thêm vào
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="Tải Video">
                            <span className="mdi-action-get-app"></span>
                            Tải Video
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="Chia Sẻ">
                            <span className="mdi-social-share"></span>
                            Chia sẻ
                        </Link>
                    </li>
                    <li className="tooltip_p">
                        <Link to="#" title="Thống kê về Bài hát">
                            <span className="mdi-action-trending-up"></span>
                        </Link>
                        <div className="tooltip-text">
                            <div className="tooltip_c">Thống kê</div>
                            <div className="tooltip_d">▾</div>
                        </div>
                    </li>
                    <li className="tooltip_p">
                        <Link to="#" title="Báo lỗi">
                            <span className="mdi-content-flag"></span>
                        </Link>
                        <div className="tooltip-text">
                            <div className="tooltip_c">Báo Lỗi</div>
                            <div className="tooltip_d">▾</div>
                        </div>
                    </li>
                    <li className="box-share-like-new">
                        <div className="like-count" title="Thích Tự Tâm - Nguyễn Trần Trung Quân - NhacCuaTui">
                            <span><img src={require('../../image/like.png')} alt=" "/></span>
                            <span>Thích</span>
                            <span>369k</span>
                        </div>
                        <span className="share" title="Share Facebook"><img src={require('../../image/share_fb.png')} alt=" "/></span>
                    </li>
                </ul>
            </div>
                <div className="box-content-player">
                    <div className="album-info">
                        <span className="logo-docquyen"><img src={require('../../image/icon-docquyen2.png')} alt=" "/></span>
                        Video <b>Tự Tâm</b>  do ca sĩ &nbsp;
                        <Link to="#" title="Tìm các bài hát, playlist, mv do ca sĩ Nguyễn Trần Trung Quân trình bày">
                        Nguyễn Trần Trung Quân
                        </Link> thể hiện, thuộc thể loại <Link to="#" title="Video Việt Nam">Video Việt Nam</Link>
                        , <Link to="#" title="Video Nhạc Trẻ">Video Nhạc Trẻ</Link>
                        . Các bạn có thể nghe, download MV/Video <i>Tự Tâm</i> miễn phí tại NhacCuaTui.com.
                        
                    </div>
                </div>
            
            </div>
        );
    }
}

export default PlayVideo;