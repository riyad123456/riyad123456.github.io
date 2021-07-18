import React from 'react';


var myoptions = [];
function FormSelect(props) {
    for (let i = 0; i < props.options.length; i++) {
        myoptions[i] = props.options[i];
      }
    return(
      <div class="form-group" >
        <label for={this}>{props.label}</label><br></br><br></br>
        <select class="form-select" id={props.id} required  >
            {myoptions.map((option) => (
                <option value={option}>{option}</option>
              ))}
        </select>
      </div>
    );
  }

export default FormSelect;