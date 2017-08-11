import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Shop extends Component {
    componentDidMount(){
      $('.content').fadeOut(0).fadeIn(300);
    }
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>Shop</div><br/>
            
          </div>
          );
    }
}

export default Shop;