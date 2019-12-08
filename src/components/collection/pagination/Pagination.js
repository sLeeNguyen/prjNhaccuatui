import React, { Component } from 'react';
import './style.css'

class Pagination extends Component {
    render () {
        return (
            <div className="pagination">
                <a href="#" className="number clone">Trang đầu</a>
                <a href="#" className="number Active">1</a>
                <a href="#" className="number">2</a>
                <a href="#" className="number">3</a>
                <a href="#" className="number">4</a>
                <a href="#" className="number">5</a>
                <a href="#" className="number">6</a>
                <a href="#" className="number">7</a>
                <a href="#" className="number">8</a>
                <a href="#" className="number">9</a>
                <a href="#" className="number">10</a>
                <a href="#" className="number">→</a>
                <a href="#" className="number">Trang cuối</a>
            </div>
        );
    }
}

export default Pagination;