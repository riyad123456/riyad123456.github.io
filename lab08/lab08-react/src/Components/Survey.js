import React from 'react';
import FormSelect from './FormSelect.js'
import FormInput from './FormInput.js'
import { useState, useEffect } from 'react';
import QuestionsFrame from '../QuestionsFrame.js';
import $ from 'jquery';
import {} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

var Content = {'en':{
  'input':'Input type:',
  'b1':'Save & Continue',
  'b2':'Add'
  
          },
'fr':{
  'input':"Type d'entrée:",
  'b1':'Sauvegarder et continuer',
  'b2':'Ajouter'
  
}
};

class Survey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        My_Array: new Array()
      };
      this.check = this.check.bind(this);
    }
    componentDidMount() {
      $('#add').attr('disabled','disabled');
      
      
  }
      
    msgthreads = ()=> {
      return this.state.My_Array.map((msg,index)=>{
        return <div><QuestionsFrame qst={msg[0]} typeId={msg[1]}  evClick={() => {this.removeElem(index)}}/><br></br></div>
      });
    }
    removeElem(i) {
      this.setState({
        My_Array: this.state.My_Array.filter((val,j) => i !== j)
      })
      console.log(this.state.My_Array)
    }
    check(){
      var qst = document.querySelector('#qst-field-input').value;
      if(qst === ""){
        $('#add').attr('disabled','disabled');
      } else {
        $('#add').removeAttr('disabled');
      }
    }
    doThis(){
        var qst = document.querySelector('#qst-field-input').value;
        document.querySelector('#qst-field-input').value = "";
        this.check()
        var type = document.getElementById('my-select').value;
        if(type === "Input field"){
          this.setState(
            {My_Array: this.state.My_Array.concat([[qst,0]])
          
    })
        } else if (type === "Radio field") {
          this.setState(
            {My_Array: this.state.My_Array.concat([[qst,1]])
          
    })
        }
        
   
}
    
    
    render() {
      let lang  = this.props.match.params.lang;
      return (
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <form>   
                      <div id="questions">
                        {this.msgthreads()}
                  </div><br></br>
                          <FormInput  id="qst-field-input" placeholder="Enter a question" label="Question:" onchange={this.check} /><br></br>
                          <FormSelect label={Content[lang]['input']} id="my-select" options={["Input field","Radio field"]}/><br></br>
                          <button type="button" id="add" class="btn btn-outline-primary" onClick={() =>{this.doThis()}} 
                          >{Content[lang]['b2']}</button><br></br><br></br>
                          <button type="button" class="btn btn-outline-primary" onClick={()=>{$('#home-tab').trigger('click')}}>Prev</button>
                          <button type="button" id="saveandcontinue" class="btn btn-outline-primary" onClick = {()=>{
                            document.querySelector('#contact-tab').classList.remove("disabled");
                            $('#contact-tab').trigger('click');
                            localStorage.setItem("survey-data",JSON.stringify(this.state.My_Array));
                          }}
                          >{Content[lang]['b1']}</button>
                          
                    </form>
                </div>
      );
    }
  } 


  export default withRouter(Survey);