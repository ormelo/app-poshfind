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
                
                  <div className="headline main">Try Dresses on You</div>
                  <div className="description" style={{marginTop: '-8px',fontFamily:'Quicksand', width:'90%'}}>See how dresses look &amp; fit you before deciding to buy!</div>
                  <br/>                  
                  <div className="button-container">
                    {<a id="cta" href="/fit-profile" className="btn"><span>Get Started</span></a>}
                  </div>
                  <div className="headline" style={{marginTop: '116px',fontSize:'24px'}}>How it works</div>
                  <div className="how-it-works" style={{marginTop: '40px'}}>
                      <div className="step-1"><img src="img/bstep1.png" width="120px"></img><div style={{fontFamily:'Quicksand'}}>Take a selfie</div></div>
                      <div className="step-arrow"><img src="img/a.png" width="18px"></img><img src="img/a.png" width="18px" className="arrow-2"></img></div>
                      <div className="step-2"><img src="img/bstep2.png" width="120px"></img><div style={{fontFamily:'Quicksand'}}>Trial & shop</div></div>
                  </div>

                  <div className="headline" style={{marginTop: '250px',fontSize:'24px'}}>What size to buy</div>
                  <div className="what-size" style={{marginTop: '40px'}}>
                    <div className="description" style={{top: '0px',position: 'relative', width: '320px', marginTop: '-10px'}}>PoseDing tells you exactly how each size fits you so you'll never order a wrong size again!</div>
                    <img src="img/bsize.png" className="testi-img" width="190px" style={{margin:'-20px auto'}}/>
                  </div>

                  <div className="headline" style={{marginTop: '450px',fontSize:'24px'}}>What users say</div>
                  <div className="what-users-say" style={{marginTop: '30px'}}>
                    <img src="img/testi.png" className="testi-img" width="60px" style={{margin:'0 auto'}}/>
                    <span className="testi-name">Priya Oswal, Bangalore</span>
                    <div className="bubbledLeft">When I ordered my dress based on size recommended by the app, I wasn't sure. But I got my dress shipped last Saturday and when I tried on, bingo.. Just the fit I wanted! Kudos & Good luck PoseOk!</div>
                  </div>

                  <div className="headline" style={{marginTop: '160px',fontSize:'24px'}}>Shop our newest range</div>
                  <div className="show-new-range" style={{marginTop: '40px'}}>
                    <img src="img/r1.jpg" className="testi-img" width="90%" />
                    <img src="img/r2.jpg" className="testi-img" width="90%" />
                    <img src="img/r3.jpg" className="testi-img" width="90%" />
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