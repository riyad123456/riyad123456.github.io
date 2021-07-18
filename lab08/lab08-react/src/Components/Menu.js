import '../App.css';
import React from 'react';
import companyLogo from '../logo.png';
import {useHistory} from 'react-router-dom';

import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
var Content = {'en':{
  'descr1':'A global leader in survey software. 20 million questions answered daily.',
  'tab1':'About',
  'tab2':'Create',
  'tab3':'Contact us'
          },
'fr':{
  'descr1':'Un leader mondial des logiciels de sondage. 20 millions de questions répondues quotidiennement.',
  'tab1':'à propos',
  'tab2':'Créer',
  'tab3':'Contactez nous'
}
};

function MenuElement(props){
    return(
      <li class="nav-item">
          <a class="nav-link active"  id="menuelem" style={{'cursor':'pointer'}} onClick= {props.onclick} href={props.href}>{props.text}</a>
        </li>
    );
}

function Menu() {
  let { lang } = useParams();
  var val1;
  var val2;
  var options = () => {
    if (lang === 'en') {val2 = 'Français';val1 = 'English';} 
    else {val2 = 'English';val1 = 'Français'}
  }

  let history = useHistory();
  options();
    return (
      <nav class="navbar navbar-dark " id="mynav">
    <div class="container-fluid">
      <a class="navbar-brand" id="title"  href="#"><img id="logo"src={companyLogo}/><strong>Y</strong>our <strong>S</strong>urvey</a>
        <ul class="nav nav-pills" >
          <MenuElement text={Content[lang]['tab1']} href = "#about"/>
          <MenuElement text={Content[lang]['tab2']} onclick = { () => {history.push(`/${lang}/create`)}}  />
          <MenuElement text={Content[lang]['tab3']} href = "#contact"/>
          <li class="nav-item">
            <select class="form-select"  onChange ={
              (event) => {
                
                window.location.replace(`/${event.target.value === 'English' ? 'en':'fr'}/`);

            }
              }>
            <option value={val1} selected>{val1}</option>
            <option value={val2}>{val2}</option>
          </select>
          </li>
        </ul>
        
    </div>
  </nav>
    );
  }

export default Menu;
