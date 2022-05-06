import React from "react";
import './form-input.css';


const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
             label ?
             (
             <label className={`${otherProps ? 'shrink' : ''}'input-label-form'`}>
                 {label}
             </label>
             )
             :null
             
            }
        </div>
    )
}

export default FormInput;