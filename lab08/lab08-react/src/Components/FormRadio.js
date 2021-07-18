import React from 'react';


function FormRadio(props) {
    return (
        <div>
          <label style={{"font-weight":"bold"}}>{props.label}</label><br></br><br></br>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
        <label class="form-check-label" for="flexRadioDefault1">
          Yes
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
        <label class="form-check-label" for="flexRadioDefault2">
          No
        </label>
      </div>
      </div>
    );
  }

export default FormRadio;