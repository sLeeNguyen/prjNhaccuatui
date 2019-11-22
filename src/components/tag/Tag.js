import React, { Component } from 'react';
import './tag.css';
import './icon/icon.css'

class Tag extends Component {
    render() {
        return (
            <div className="tags">
                <div className="title"><h3>PHÂN LOẠI TUYỂN TẬP THEO TAGS</h3></div>
                <div className="tags-detail">
                    <div className="tag-content category">
                        <h5>THỂ LOẠI</h5>
                        <ul>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Trẻ</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hàn</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Trữ Tình</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hoa</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Remix Việt</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Acoustic</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Pop</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Soundtrack</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Electronica/Dance</a></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub0">
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tiền Chiến</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rock</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Nhật</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bolero</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Không Lời</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Trịnh</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>R&B/Hip Hop/Rap</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Thái</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hải Ngoại</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hòa Tấu</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thiếu Nhi</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Blues/Jazz</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Pháp</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Audiophile</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Piano</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cách Mạng</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Country</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hoa Lời Việt</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Pop Ballad</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Guitar</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rap Việt</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Latin</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Sàn</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cải Lương</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Saxophone</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rock Việt</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Indie</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Chúa</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Opera</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cello</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Indie Việt</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Âu Mỹ Khác</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content status">
                        <h5>TÂM TRẠNG</h5>
                        <ul>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buồn</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhớ Nhung</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cô Đơn</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thất Vọng</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>FA</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thương Cảm</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hồi Hộp</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Vui Vẻ</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hưng Phấn</a></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub1">
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đau Lòng</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạy Cảm</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hy Vọng</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Quyết Tâm</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Ngọt Ngào</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thất Tình</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Ngủ Ngon</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thư Giãn</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content scene">
                        <h5>KHUNG CẢNH</h5>
                        <ul>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cafe</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Lãng Mạn</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Du lịch</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Lái Xe</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Sáng</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Bài</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Tối</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Việc</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Buổi Trưa</a></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub2">
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Aerobic</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Party</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Chơi Game</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mua Sắm - Shopping</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Bắc</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Xuân</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tắm - Bơi Lội</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đi Dạo - Chạy Bộ</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bar - Club</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giảm Stress</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Phương tiện Giao Thông</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Nam</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Hạ</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Trước Khi Ngủ</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tập Gym</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Phòng Trà</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hẹn Hò</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Rạp Chiếu Phim</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Miền Trung</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Thu</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thiền</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thể Thao</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Công Viên</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Họp Mặt</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Sân Trường</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mưa</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mùa Đông</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Yên Tĩnh</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Spa - Yoga</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đám Cưới</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Làm Việc Nhà</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Sinh Nhật</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nắng</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Xế Chiều</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="tag-content topic">
                        <h5>CHỦ ĐỀ</h5>
                        <ul>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bất Hủ</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cover</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Chill Out</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mashup</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Nhạc Hot Tháng</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Song Ca</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giải Thưởng Âm Nhạc</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Top 100</a></li>
                            <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Khiêu Vũ</a></li>
                            <li id="menu_tag_id_0" className="view-more-list">
                                <div className="dot-more">
                                    <span>Xem Thêm</span>
                                    <span className="mdi-hardware-keyboard-arrow-down"></span>
                                </div>
                                <ul className="sub-menu-tag-content sub3">
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Band</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Giáng Sinh</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cha</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Gia Đình</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tình Bạn</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Epic Music</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Đoàn-Đảng</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Baroque</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tết</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Mẹ</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Con Gái</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Tình Yêu</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Hoạt Hình</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Quê Hương</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Cho Những Chuyến Đi</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Weekend</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Bé</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Con Trai</a></li>
                                    <li><a href="#"><span className="mdi-hardware-keyboard-arrow-right"></span>Thầy Cô</a></li>
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