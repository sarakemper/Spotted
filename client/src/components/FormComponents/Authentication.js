import React from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/FormQuestions.css'

const Authenticated = ({isAuthenticated, isSubmitted, from, to, type}) => {
        if (isAuthenticated === false && isSubmitted === true){
            console.log("in invalid")
            return <div className = "invalid">Invalid {type}</div>
        }
        else if (isAuthenticated === true && isSubmitted === true){
            console.log("in redirect")

            return <Redirect from = {from} to = {to}></Redirect>
        }
        else{
            console.log("in else")

            return <div></div>;
        }
}
 
export default Authenticated;