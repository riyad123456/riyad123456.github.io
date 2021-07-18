import React, { useState, useEffect } from 'react';
import FormInput from './FormInput.js'
import FormRadio from './FormRadio.js'
class QstFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  msgthreads = ()=> {
     
    return this.props.typeId === 0 ? <FormInput label={this.props.qst}/> : <FormRadio label={this.props.qst}/>;

  }
  render(){
  return (
    <div class="card" style= {{"background":"rgb(39, 38, 39)","color":"white",'border':'0.4px solid white'}} >
      <div class="card-body">
        { this.msgthreads()} <br></br>
      </div>
    </div>
  );
}
}


export default QstFrame;