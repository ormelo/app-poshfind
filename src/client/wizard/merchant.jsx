import React, { Component } from 'react';
import { render } from 'react-dom';

class Merchant extends Component {
    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
      $('.outline').hide();
      $('.logo').css('top','-70px');
      $('.merchant-frame').show();
      $('#currProduct').attr('src', '../'+sessionStorage.getItem('current-product').replace(/shop/g,''));
      $('#buyPrice').html('');
      ga('send', 'event', 'Stage', 'load', 'buy');
      $.get("../"+getCategory()+".json", function(data, status){
          console.log(sessionStorage.getItem('current-product-index'));
          console.log(data[sessionStorage.getItem('current-product-index')].price);
          $('#buyPrice').html(data[sessionStorage.getItem('current-product-index')].price);
          $('#merchantSize').html("'"+sessionStorage.getItem('current-product-size')+"'");
      });
      $('#checkAvailability').click(function(){
        if($('#pincode').val() == '') {
          $('#pincode').focus();
          document.getElementById('pincode').focus();
          $('#pincode').css('border','2px solid #000');
          ga('send', 'event', 'Buy', 'load', 'pincode-need-to-enter');
        } else {
          ga('send', 'event', 'Buy', 'load', 'pincode-entered');
          alert('Sorry, we are working on enabling shipping in your area. We will notify you soon.');
        }
      });
    }
    render(){
        return (<div className="content buy">
            <div style={{fontSize:'22px',textAlign:'center',lineHeight:'28px',paddingTop:'6px'}}><img style={{width:'120px'}} src="../img/merch_logo.png"/> 
            </div>
            <hr style={{marginTop: '10px', marginBottom: '14px'}}/>
            <div style={{width: '250px', margin: '0 auto', left: '0',right: '0'}}>
            <span className="rating"><b style={{width: '3.6em'}}><i>Rating: 4.2 out of 5</i></b></span><span style={{fontSize: '12px'}}>(22)</span>
            <div className="description" style={{paddingBottom:'0px',marginTop:'0px',display:'inline',marginLeft: '12px',fontSize: '16px'}}>
                Size:&nbsp;&nbsp; <select id="sizes" style={{marginTop:'5px',height:'40px',fontSize:'18px'}}>
                    <option id="s1" value="m">M</option>
                    <option id="s2" value="l">L</option>
                    <option id="s3" value="xl">XL</option>
                    <option id="s4" value="xxl">XXL</option>
                </select>
            </div>
            </div>
            <div style={{margin: '0 auto',left:'0',right:'0',fontSize:'16px',color:'#ff9800'}}>
            ₹<span id="buyPrice" style={{fontWeight:'bold'}}></span>
            </div>
            <br/>
            <div><img id="currProduct" style={{width:'100px'}} src=""/></div>
            <input type="text" id="pincode" placeholder="Enter Pincode for shipping" style={{width:'280px',height:'40px',padding:'10px',fontSize:'16px',marginTop:'12px',border:'1px solid #d2d2d2'}}/>
            <div className="btn-check" id="checkAvailability"><span>Check Availability</span></div>
          </div>
          );
    }
}

export default Merchant;