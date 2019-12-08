import React, { Component } from 'react';

import './style.css';

class ChartMusic extends Component {
    render() {
<<<<<<< HEAD
        var { item, index } = this.props;
        var specClass = 'chart_tw';
        var rankChangeClass = 'chart_lw';
        var rankFlag = 0;

        if (index === 0) specClass += ' special-1';
        else if (index === 1) specClass += ' special-2';
        else if (index === 2) specClass += ' special-3';

        if (item.rankChange > 0) { rankChangeClass += ' up'; rankFlag=1; }
        else if (item.rankChange === 0) rankChangeClass += ' equal';
        else if (item.rankChange > -50) { rankChangeClass += ' down'; rankFlag=1; }
        else { rankChangeClass += ' new'; rankFlag=-1; }

        return(
            <div className="sub-chart">
                <span className={specClass}>
                    {index + 1}
                </span>
                <span className={rankChangeClass}>
=======
        return(
            <div className="sub-chart">
                <span className="chart_tw special-1">1</span>
                <span className="chart_lw nonechart up">
>>>>>>> parent of 202611a... demo1
                    <span className="icon"></span>
                    <p>{ rankFlag > 0 && item.rankChange || rankFlag < 0 && 'MỚI' }</p>
                </span>
                <div className="box_info_field">
                    <a href="#" title="">
                        <img src={require('../../musicPic/' + item.path)}></img>
                    </a>
                    <div className="infor">
                        <a href="#" title="" className="name_song">{ item.song }</a>
                        { 
                            item.name.map((i, key) => {
                                return <a href="#" title="" className="list_name_singer" key={key}>{ i }</a>
                            })
                        }
                    </div>
                </div>
                <div className="box_info_more_week">
                    <a href="#" title="Vị trí xếp hạng cao nhất" className="peak_position">
                        <span></span>
                        { item.rankMax }
                    </a>
                    <a href="#" title="Vị trí trên BXH tuần trước" className="last_weeks_position">
                        <span></span>
                        { item.rankLastWeek }
                    </a>
                    <a href="#" title="Số tuần nằm trong BXH" className="weeks_on_chart">
                        <span></span>
                        { item.numOfWeeks }
                    </a>
                </div>
                <div className="box_song_action">
                    <a href="#" title="Thêm bài hát Tự Tâm vào playlist yêu thích" className="button_add_playlist">
                    </a>
                    <a href="#" title="Nghe bài hát Tự Tâm" className="button_playing">
                    </a>
                </div>
            </div>
        );
    }
}

export default ChartMusic;