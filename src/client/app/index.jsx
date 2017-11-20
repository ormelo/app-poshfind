import React, { Component } from 'react';
import { render } from 'react-dom';
import Onboard from './onboard.jsx';
import OnboardStep1 from './onboardStep1.jsx';
import OnboardStep2 from './onboardStep2.jsx';
import OnboardTitle from './onboardTitle.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return (<div>
                  <div className="logo"></div>
                  <div className="line"/>
                  <img className="dbg" src="img/dbg.jpg" />
                  <div className="headline">TRY DRESSES ON YOU</div><br/>
                  <div className="description">Poseok lets you see how clothes look & fit you to make your shopping decision simple.</div>
                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile" className="btn"><span>GET STARTED</span></a>}
                  </div>
                </div>
          );
    }
}

render(<Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/onboard" render={()=>(
            <div>
            <OnboardTitle />
            <Route exact path="/onboard" component={Onboard}/>
            <Route exact path="/onboard/step1" component={OnboardStep1}/>
            <Route exact path="/onboard/step2" component={OnboardStep2}/>
          </div>)} />
        </div>
    </Router>, document.getElementById('container'));