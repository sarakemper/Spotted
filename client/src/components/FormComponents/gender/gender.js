import React, { useState, useContext, useEffect} from 'react';
import FormNavBar from '../FormNavBar';
import '../../../styles/FormQuestions.css'
import { Link } from 'react-router-dom';
import GetSpotted from '../GetSpotted';
import { FormContext } from '../../../context/FormContext';

const Gender = () => {
    const [clicked, setClicked] = useState(false)
    const {dispatch} = useContext(FormContext)

    const [gender, setGender] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({type: 'SUBMIT_GENDER', gender: gender})
        setClicked(true)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return ( 
        <div>
            <FormNavBar before = "/name" width = "50%">
            <div className = "gender">
                <div className = "question">Question 2/4</div>
                <div className = "nameTitle">I identify as </div>
                <form onSubmit = {handleClick}>
                    <button onClick = {() => setGender('Female')}className = "gender-button">Female</button>
                    <button onClick = {() => setGender('Male')}className = "gender-button">Male</button>
                    <button onClick = {() => setGender('Other')}className = "gender-button">Other</button>
                </form>
                <Link to = "/height" className = "link">
                    <GetSpotted written = {clicked}/>
                </Link>
            </div>
            </FormNavBar>
        </div>
     );
}
 
export default Gender;