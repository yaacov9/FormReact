import React from "react";
import Select from 'react-select';
import Axios from 'axios'

import globalVar from "../../../Variables";
import CheckValues from "../../../Check";
import { Line } from 'rc-progress';
import './Forms.css'

const optionGender = [
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Mme.', label: 'Mme.' },
];

class Inscription extends React.Component {
  constructor(props) {
    super(props);
  }

  updateGender(element) {
    this.setState({genderSelected: element, gender: element.value});
  }

  updateCountry(element) {
    this.setState({countrySelected: element, country: element.value});
  }

  async getAllCountries()
  {
    var countries = await  Axios.get(globalVar.url + "/countries")
    if(countries.data)
    {
      this.setState({countriesList:countries.data})
    }
  }

  prevButtonOnClick = () => {
    let tmp = this.state.step -=1;
    if(tmp<=1){
      tmp = 1;
    }
    this.setState({step: tmp})
  }

  nextButtonOnClick = () => {
    if(this.state.step === 3){
      this.sendData()
    }
    let tmp = this.state.step +=1;
    this.setState({step: tmp})
  }

  checkStep(step){
    if(step === this.state.step)
      return true
    else
      return false;
  }

  isPost = () => {
    return this.state.step >= 3;
  }
  // Initial States
  state = {
    genderSelected:"",
    countriesList:null,
    step: 1,
    gender: null,
    firstName: "",
    lastName: "",
    country: "",
    countrySelected: "",
    email: "",
    phone: "",
    tcu: false,
    isBusiness:false,
    companyName:""
  }

  //a refaire avec checkvalues
  verify() {
    if (this.state.ready == 0 || this.state.address == "" || this.state.email == "" || this.state.name == "" || this.state.password == "" || this.state.userName == "" || this.state.lastName == "") {
      return false;
    } else {
      return true;
    }
  }

  acceptTCU = ()=> {
    if(this.state.tcu)
      this.setState({tcu:false})
    else{
      this.setState({tcu:true})
    }
  }

  sendData() {
    console.log("jefgrth")
    /*if (!this.verify()) {
      return null;
    }*/
    Axios.post(globalVar.url + "/submit",
      {gender: this.state.gender,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone,
            tcu: this.state.tcu
            },{withCredentials:true})
    }

  render() {
    const nextButtonContent = (this.isPost()) ? "Submit" : "Next";
    const nextButtonPostClass = (this.isPost()) ? "post-btn" : "";
    const percent = (this.state.step-1)*33.33;
    let color
    if(percent >90){
      color = '#2eb32e';
    }else{
      color='#6400be'
    }
    if(!this.state.countriesList){
      this.getAllCountries()}
    return (
      <div className="Form" >
        <div className="Labels">
          <div className="labels">
            <div className="client label">
              Informations
            </div>
            <div className="country label">
              Country
            </div>

            <div className="bank label">
              Contact
            </div>
          </div>

        </div>
        <Line percent={percent} strokeWidth="1" strokeColor={color} />
        <div className="nav" >
          <p
            hidden={!this.checkStep(1)}
            className={!(this.state.isBusiness) ? "active" : ""}
            onClick={(event)=>{this.setState({isBusiness : false});}}>
            PERSONAL
          </p>
          <p
            hidden={!this.checkStep(1)}
            className={(this.state.isBusiness) ? "active" : ""}
             onClick={(event)=>{this.setState({isBusiness : true});}}>
            BUSINESS
          </p>
        </div>

        <div className="client-infos">
          <div className={"gender"} hidden={!this.checkStep(1)}>
            <Select
              placeholder="Select a Gender"
              onChange={this.updateGender.bind(this)}
              value={this.state.genderSelected}
              options={optionGender}
            />
          </div>
          <input placeholder="First name" type="text" value={this.state.firstName} onChange={(event)=>{this.setState({firstName : event.target.value});}}
                 hidden={!this.checkStep(1)} />
          <input placeholder="Last name" type="text" value={this.state.lastName} onChange={(event)=>{this.setState({lastName : event.target.value});}}
                 hidden={!this.checkStep(1)} />
          <input placeholder="Company name" type="text" value={this.state.companyName} onChange={(event)=>{this.setState({companyName : event.target.value});}}
                 hidden={!this.checkStep(1) || !this.state.isBusiness} />

          <div className="country-step" hidden={!this.checkStep(2)}>
              <Select
                placeholder="Select your country"
                onChange={this.updateCountry.bind(this)}
                value={this.state.countrySelected}
                options={this.state.countriesList}>
              </Select>
          </div>
          <input placeholder="Email" type="email" value={this.state.email} onChange={(event)=>{this.setState({email : event.target.value});}}
                 hidden={!this.checkStep(3)} />
          <input placeholder="Phone number" type="phone" value={this.state.phone} onChange={(event)=>{this.setState({phone : event.target.value});}}
                 hidden={!this.checkStep(3)} />
        </div>
        <div className="tcu">
          <p id="text" hidden={!this.checkStep(3)}>En cochant cette case, je reconnais avoir pris connaissance des <a
            href="https://i.ibb.co/C24jPLJ/image.png" target="_blank">conditions générales d'utilisation (CGU)</a>
            <input name="tcuAccept" type="checkbox" checked={this.state.tcu} onChange={(event)=>{this.acceptTCU()}}/>
          </p>
        </div>
        <div className="Buttons">
          <button id="button-prev"
                  className={"button-prev"}
                  disabled={this.checkStep(1)}
                  onClick={this.prevButtonOnClick.bind(this)}
                  hidden={this.state.step === 4}>
            Previous
          </button>
          <button id="button-next"
                  className={nextButtonPostClass}
                  onClick={this.nextButtonOnClick.bind(this)}
                  hidden={this.state.step === 4}>
            {nextButtonContent}
          </button>
        </div>
      </div>
    )
  }
}
export default Inscription;