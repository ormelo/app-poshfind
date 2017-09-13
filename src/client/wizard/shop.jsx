import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Shop extends Component {

    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
      //temp: commented
      /* setTimeout("$('.splashImg').hide();$('#d1').fadeOut(0).fadeIn(500);",0);
      setTimeout("$('.splashImg').hide();$('#d2').fadeOut(0).fadeIn(500);",1000);
      setTimeout("$('.splashImg').hide();$('#d3').fadeOut(0).fadeIn(500);",2000);
      setTimeout("$('.splashImg').hide();$('#d4').fadeOut(0).fadeIn(500);",3000);
      setTimeout("$('#d4').fadeOut(100);$('#splash').hide();$('#tabs').fadeOut(0).fadeIn(500);",4000); */
      //temp: uncomment above and remove below line
      $('#splash').hide();$('#tabs').fadeOut(0).fadeIn(500);
      showProducts();
      if(document.body.clientWidth > 700) {
        $('.products').css('left',document.body.clientWidth/40);
      }
      $('.outline').hide();

      //click handler for tabs
      $(".tabs-menu a").click(function(event) {
          event.preventDefault();
          $(this).parent().addClass("current");
          $(this).parent().siblings().removeClass("current");
          var tab = $(this).attr("href");
          $(".tab-content").not(tab).css("display", "none");
          $(tab).fadeIn();
      });
    }
    render(){
        return (<div className="contentShop" style={{minHeight:minHeightVal,width:'100%'}}>
          
          <div className="products">
            <div className="product" id="product">
            </div>
          </div>

        <div id="tabs" style={{display:'none',position: 'fixed',width:'100%',top:'0px',left:'0px',height:'70px',textAlign:'center',padding:'22px'}}>


<div id="tabs-container">
    <ul className="tabs-menu">
        <li className="current"><a href="#tab-1">Tops</a></li>
        <li><a href="#tab-2">Dresses</a></li>
        <li><a href="#tab-3">Jeans</a></li>
        <li><a href="#tab-4">Kurtis</a></li>
    </ul>
    <div className="tab">
        <div id="tab-1" className="tab-content">
           
        </div>
        <div id="tab-2" className="tab-content">
           
        
        </div>
        <div id="tab-3" className="tab-content">
            
        </div>
        <div id="tab-4" className="tab-content">
           
        </div>
    </div>
</div>


        </div>

          <div id="splash" style={{margin:'0 auto',marginTop:'18vh'}}>
            <img id="d1" className="splashImg" src="img/dress1.png" style={{display:'none',width:'70px',position:'absolute',left:'10vw',top:'76px'}}/>
            <img id="d2" className="splashImg" src="img/dress2.png" style={{display:'none',width:'70px',position:'absolute',float:'right',right:'10vw',top:'76px'}}/>
            <div className="btnMsg" style={{margin:'0 auto',background:'rgba(234, 225, 244, 0.35)',top:'15vh'}}>
              <span>Finding best looks for you…</span>
            </div>
            <img id="d3" className="splashImg" src="img/dress3.png" style={{display:'none',width:'70px',position:'absolute',left:'10vw',marginTop: '132px'}}/>
            <img id="d4" className="splashImg" src="img/dress4.png" style={{display:'none',width:'70px',position:'absolute',float:'right',right:'10vw', marginTop: '130px'}}/>
          </div>
          <br/>


          <div id="footerSlideContainer">
          <div className="close"></div>
          <img className="size-hanger" src="img/hanger.png"></img>
          <div className="size-title blink">Trying size S</div>
            <div id="footerSlideContent">
              <div id="footerSlideText">
                <section className="variable slider">
                <div id="size1" className="size-slide">
                </div>
                <div id="size2" className="size-slide">
                </div>
                <div id="size3" className="size-slide">
                </div>
                <div id="size4" className="size-slide">
                </div>
              </section>
              </div>
            </div>
          </div>

          <div className="fit-shoulder-left"></div>
          <div className="fit-shoulder-right"></div>
          <div className="fit-waist-left"></div>
          <div className="fit-waist-right"></div>

          <div class="button-container">
                  <a className="btn" id="buy-now" style={{position:"fixed",bottom:"20px",margin: "0 auto",display:"none"}}><span>Buy Now</span></a>
                </div>
            
          </div>
          );
    }
}

export default Shop;