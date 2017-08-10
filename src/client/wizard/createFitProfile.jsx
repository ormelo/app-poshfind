import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
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
      
      console.log('this.props.history:',this.props.history);
      var h = this.props.history;
      window.onScanComplete = function() {
        h.push('/fit-profile/update');
        $('.outline').hide();
        $('#capture-photo').hide();
        $('#snap').hide();
        $('#camera-stream').hide();
      }
    }
    render(){
        const { match, location, history } = this.props;
        return (<div>
                <div className="content">
                  <div>Position yourself inside the dotted outline and tap 'Scan' button</div>
                </div> 
              </div>
          );
    }
}

var CreateFitProfileWithRouter = withRouter(CreateFitProfile)

render(<Router>
        <div>
        <Route path="/fit-profile" render={()=>(
            <div>
            <div className="logo"/>
            <WizTitle />
            <Route exact path="/fit-profile" component={CreateFitProfileWithRouter}/>
            <Route exact path="/fit-profile/update" component={CaptureMeasurements}/>
          </div>)} />
        <Route exact path="/shop" component={Shop}/>
        </div>
    </Router>, document.getElementById('containerWiz'));