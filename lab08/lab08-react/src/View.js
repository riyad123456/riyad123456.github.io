import React from 'react';

import Menu from './Components/Menu.js'
import { withRouter } from 'react-router-dom';
import QstFrame from './Components/QstFrame.js'

function Tab(props){
    return( 
      <li class="nav-item" role="presentation">
        <button class={props.class} id={props.id} data-bs-toggle="tab" data-bs-target={props.target} type="button" role="tab" aria-controls={props.controls} aria-selected={props.selected}>{props.content}</button>
      </li>
  );
}
var Content = {'en':{
  'input1':'Organisation name:',
"input2":'Target division:',
"input3":'Targeted team:'

  
          },
'fr':{
  'input1':"Nom de l'organisation:",
"input2":'Division:',
"input3":'équipe de travail:'
  
}
};
class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: new Array().concat(JSON.parse(localStorage.getItem('survey-data')))
      };
    }
    msgthreads = ()=> {
      console.log(localStorage.getItem('organisation-data'))
        return this.state.questions.map((msg)=>{
          return <div><QstFrame qst={msg[0]} typeId={msg[1]}  /><br></br></div>
        });
      }
    
    render() {
      let lang  = this.props.match.params.lang;
      return (
        <div className="View" >
                <Menu />
                <div id="view-content">
                <div class="d-flex justify-content-evenly" id="container-view">
                <div class="card" id="card-1" style={{"width": "18rem"}}>
                  <div class="card-body">
                    <h5 class="card-title" style={{'color':'rgb(34,34,34)'}}>{Content[lang]['input1']}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{JSON.parse(localStorage.getItem('organisation-data'))[0]}</h6>
                  </div>
                </div>
                <div class="card" id="card-1" style={{"width": "18rem"}}>
                  <div class="card-body">
                    <h5 class="card-title" style={{'color':'rgb(34,34,34)'}}>{Content[lang]['input2']}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{JSON.parse(localStorage.getItem('organisation-data'))[1]}</h6>
                  </div>
                </div>
                <div class="card" id="card-1" style={{"width": "18rem"}}>
                  <div class="card-body">
                    <h5 class="card-title" style={{'color':'rgb(34,34,34)'}}>{Content[lang]['input3']}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{JSON.parse(localStorage.getItem('organisation-data'))[2]}</h6>
                  </div>
                </div>
                </div>
                
                <form>
                {this.msgthreads()}<br></br>
                <button type="submit" id="saveandcontinue" class="btn btn-outline-primary"  >Submit</button>
                </form>
                </div>
                
        
    </div>
      );
    }
  } 


  export default withRouter(View);