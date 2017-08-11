import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Shop extends Component {
    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
      setTimeout("$('.splashImg').hide();$('#d1').fadeOut(0).fadeIn(500);",0);
      setTimeout("$('.splashImg').hide();$('#d2').fadeOut(0).fadeIn(500);",1000);
      setTimeout("$('.splashImg').hide();$('#d3').fadeOut(0).fadeIn(500);",2000);
      setTimeout("$('.splashImg').hide();$('#d4').fadeOut(0).fadeIn(500);",3000);
      setTimeout("$('#d4').fadeOut(100);",4000);
      $('.outline').hide();
    }
    render(){
        return (<div className="content" style={{minHeight:'600px',width:'100%'}}>
          <div style={{margin:'0 auto',marginTop:'18vh'}}>
            <img id="d1" className="splashImg" src="img/dress1.png" style={{display:'none',width:'70px',position:'absolute',left:'10vw'}}/>
            <img id="d2" className="splashImg" src="img/dress2.png" style={{display:'none',width:'70px',position:'absolute',float:'right',right:'10vw'}}/>
            <div className="btnMsg" style={{margin:'0 auto',background:'rgba(234, 225, 244, 0.35)',top:'15vh'}}>
              <span>Finding best looks for you…</span>
            </div>
            <img id="d3" className="splashImg" src="img/dress3.png" style={{display:'none',width:'70px',position:'absolute',left:'10vw',marginTop: '132px'}}/>
            <img id="d4" className="splashImg" src="img/dress4.png" style={{display:'none',width:'70px',position:'absolute',float:'right',right:'10vw', marginTop: '130px'}}/>
          </div>
          <br/>
            
          </div>
          );
    }
}

export default Shop;