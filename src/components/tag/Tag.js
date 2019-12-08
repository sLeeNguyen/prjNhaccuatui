import React, { Component } from 'react';
import './tag.css';
import './icon/icon.css';
import { Link } from 'react-router-dom';

class Tag extends Component {
    render() {
        return (
            <div className="tags">
                <div className="title"><h3>PHÂN LOẠI TUYỂN TẬP THEO TAGS</h3></div>
                <div className="tags-detail">
                    <div className="tag-content category">
                        <h5>THỂ LOẠI</h5>
                        <ul>
                            <li><Link to="#" className="active"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Trẻ</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hàn</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Trữ Tình</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hoa</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Remix Việt</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Acoustic</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Pop</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Soundtrack</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Electronica/Dance</Link></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub0">
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tiền Chiến</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rock</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Nhật</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bolero</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Không Lời</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Trịnh</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>R&B/Hip Hop/Rap</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Thái</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hải Ngoại</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hòa Tấu</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thiếu Nhi</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Blues/Jazz</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Pháp</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Audiophile</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Piano</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cách Mạng</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Country</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hoa Lời Việt</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Pop Ballad</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Guitar</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rap Việt</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Latin</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Sàn</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cải Lương</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Saxophone</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rock Việt</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Indie</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Chúa</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Opera</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cello</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Indie Việt</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Âu Mỹ Khác</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content status">
                        <h5>TÂM TRẠNG</h5>
                        <ul>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buồn</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhớ Nhung</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cô Đơn</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thất Vọng</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>FA</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thương Cảm</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hồi Hộp</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Vui Vẻ</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hưng Phấn</Link></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub1">
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đau Lòng</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạy Cảm</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hy Vọng</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Quyết Tâm</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Ngọt Ngào</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thất Tình</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Ngủ Ngon</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thư Giãn</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content scene">
                        <h5>KHUNG CẢNH</h5>
                        <ul>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cafe</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Lãng Mạn</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Du lịch</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Lái Xe</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Sáng</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Bài</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Tối</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Việc</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Trưa</Link></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub2">
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Aerobic</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Party</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Chơi Game</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mua Sắm - Shopping</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Bắc</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Xuân</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tắm - Bơi Lội</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đi Dạo - Chạy Bộ</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bar - Club</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giảm Stress</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Phương tiện Giao Thông</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Nam</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Hạ</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Trước Khi Ngủ</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tập Gym</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Phòng Trà</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hẹn Hò</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rạp Chiếu Phim</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Trung</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Thu</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thiền</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thể Thao</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Công Viên</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Họp Mặt</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Sân Trường</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mưa</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Đông</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Yên Tĩnh</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Spa - Yoga</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đám Cưới</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Việc Nhà</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Sinh Nhật</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nắng</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Xế Chiều</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content topic">
                        <h5>CHỦ ĐỀ</h5>
                        <ul>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bất Hủ</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cover</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Chill Out</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mashup</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hot Tháng</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Song Ca</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giải Thưởng Âm Nhạc</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Top 100</Link></li>
                            <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Khiêu Vũ</Link></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub3">
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Band</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giáng Sinh</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cha</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Gia Đình</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tình Bạn</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Epic Music</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đoàn-Đảng</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Baroque</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tết</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mẹ</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Con Gái</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tình Yêu</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hoạt Hình</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Quê Hương</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cho Những Chuyến Đi</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Weekend</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bé</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Con Trai</Link></li>
                                    <li><Link to="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thầy Cô</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="title-box-key tag">
                    <h3>Tất cả playlist</h3>
                </div>
            </div>
        );
    }
}

export default Tag;