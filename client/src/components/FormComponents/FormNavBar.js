import React from 'react';
import '../../styles/formNavBar.css'
import { Link } from 'react-router-dom';

const FormNavBar = (props) => {
    return (
        <div className = "formNavBar">
        <div className = "row">
            <Link to = {props.before}>
                <button className = "backButton">Back</button>
            </Link>
            <div className = "logo">Spotted</div>
        </div>
        {props.children}
        <div className = "outer-bar">
            <div className = "inner-bar" style = {{width: props.width}}></div>
        </div>
        </div> 

     );
}
 
export default FormNavBar;