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
                  <div className="headline">Try dresses on you!</div><br/>
                  <div className="description">Take a selfie & try dresses on you to see how they look & fit you before you buy.</div>
                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile" className="btn"><span>Get Started</span></a>}
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