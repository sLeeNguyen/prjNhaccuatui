import React, { Component } from 'react';
import CollectionPage from './page/CollectionPage';
import VideoPage from './page/VideoPage';
import PlayPage from './page/PlayPage';
import BXHPage from './page/BXHPage';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="container content" style={{maxWidth: '1200px', display: 'flow-root'}}>
                    <BXHPage/>
                </div>     
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;