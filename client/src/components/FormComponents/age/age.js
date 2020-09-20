import React, { useState, useRef, useEffect, useContext } from 'react';
import FormNavBar from '../FormNavBar';
import { FormContext } from '../../../context/FormContext';
import Authenticated from '../Authentication';
import GetSpotted from '../GetSpotted';
import '../../../styles/FormQuestions.css'

const Age = () => {
    const [age, setAge] = useState(0)

    const [authenticated, setAuthen] = useState(true)
    const [written, setWritten] = useState(false)
    const [submitted, setSubmit] = useState(false)

    const [border, setBorderColor] = useState('lightgrey')

    const ageInput = useRef()

    const {dispatch} = useContext(FormContext)

   const handleAge = (e) => {
            setAge(e.target.value)
            setBorderColor('blue')
            setWritten(true)
   }


   const handleSubmit = (e) => {
       e.preventDefault()
       setSubmit(true)
        if (!age.replace(/\s/g, '').length){
            setAuthen(false)
           setBorderColor('red')

        }
       else if (age >= 0){
           setAuthen(true)
           dispatch({type: 'SUBMIT_AGE', age: age})
       }
       else{
           setAuthen(false)
           setBorderColor('red')
       }
   }

    useEffect(() => {
        ageInput.current.focus()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [submitted])

  
    return ( 
        <div className = "noScroll">
            <FormNavBar before = "/height" width = "100%">
            <div className = "age">
                <div className = "question">Question 4/4</div>
                <div className = "nameTitle">My age is</div>
                <form onSubmit = {handleSubmit}>
                    <input style = {{borderBottomColor: border}} ref = {ageInput} type = "text" placeholder= '16' onChange = {handleAge} inputmode = "numeric"></input>
                    <Authenticated isAuthenticated = {authenticated} isSubmitted = {submitted} from = "/age" to = "/instructions"/>
                    <GetSpotted written = {written}/>
                </form>
                </div>
                </FormNavBar>
        </div>
     );
}
 
export default Age;