import React from 'react';
import FormInput from './FormInput.js'
import { withRouter } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import $ from 'jquery';
var error = {
    'nameerror':'organisation name field is empty.',
    'divisionerror':'division name field is empty.',
    'teamerror':'team name field is empty.'

  }
  var Content = {'en':{
    'input1':'Organisation name:',
  "input2":'Target division:',
  "input3":'Targeted team:',
  'b1':'Save & Continue',
  'b2':'Cancel'
    
            },
  'fr':{
    'input1':"Nom de l'organisation:",
  "input2":'Division:',
  "input3":'équipe de travail:',
  'b1':'Sauvegarder et continuer',
  'b2':'annuler'
    
  }
  };
    class OrganisationForm extends React.Component {
        
        constructor(props) {
          super(props);
          this.state = {
            data: new Array(),
            toggled: false
          };
        }
        validateInputs(){
        
            var  errorMessage = "";
            if(document.querySelector("#name").value === ""){ errorMessage += `* ${error['nameerror']}<br/>`}
            if(document.querySelector("#division").value === ""){ errorMessage += `* ${error['divisionerror']}<br/>`}
            if(document.querySelector("#team").value === ""){ errorMessage += `* ${error['teamerror']}<br/>`}
            document.querySelector('#errorContent').innerHTML = errorMessage;
            
            document.querySelector('#inputerror').scrollIntoView(false);
            if (errorMessage === "" ){
              if(this.state.toggled){
                $('#inputerror').toggle('show')
                this.setState({toggled: !this.state.toggled});
            }
              document.querySelector('#profile-tab').classList.remove("disabled");
              $('#profile-tab').trigger('click');
              this.setState(
                {data: this.state.data.concat()})
                var arr = [document.querySelector("#name").value,document.querySelector("#division").value,document.querySelector("#team").value];
                localStorage.setItem("organisation-data",JSON.stringify(arr));
            } else {
              if(!this.state.toggled){
                $('#inputerror').toggle('show')
                this.setState({toggled: !this.state.toggled});
            }
            }
             
            
           
             
        }
        routingFunction = () => {
          let lang  = this.props.match.params.lang;
          this.props.history.push({
              pathname: `/${lang}`
          });
      }
        componentDidMount() {
            $('#inputerror').toggle('show');
            
        }
        
        render() {
            let lang  = this.props.match.params.lang;
            return(
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            
                              <div class="alert alert-danger "  id="inputerror" role="alert">
                                  <strong>Error:</strong><br></br><p  id="errorContent"></p>
                              </div>
                            <form>
                                    <FormInput  id="name" placeholder="Enter your Organisation name" label={Content[lang]['input1']} /><br></br>
                                    <FormInput  id="division" placeholder="Enter The targeted division of this survey" label={Content[lang]['input2']} /><br></br>
                                    <FormInput  id="team" placeholder="Enter The targeted team of this survey" label={Content[lang]['input3']} /><br></br>
                                    <button type="button" class="btn btn-outline-primary" onClick={()=>{   this.routingFunction()  }} >{Content[lang]['b2']}</button>
                                    <button type="button" id="saveandcontinue" class="btn btn-outline-primary" onClick= {()=> { this.validateInputs()}} >{Content[lang]['b1']}</button>
                                    
                              </form>
                          </div>
              );
        }
      }

export default withRouter(OrganisationForm);