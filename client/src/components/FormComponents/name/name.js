import React, { useState, useContext, useEffect, useRef } from 'react';
import '../../../styles/FormQuestions.css'
import FormNavBar from '../FormNavBar';
import { FormContext } from '../../../context/FormContext';
import GetSpotted from '../GetSpotted.js';
import Authenticated from '../Authentication';

const newLocal = true;
const Name = () => {
    const {dispatch, form} = useContext(FormContext)
    
    const [name, setName] = useState('')

    const [borderColor, setColor] = useState('lightgrey')
    const [write, setWrite] = useState(false)
    const [isAuthenticated, setAuthen] = useState(false)
    const [submitted, setSubmit] = useState(false)

    const nameInput = useRef()

    const handleChange = (e) => {
        setName(e.target.value)
        setWrite(true)
    }

    const authenticated = () => {
        const splitName = name.split("")
        splitName.map((letter) => {
            if (letter === " "){
                setAuthen(true)
            }
        })
        if (name.length <= 3 || !name.replace(/\s/g, '').length){
            setAuthen(false)
        }

        if (isAuthenticated === false){
            setColor('red')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        authenticated()
        setSubmit(true)

        dispatch({type: 'SUBMIT_NAME', name: name})
    }

    useEffect(() => {
        nameInput.current.focus()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [submitted])

  
    return (
        <div className = "noScroll" onTouchMove = {(e) => {e.preventDefault()}}>
        <FormNavBar before = "/" width = "25%">
        <div className = "name">
            <div className = "question">Question 1/4</div>
            <div className = "nameTitle">My full name is </div>
            <form onSubmit = {handleSubmit}>
                <Authenticated isAuthenticated = {isAuthenticated} isSubmitted = {submitted} from = "/name" to = "/gender" type = "name"></Authenticated>
                <input ref = {nameInput} onClick = {() => setColor('blue')} onChange = {handleChange} placeholder = "Grace Smith" type = "text" style = {{borderColor: borderColor}}></input>
                <GetSpotted written = {write}/>
            </form>
        </div>
        </FormNavBar>
        </div>
     );
}
 
export default Name;