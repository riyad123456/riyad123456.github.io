import './App.css';
import React from 'react';
import Menu from './Components/Menu.js';
import {useHistory} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
var Content = {'en':{
  'descr1':'A global leader in survey software. 20 million questions answered daily.',
  'tab1':'About',
  'tab2':'Create',
  'tab3':'Contact us',
  'b1': 'Get started'
          },
'fr':{
  'descr1':'Un leader mondial des logiciels de sondage. 20 millions de questions répondues quotidiennement.',
  'tab1':'à propos',
  'tab2':'Créer',
  'tab3':'Contactez nous',
  'b1': 'Commençez la création'
}
};
function HomePageCard(props){
  return(
    <div class="card" id={props.id}>
        <h5 class="card-header" id="card-header" style={{'color':'black'}}>{props.text}</h5>
        <div class="card-body" id="cardcontainer-2">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">YourSurvey is an amazing company that offers cloud-based software to support service solutions in brand insights, market insights, product experience, employee experience, customer experience, online survey development, and a suite of paid back-end programs. Wikipedia</p>
        </div>
      </div>
  );
}

function MyButton(props){
  let { lang } = useParams();
    return(
        <button class= {props.class} onClick={props.onclick}>{Content[lang]['b1']}</button>
       
    );
}

function Home() {
  
    let { lang } = useParams();
    let history = useHistory();
  return (
    <div className="Home">
    <Menu />
<div class="card text-center" id="cardcontainer">
  <div class="card-body" id="get">
    <p class="card-text" id="cardtext">{ Content[lang]['descr1']}</p>
    <MyButton class= "btn btn-primary" onclick = { () => {history.push(`/${lang}/create`)}}  />
    </div>
  <HomePageCard id="#about"  text={Content[lang]['tab1']}/>
  <HomePageCard id="#contact"  text={Content[lang]['tab3']}/>
</div>
    </div>
  );
}

export default Home;
