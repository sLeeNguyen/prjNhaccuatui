import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../tag/icon/icon.css';
import './header.css';

export default function() {
    return <header className='header'>
        <div className="container" style={{maxWidth: '1200px', display: 'flow-root'}}>
            <div className="top-menu">
                <div className='menu-left'>
                    <ul>
                        <li className="logo-nct">
                            <Link to="#" className="icon_logo_menu"></Link>
                        </li>
                        <li>
                            <span className="icon-label-new"></span>
                            <Link to="#">Khám Phá</Link>
                        </li>
                        <li><Link to="#">Bài hát</Link></li>
                        <li><Link to="#">Playlist</Link></li>
                        <li><Link to="/collection">Tuyển Tập</Link></li>
                        <li><Link to="/video">Video</Link></li>
                        <li><Link to="/bxh">BXH</Link></li>
                        <li><Link to="#">Chủ Đề</Link></li>
                        <li><Link to="#">Top 100</Link></li>
                        <li><Link to="#"><span className="mdi-hardware-keyboard-control"></span></Link></li>
                    </ul>
                </div>
                <div className='menu-right'>
                    <div className="boxSeach_action new_header">
                        <input className="inputSearch new_header" placeholder="Tìm bài hát, video, playlist, ca sĩ"></input>
                        <div className="boxBSearch new_header">
                            <span className="b-search new_header"></span>
                        </div>
                    </div>
                    <div className="box-action-right new_header">
                        <span>
                            <Link to="#" className="btn-power-user new_header"></Link>
                        </span>
                        <span><Link to="#" className="mdi-hardware-headset btn-listen" title="Nhạc Của Tui"></Link></span>
                        <span><Link to="#" className="mdi-file-cloud-upload btn-upload" title="Upload"></Link></span>
                    </div>
                    <div className="user">
                        <img className="avata new_header" src={require("../../image/avartar_none_login.png")} alt=" "></img>
                        <div className="control">
                            <ul>
                                <li><Link to="#" className="sign-in">Đăng nhập</Link></li>
                                <li style={{borderTop: '#eaeaea solid 1px'}}><Link to="#" className="sign-up">Đăng ký</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}