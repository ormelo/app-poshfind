import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
import WizTitle from './wizTitle.jsx';
import Shop from './shop.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateFitProfile extends Component {
    render(){
        return (<div>
                <div className="content">
                  <div>Position yourself inside the dotted outline and tap 'Scan' button</div>
                </div> 
              </div>
          );
    }
}

render(<Router>
        <div>
        <Route path="/fit-profile" render={()=>(
            <div>
            <div className="logo"/>
            <WizTitle />
            <Route exact path="/fit-profile" component={CreateFitProfile}/>
            <Route exact path="/fit-profile/update" component={CaptureMeasurements}/>
          </div>)} />
        <Route exact path="/shop" component={Shop}/>
        </div>
    </Router>, document.getElementById('containerWiz'));