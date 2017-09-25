import React, { Component } from 'react';
import { render } from 'react-dom';

class Merchant extends Component {
    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
      $('.outline').hide();
      $('#currProduct').attr('src', '../'+sessionStorage.getItem('current-product').replace(/shop/g,''));
      $('#checkAvailability').click(function(){
        alert('Sorry, we are working on enabling shipping in your area. We will notify you soon.');
      });
    }
    render(){
        return (<div className="content buy">
            <div style={{fontSize:'22px',textAlign:'center',lineHeight:'28px',paddingTop:'6px'}}><img style={{width:'120px'}} src="../img/merch_logo.png"/> 
            </div>
            <hr style={{marginTop: '10px', marginBottom: '14px'}}/>
            <div style={{width: '200px', margin: '0 auto', left: '0',right: '0'}}>
            <img src="../img/reviews.png" style={{width: '180px'}}/>
            </div>
            <div style={{margin: '0 auto',left:'0',right:'0'}}>
            ₹<span id="buyPrice"></span>
            </div>
            <br/>
            <div><img id="currProduct" style={{width:'140px'}} src=""/></div>
            <div className="description" style={{paddingBottom:'0px',marginTop:'0px'}}>
                Select Size:&nbsp;&nbsp; <select id="sizes" style={{marginTop:'5px',height:'40px',fontSize:'18px'}}>
                    <option id="s1" value="m">M</option>
                    <option id="s2" value="l">L</option>
                    <option id="s3" value="xl">XL</option>
                    <option id="s4" value="xxl">XXL</option>
                </select>
            </div>
            <input type="text" placeholder="Enter Pincode for shipping" style={{width:'280px',height:'40px',padding:'10px',fontSize:'16px',marginTop:'12px'}}/>
            <div className="btn-check" id="checkAvailability"><span>Check Availability</span></div>
          </div>
          );
    }
}

export default Merchant;