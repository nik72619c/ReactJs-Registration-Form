import React from "react";
import "../mycss/personal.css";
import 'materialize-css/dist/css/materialize.min.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDU2-J3CgA_dyAlGbwWa45N31FZidoZVXQ",
    authDomain: "myreactserver.firebaseapp.com",
    databaseURL: "https://myreactserver.firebaseio.com",
    projectId: "myreactserver",
    storageBucket: "",
    messagingSenderId: "137747057460"
  };

firebase.initializeApp(config);
export class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log("scond props",props);
        this.userObject=this.props.introObject;
        console.log("userObjecyt",this.userObject);
      
    }

    submitForm(){

        this.userObject.state=this.refs.state.value;
        this.userObject.age=this.refs.age.value;

        var ethnicity=document.getElementsByName("group1");
        ethnicity.forEach(item=>{

            if(item.checked){
                this.userObject.Ethnicity=item.value;
                        }
        });

        var race=document.getElementsByName("group2");
        race.forEach(item=>{

            if(item.checked){

                this.userObject.Race=item.value;
            }
        });

        var sex=document.getElementsByName("group3");
        sex.forEach(item=>{
            if(item.checked){

                this.userObject.Sex=item.value;
                        }
        })

        this.userObject.Height=this.refs.height.value;
        this.userObject.weight=this.refs.weight.value;
        console.log("userObjecy final",this.userObject);

        const db=firebase.database().ref("users");
        db.push().set(this.userObject);
        
    }

    render() {
        return (

            <div>
                <form>
                <div className="input-field col s6 w-50">
          <input id="state" type="text" className="validate" ref="state"/>
          <label htmlFor="state">State</label>
        </div>
        <hr/>
         <div className="input-field col s6 w-50">
          <input id="age" type="number" className="validate" ref="age"/>
          <label htmlFor="age">Age</label>
        </div>
        <hr/>

<div>
        <p>Ethnicity</p>
        
        <p>
      <label>
        <input name="group1" type="radio" value="hispanic or latino" ref="hispanic"/>
        <span>Hispanic or Latino</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" value="non-hispanic or non-latino" ref="hispanic"/>
        <span>Non-Hispanic or Non-Latino</span>
      </label>
    </p>
        </div>

        <hr/>

        <div>
            <p>Race</p>

            <p>
      <label>
        <input name="group2" type="radio" value="American Indian" refs="americanindian"/>
        <span>American Indian</span>
      </label>
    </p>

    <p>
      <label>
        <input name="group2" type="radio" value="Asian" ref="asian" />
        <span>Asian</span>
      </label>
    </p>

    <p>
      <label>
        <input name="group2" type="radio" value="Native Huwaiian or Native Pacific Islande" ref="native"/>
        <span>Native Huwaiian or Native Pacific Islander</span>
      </label>
    </p>

    <p>
      <label>
        <input name="group2" type="radio" value="Black or African American" ref="blackamerican"/>
        <span>Black or African American</span>
      </label>
    </p>

    <p>
      <label>
        <input name="group2" type="radio"  value="White" ref="white"/>
        <span>White</span>
      </label>
    </p>


        </div>

        <div>
            <hr/>

            <p>Sex</p>

            <p>
      <label>
        <input name="group3" type="radio" value="male" ref="male"/>
        <span>Male</span>
      </label>
    </p>

    <p>
      <label>
        <input name="group3" type="radio" value="female" ref="female"/>
        <span>Female</span>
      </label>
    </p>
        </div>

        <hr/>

        <div>

            <p>Height</p>

             <div className="input-field col s6 w-50">
          <input id="height" type="text" className="validate" ref="height"/>
          <label htmlFor="height">Height (in inches)</label>
        </div>
        </div>
<hr/>
   <div>

<p>Weight</p>

 <div className="input-field col s6 w-50">
<input id="weight" type="text" className="validate" ref="weight"/>
<label htmlFor="weight">Weight (in pounds)</label>
</div>
</div>

<div className="submitbtn"><div><a className="waves-effect waves-light btn text text-white" onClick={this.submitForm.bind(this)}>Submit</a></div></div>
        
                </form>  
            </div>
        );
    }
}
