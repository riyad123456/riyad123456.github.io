import './App.css';
import React from 'react';
import './Home.js';
import Survey from './Components/Survey.js'
import Menu from './Components/Menu.js'
import OrganisationForm from './Components/OrganisationForm.js'
import Payment from './Components/Payment.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


var Content = {'en':{
  'createTab1':'organisation information',
"createTab2":'Create Survey',
"createTab3":'Payment'
  
          },
'fr':{
  'createTab1':"Informations sur l'organisation",
"createTab2":'Créer sondage',
"createTab3":'Paiement'
  
}
};
function Tab(props){
    return( 
      <li class="nav-item" role="presentation">
        <button class={props.class} id={props.id} data-bs-toggle="tab" data-bs-target={props.target} type="button" role="tab" aria-controls={props.controls} aria-selected={props.selected}>{props.content}</button>
      </li>
  );
}





function Create() {
  let { lang } = useParams();
  return (
    <div className="Create" >
      <Menu />
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <Tab class="nav-link active" id="home-tab"  target="#home" controls="home" selected="true" content = {Content[lang]['createTab1'] }/>
          <Tab class="nav-link disabled" disabled  id="profile-tab"  target="#profile" controls="profile" selected="false" content = {Content[lang]['createTab2'] }/>
          <Tab class="nav-link disabled" disabled id="contact-tab"  target="#contact" controls="contact" selected="false" content = {Content[lang]['createTab3'] }/>
      </ul>
      <div class="tab-content" id="myTabContent">
        <OrganisationForm />
        <Survey />
        <Payment />
</div>
        
    </div>
  );
}


export default Create;
