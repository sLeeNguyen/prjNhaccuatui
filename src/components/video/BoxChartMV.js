import React, { Component } from 'react';
import ChartVideoLarge from './ChartVideoLarge';
import ChartVideoNormal from './ChartVideoNormal';
import { Link } from 'react-router-dom';

var classNames = require('classnames');
const BXHVietNam = [
    {name: ['Thanh Hưng Idol'], song: 'Em Muốn Ta Là Gì', path: 'v_s_emmuon.jpg'},
    {name: ['Nguyễn Trần Trung Quân'], song: 'Tự Tâm', path: 'v_s_tutam.jpg'},
    {name: ['Phát Hồ, ', 'Jokes Bii, ', 'Thiện'], song: 'Cô Thắm Không Về', path: 'v_s_cothamkhongve.jpg'},
    {name: ['2T, ', 'KayTee'], song: 'Hẹn Yêu', path: 'v_s_henyeu.jpg'},
    {name: ['GiGi Hương Giang'], song: 'Anh Đưa Em Đi', path: 'v_s_anhduaemdi.jpg'},
    {name: ['Trang Thiên, ', 'Magazine'], song: 'Được Không Anh', path: 'v_s_duockhonganh.jpg'},
    {name: ['Nguyễn Trọng Tài, ', 'MC12'], song: 'HongKong 12', path: 'v_s_hongkong12.jpg'},
    {name: ['Du Thiên, ', 'Khang Việt'], song: 'Dĩ Vãng Phai Màu', path: 'v_s_divangphaimau.jpg'},
    {name: ['Phạm Quỳnh Anh'], song: 'Xiêu Lòng', path: 'v_s_xieulong.jpg'},
    {name: ['Hà Nhi, ', 'Mew Amazing'], song: 'Tự Dưng Nhớ Anh', path: 'v_s_tudungnhoanh.jpg'},
]

const BXHAuMy = [
    {name: ['Tiffany Young'], song: 'Run For Your Life', path: 'usuk_s_1.jpg'},
    {name: ['Au/Ra, ', 'Alan Walker'], song: 'Ghost', path: 'usuk_s_2.jpg'},
    {name: ['Meduza, ', 'Becky Hill, ', 'Goodboys'], song: 'Lose Control', path: 'usuk_s_3.jpg'},
    {name: ['Andrea Bocelli, ', 'Ellie Goulding'], song: 'Return To Love', path: 'usuk_s_4.jpg'},
    {name: ['Halsey'], song: 'Clementine', path: 'usuk_s_5.jpg'}
]

const BXHHanQuoc = [
    {name: ['ATEEZ'], song: 'Wonderland', path: 'k_s_1.jpg'},
    {name: ['(G)I-DLE'], song: 'Lion', path: 'k_s_2.jpg'},
    {name: ['TWICE'], song: 'Feel Special', path: 'k_s_3.jpg'},
    {name: ['TXT (Tommorow x Together)'], song: 'Run Anyway', path: 'k_s_4.jpg'},
    {name: ['Tae Yean (SNSD)'], song: 'Into The Unknown (From Frozen 2) - Tea Yeon (SNSD))', path: 'k_s_5.jpg'}
]
// map
const listChartVideoVietNam = BXHVietNam.map((item, index) => {
    if (index === 0) {
        return <ChartVideoLarge item={item} key={index}/>;
    }
    return <ChartVideoNormal item={item} key={index} index={index}/>;
});
const listChartVideoUSUK = BXHAuMy.map((item, index) => {
    if (index === 0) {
        return <ChartVideoLarge item={item} key={index}/>;
    }
    return <ChartVideoNormal item={item} key={index} index={index}/>;
});
const listChartVideoKorea = BXHHanQuoc.map((item, index) => {
    if (index === 0) {
        return <ChartVideoLarge item={item} key={index}/>;
    }
    return <ChartVideoNormal item={item} key={index} index={index}/>;
});

class BoxChartMV extends Component {
    constructor() {
        super();
        this.state = {
            BXHMV: listChartVideoVietNam,
            currentCountry: 'vn'
        };
    }

    handleClick(region) {
        return ()=>{
            var temp;
            if (region === 'vn') temp = listChartVideoVietNam;
            else if (region === 'usuk') temp = listChartVideoUSUK;
            else temp = listChartVideoKorea;
            this.setState({ 
                BXHMV: temp,
                currentCountry: region
            });
        }    
    }

    render() {
        return(
            <div className="box-chart-mv">
                <div className="title-box">
                    <Link to="/bxh" title="BXH MV" className="title">
                        BXH MV
                        <i className="fas fa-chevron-right icon-right"></i>
                    </Link>
                </div>
                <div className="btn-tab-select">
                    <Link to="#" title="Việt Nam" className={classNames({active: this.state.currentCountry === 'vn'})} 
                        onClick={this.handleClick('vn')}>Việt Nam</Link>
                    <Link to="#" title="Âu Mỹ" className={classNames({active: this.state.currentCountry === 'usuk'})} 
                        onClick={this.handleClick('usuk')}>Âu Mỹ</Link>
                    <Link to="#" title="Hàn Quốc" className={classNames('last', {active: this.state.currentCountry === 'korea'})} 
                        onClick={this.handleClick('korea')}>Hàn Quốc</Link>
                </div>
                <div className="list-chart-video">
                    {this.state.BXHMV}
                </div>
            </div>
        );
    }
}

export default BoxChartMV;
