import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class OnboardStep2 extends Component {
    componentDidMount(){
      gtag('event', 'Route', {'event_category':'click', 'event_label':'onboard-step2-click'}); 
      $('.content').fadeOut(0).fadeIn(300);
    }
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center',padding:'0 20px'}}>Try on clothes online & order the right fit!</div><br/>
            <img src="../img/step3.png"  width="160px" style={{margin:'0 auto',width:'300px',display:'inherit',padding:'40px'}}/>
            <a href="/fit-profile" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Get started</span>
            </a>
          </div>
          );
    }
}

export default OnboardStep2;