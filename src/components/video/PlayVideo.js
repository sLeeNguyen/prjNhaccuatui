import React, { Component } from 'react';

class PlayVideo extends Component {
    render() {
        return(
            <div className="pv-box">
                <div className="box-playing">
                    {/* <video className='video-tag' controls autoPlay src={require('../../mp4/TuTam.mp4')}></video> */}
                    {/* <span className='vic-play'><img src={require('../../image/nowplaying_icon_play.png')} onCl/></span> */}
                    {/* <iframe className="video-tag" src="https://www.youtube.com/embed/knW7-x7Y7RE" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> */}
                    <div className="info-mv">
                        <div className="topbreadCrumb">
                            <a href="#" title="">Nghe Nhạc</a>
                            <i className="fas fa-chevron-right"></i>
                            <a href="#" title="">Video Việt Nam</a>
                            , 
                            <a href="#" title="">Video Nhạc Trẻ</a>
                            <i className="fas fa-chevron-right"></i>
                            <a href="#" title="">Nguyễn Trần Trung Quân</a>
                        </div>
                        <h1>Tự Tâm</h1>
                        <span style={{fontSize: '22px'}}> - </span>
                        <h1 className="name-singer"><a href="#">Nguyễn Trần Trung Quân</a></h1>
                        
                        <div className="box-link-songmv">
                            <a href="#" title="Nghe phiên bản Audio của Video này" 
                                className="btn-to-music"><i className="fas fa-music"></i></a>
                        </div>
                        <div className="show-listen">
                            <i className="fas fa-headphones-alt"></i>
                            <span>31.646</span>
                        </div>
                    </div>
                </div>
                <div className="box-menu-player">
                <div className="user-upload">
                    <a href="#" title="">
                        <img src={require('../../image/upload.jpg')} 
                            className="userImageNowplaying"/>
                    </a>
                    <i>Upload bởi:</i> <br/>
                    <a href="#" title="">Lee Nguyen</a>
                </div>
                <ul>
                    <li>
                        <a href="#" title="Thêm Vào">
                            <span className="mdi-av-playlist-add"></span>
                            Thêm vào
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Tải Video">
                            <span className="mdi-action-get-app"></span>
                            Tải Video
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Chia Sẻ">
                            <span className="mdi-social-share"></span>
                            Chia sẻ
                        </a>
                    </li>
                    <li className="tooltip_p">
                        <a href="#" title="Thống kê về Bài hát">
                            <span className="mdi-action-trending-up"></span>
                        </a>
                        <div className="tooltip-text">
                            <div className="tooltip_c">Thống kê</div>
                            <div className="tooltip_d">▾</div>
                        </div>
                    </li>
                    <li className="tooltip_p">
                        <a href="#" title="Báo lỗi">
                            <span className="mdi-content-flag"></span>
                        </a>
                        <div className="tooltip-text">
                            <div className="tooltip_c">Báo Lỗi</div>
                            <div className="tooltip_d">▾</div>
                        </div>
                    </li>
                    <li className="box-share-like-new">
                        <div className="like-count" title="Thích Tự Tâm - Nguyễn Trần Trung Quân - NhacCuaTui">
                            <span><img src={require('../../image/like.png')}/></span>
                            <span>Thích</span>
                            <span>369</span>
                        </div>
                        <span className="share" title="Share Facebook"><img src={require('../../image/share_fb.png')}/></span>
                    </li>
                </ul>
            </div>
                <div className="box-content-player">
                    <div className="album-info">
                        <span className="logo-docquyen"><img src={require('../../image/icon-docquyen2.png')}/></span>
                        Video <b>Tự Tâm</b>  do ca sĩ &nbsp;
                        <a href="#" title="Tìm các bài hát, playlist, mv do ca sĩ Nguyễn Trần Trung Quân trình bày">
                        Nguyễn Trần Trung Quân
                        </a> thể hiện, thuộc thể loại <a href="#" title="Video Việt Nam">Video Việt Nam</a>
                        , <a href="#" title="Video Nhạc Trẻ">Video Nhạc Trẻ</a>
                        . Các bạn có thể nghe, download MV/Video <i>Tự Tâm</i> miễn phí tại NhacCuaTui.com.
                        
                    </div>
                </div>
            
            </div>
        );
    }
}

export default PlayVideo;