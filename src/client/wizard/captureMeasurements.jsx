import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class CaptureMeasurements extends Component {
    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
    }
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>Capturing Measurements...</div><br/>
            <img src="img/step1.png"  width="160px" style={{margin:'0 auto',width:'200px',display:'inherit',padding:'40px'}}/>
            
          </div>
          );
    }
}

export default CaptureMeasurements;