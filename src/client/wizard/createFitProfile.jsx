import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
import Merchant from './merchant.jsx';
import WizTitle from './wizTitle.jsx';
import Shop from './shop.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreateFitProfile extends Component {
    propTypes: {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
    componentDidMount(){
      gtag('event', 'Stage', {'event_category':'load', 'event_label':'fit-profile'}); 
      Loggr.Log.trackUser(uid, "", "Fit profile page visited.");
      console.log('this.props.history:',this.props.history);
      if(variation == 1){
        $('#captureButton').show();
        $('.selfie').show();
        $('#captureButton').show();
      } else if(variation == 0) {
        $('#selfieMsg').html("Take a selfie when you're ready!");
        $('.loading-container').show();
      }
      var h = this.props.history;
      const unlisten = h.listen((location, action) => {
        // location is an object like window.location
        console.log('history.listen:', location);
        if(location.pathname == '/fit-profile') {
          window.location.reload();
        }
      })
      window.onScanComplete = function() {
        var fitStr = 'faceH:'+localStorage.getItem('faceH')+'faceW:'+localStorage.getItem('faceW')+'faceX:'+localStorage.getItem('faceX')+'faceY:'+localStorage.getItem('faceY')+'shoulderH:'+localStorage.getItem('shoulderH')+'shoulderW:'+localStorage.getItem('shoulderW')+'shoulderX:'+localStorage.getItem('shoulderX')+'shoulderY:'+localStorage.getItem('shoulderY');
        // alert(fitStr);
        h.push('/fit-profile/update');
        Loggr.Log.trackUser(uid, "", "selfie captured.");
        sendPic();
        //if(variation == 0) {
          $('.outline').hide();
        //}
        $('#capture-photo').hide();
        $('#snap').hide();
        $('#camera-stream').hide();
      }
    }
    render(){
        const { match, location, history } = this.props;
        return (<div>
                <div className="content">
                  <div class="select">
                  </div>
                  <div id="selfieMsg">Take a selfie to try on dresses over you.</div>
                </div> 
                <div className="loading-container" style={{display:'none'}}><div className="loading"></div><span className="loading-msg">Loading camera. Please wait...</span></div>
                 <input type="file" style={{display:'none'}} accept="image/*" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" dcvalue=""></input>
                 <center><img className="selfie" src="img/step1.png" style={{display:'none',width:'120px',marginTop:'40px'}}></img>
                 <div id="selfieImage"></div></center>
                 <div className="button-container" id="captureButton" style={{display:'none',marginTop:'40px'}}><label className="btn" htmlFor="file-1"><span>Click Selfie</span></label></div>
                 
              </div>
          );
    }
}

var CreateFitProfileWithRouter = withRouter(CreateFitProfile)
var ShopWithRouter = withRouter(Shop)

render(<Router>
        <div>
        <Route path="/fit-profile" render={()=>(
            <div>
            <div className="logo"/>
            <WizTitle />
            <Route exact path="/fit-profile" component={CreateFitProfileWithRouter}/>
            <Route exact path="/fit-profile/update" component={CaptureMeasurements}/>
          </div>)} />
        <Route path="/shop" render={()=>(
            <div>
            <div className="merchant-frame"><div class="logo"><span className="merchant-size-container">Please select size <span id="merchantSize">XL</span> below</span></div></div>
            <div className="logo"/>
            <Route exact path="/shop" component={ShopWithRouter}/>
            <Route path="/shop/buy" component={Merchant}/>
          </div>
          )}/>
        </div>
    </Router>, document.getElementById('containerWiz'));