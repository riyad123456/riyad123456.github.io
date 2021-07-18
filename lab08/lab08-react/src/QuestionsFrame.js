import React, { useState, useEffect } from 'react';
import delIcon from './delete.png';
import FormInput from './Components/FormInput.js'
import FormRadio from './Components/FormRadio.js'
class QuestionsFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  msgthreads = ()=> {
     
    return this.props.typeId === 0 ? <FormInput label={this.props.qst}/> : <FormRadio label={this.props.qst}/>;

  }
  render(){
  return (
    <div class="card" style ={{"background":"rgb(39, 38, 39)","color":"white",'border':'0.4px solid white'}} >
      <div class="card-body">
        { this.msgthreads()} <br></br>
        <a href="#" class="btn btn-danger" onClick={this.props.evClick} style ={{"padding":"10px 10p 0px 10px"}}><img style ={{"font-color":"white"}} width="15px" height="15px"src={delIcon}></img></a>
      </div>
    </div>
  );
}
}


export default QuestionsFrame;