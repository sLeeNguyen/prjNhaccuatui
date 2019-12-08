import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Pagination extends Component {
    render () {
        return (
            <div className="pagination">
                <Link to="#" className="number clone">Trang đầu</Link>
                <Link to="#" className="number Active">1</Link>
                <Link to="#" className="number">2</Link>
                <Link to="#" className="number">3</Link>
                <Link to="#" className="number">4</Link>
                <Link to="#" className="number">5</Link>
                <Link to="#" className="number">6</Link>
                <Link to="#" className="number">7</Link>
                <Link to="#" className="number">8</Link>
                <Link to="#" className="number">9</Link>
                <Link to="#" className="number">10</Link>
                <Link to="#" className="number">→</Link>
                <Link to="#" className="number">Trang cuối</Link>
            </div>
        );
    }
}

export default Pagination;