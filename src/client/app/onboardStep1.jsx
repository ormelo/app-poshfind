import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class OnboardStep1 extends Component {
    componentDidMount(){
      gtag('event', 'Route', {'type':'click', 'label':'onboard-step1-click'}); 
      $('.content').fadeOut(0).fadeIn(300);
    }
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>Poshfind e-measures you in a jiffy!</div><br/>
            <img src="../img/step2.png"  width="160px" style={{margin:'0 auto',width:'420px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/step2" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Next</span>
            </Link>
          </div>
          );
    }
}

export default OnboardStep1;