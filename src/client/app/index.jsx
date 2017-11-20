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
                  <div className="slider dbg">
                    <div>
                        <img width="250px" className="banner" src="img/b1.jpg" alt="" />
                    </div>
                    <div>
                        <img width="250px" className="banner" src="img/b2.jpg" alt="" />
                    </div>
                    <div>
                        <img width="250px" className="banner" src="img/b3.jpg" alt="" />
                    </div>
                    <div>
                      <img width="250px" className="banner" src="img/b4.jpg" alt="" />
                  </div>
                  <div>
                      <img width="250px" className="banner" src="img/b3.jpg" alt="" />
                  </div>
                  <div>
                      <img width="250px" className="banner" src="img/b1.jpg" alt="" />
                  </div>
                </div>
                
                  <div className="headline main">TRY DRESSES ON YOU</div><br/>                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile" className="btn"><span>GET STARTED</span></a>}
                  </div>
                  <div className="headline" style={{marginTop: '116px',fontSize:'24px'}}>HOW IT WORKS</div>
                  <div className="line" style={{marginTop: '9px'}}></div>
                  <div className="how-it-works" style={{marginTop: '40px'}}>
                      <div className="step-1"><img src="img/bstep1.png" width="120px"></img><div>Take a selfie</div></div>
                      <div className="step-arrow"><img src="img/a.jpg" width="18px"></img></div>
                      <div className="step-2"><img src="img/bstep2.png" width="120px"></img><div>Try on dresses & shop</div></div>
                  </div>

                  <div className="headline" style={{marginTop: '250px',fontSize:'24px'}}>WHAT SIZE TO BUY</div>
                  <div className="line" style={{marginTop: '9px'}}></div>
                  <div className="what-size" style={{marginTop: '40px'}}>
                    <div className="description" style={{top: '0px',position: 'relative', width: '300px', marginTop: '-10px'}}>PoseOk tells you exactly how each size fits you so you'll never order a wrong size again!</div>
                    <img src="img/bsize.jpg" className="testi-img" width="190px" style={{margin:'0 auto'}}/>
                  </div>

                  <div className="headline" style={{marginTop: '450px',fontSize:'24px'}}>WHAT USERS SAY</div>
                  <div className="line" style={{marginTop: '9px'}}></div>
                  <div className="what-users-say" style={{marginTop: '40px'}}>
                    <img src="img/testi.png" className="testi-img" width="90%" style={{margin:'0 auto'}}/>
                  </div>

                  <div className="headline" style={{marginTop: '300px',fontSize:'24px'}}>SHOP OUR NEWEST RANGE</div>
                  <div className="line" style={{marginTop: '9px'}}></div>
                  <div className="show-new-range" style={{marginTop: '40px'}}>
                    <img src="img/r1.jpg" className="testi-img" width="90%" style={{margin:'0 auto'}}/>
                    <img src="img/r2.jpg" className="testi-img" width="90%" style={{margin:'222px auto'}}/>
                    <img src="img/r3.jpg" className="testi-img" width="90%" style={{margin:'446px auto',marginBottom: '100px'}}/>
                  </div>
                  <div id="G"></div>
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