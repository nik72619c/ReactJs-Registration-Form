import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {Switch,Route} from 'react-router-dom';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Introduction } from './components/Introduction';
import { PersonalInfo } from './components/PersonalInfo';
import { RouterHead } from './components/RouterHead';

class App extends Component {


  constructor(){

    super();
    this.object={};
  }


  getFromIntroduction(obj){

    console.log("obj received", obj);
   this.object=obj;
    console.log("data received by appComponent", this.object);
    

  }


  render() {
    return (
      <div>
 
        <RouterHead/>

         <Switch>

<Route path="/" exact render={()=><Introduction propsfunc={this.getFromIntroduction.bind(this)}/>}/>
<Route path="/personalinfo"exact render={()=><PersonalInfo introObject={this.object}/>}/>

        </Switch> 
      
       


      </div>
    );
  }
}

export default App;
