import React from 'react';
import { NavLink } from 'react-router-dom';
// import TextField from 'material-ui/TextField';
export class Introduction extends React.Component{

  constructor(){

   
    super();
     this.obj={};
  }

  proceed(){

    this.obj.name=this.refs.namefeild.value;
    this.obj.desc=this.refs.descfeild.value;
    console.log("values filled...",this.obj);

    this.props.propsfunc(this.obj);

  }

    render(){
      

      return(
 < div>

  <div className="input-field col s6">
          <input id="name" type="text" className="validate w-50" ref="namefeild"/>
          <label htmlFor="name">Your Name</label>
        </div>

         <div className="input-field col s6">
          <input id="desc" type="text" className="validate" ref="descfeild"/>
          <label htmlFor="desc">Description</label>
        </div>

        <div><NavLink to="/personalinfo" className="waves-effect waves-light btn text text-white" onClick={this.proceed.bind(this)}>Proceed</NavLink></div>

    </div>
    

      )}

}