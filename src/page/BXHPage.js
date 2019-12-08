import React, { Component } from 'react';
import BXH from '../components/bxh/BXH';
import RightVideo from '../components/video/RightVideo';

class BXHPage extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-9 left">
                    <BXH/>
                </div>
                <div className="col-md-3 right">
                    <RightVideo hide={true}/>
                </div>
            </div>
        );
    }
}

export default BXHPage;