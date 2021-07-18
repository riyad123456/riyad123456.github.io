import React from 'react';


function FormInput(props) {
    return (
      <div class="form-group">
              <label style={{"font-weight":"bold",'color':'white'}} for={this}>{props.label}</label><br></br><br></br>
              <input disabled={props.disabled} type="text" class="form-control" onChange={props.onchange} id={props.id} placeholder={props.placeholder} required ></input>
          </div>
    );
  }

export default FormInput;