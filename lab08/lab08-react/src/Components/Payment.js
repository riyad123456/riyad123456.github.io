import React from 'react';
import FormInput from './FormInput.js'
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
var Content = {'en':{
  'input1':'Expiry date:',
"input2":'Name:',
"input3":'Credit card number:',
'b1':'Pay'
  
          },
'fr':{
  'input1':"Date d'expiration:",
  "input2":'Nom:',
  "input3":'Numéro de la carte de crédit:',
  'b1':'payer'
  
}
};
class Payment extends React.Component {
        
    constructor(props) {
      super(props);
      this.state = {
        toggled: false
      };
    }
    validateInputs(){
        var  errorMessage = "";
        if(document.querySelector("#debit").value === ""){ errorMessage += `* ${'credit card field is empty.'}<br/>`}
        document.querySelector('#errorContent1').innerHTML = errorMessage;
        if (errorMessage === "" ){
          if(this.state.toggled){
            $('#inputerror1').toggle('show')
            this.setState({toggled: !this.state.toggled});
            } 
            this.routingFunction()
        } else {
            document.querySelector('#inputerror1').scrollIntoView(false);
          if(!this.state.toggled){
            $('#inputerror1').toggle('show')
            this.setState({toggled: !this.state.toggled});
        }
        }
         
        
       
         
    }
    routingFunction = () => {
      let { lang } = this.props.match.params;
      this.props.history.push(`/${lang}/create/view`);
  }
    componentDidMount() {
        $('#inputerror1').toggle('show');
    }
    render() {
      let { lang } = this.props.match.params;
        return(
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        
                        <div class="alert alert-danger " id="inputerror1" role="alert">
                                <strong>Error:</strong><br></br><p  id="errorContent1"></p>
                            </div>
                           <form>
                           <FormInput  id="Expiry" placeholder="Enter the expiry date of your credit card eg. '01/25'" label={Content[lang]['input1']} /><br></br>
                          <FormInput  id="CreditCardName" placeholder="Enter the name in your credit card" label={Content[lang]['input2']} /><br></br>
                          <FormInput  id="debit" placeholder="We ask for your credit card (Visa) number in case of no-show, 20$ will be charged." label={Content[lang]['input3']} /><br></br>
                          <FormInput  id="CVV" placeholder="Enter the 3-digit number in the back of your card" label="CVV:" /><br></br>
                          <button type="button" class="btn btn-outline-primary" onClick={()=>{$('#profile-tab').trigger('click')}}>Prev</button>
                                <button type="button" id="saveandcontinue" class="btn btn-outline-primary" onClick= {()=> { this.validateInputs()}}>{Content[lang]['b1']}</button>
                          </form>
                      </div>
          );
    }
  }

export default withRouter(Payment);