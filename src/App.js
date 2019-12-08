import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import CollectionPage from './page/CollectionPage';
import VideoPage from './page/VideoPage';
import PlayPage from './page/PlayPage';
import BXHPage from './page/BXHPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

class App extends Component {
    render() {
        return(
            <Router>
                <Header/>
                <div className="container content" style={{maxWidth: '1200px', display: 'flow-root'}}>
                    <Switch>
                        <Route exact path="/collection" children={<CollectionPage/>}/>
                        <Route exact path="/video" children={<VideoPage/>}/>
                        <Route exact path="/play" children={<PlayPage/>}/>
                        <Route exact path="/bxh" children={<BXHPage/>}/>
                    </Switch>
                </div>     
                <Footer/>
            </Router>
                
        );
    }
}

export default App;