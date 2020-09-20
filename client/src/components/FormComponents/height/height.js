import React, { useState, useRef, useEffect, useContext } from 'react';
import FormNavBar from '../FormNavBar';
import '../../../styles/FormQuestions.css'
import GetSpotted from '../GetSpotted';
import { FormContext } from '../../../context/FormContext';
import Authenticated from '../Authentication';

const Height = () => {
    const [foot, setFoot] = useState(0)
    const [inch, setInch] = useState(0)

    const [authenticated, setAuthen] = useState(true)
    const [written, setWritten] = useState(false)
    const [submitted, setSubmit] = useState(false)
   
    const [colorFoot, setFootColor] = useState('lightgrey')
    const [colorInch, setInchColor] = useState('lightgrey')

    const [borderFoot, setBorderFoot] = useState('lightgrey')
    const [borderInch, setBorderInch] = useState('lightgrey')

    const {dispatch} = useContext(FormContext)

    const footInput = useRef()
    const inchInput = useRef()

   const handleFoot = (e) => {
           console.log("in else")
           setSubmit(false)
            setFoot(e.target.value)
            setFootColor('black')
            setBorderFoot('blue')

   }
   
   const handleInch = (e) => {
           setInch(e.target.value)
           setWritten(true)
           setInchColor('black')
           setBorderInch('blue')
       
   }

   const changeFocus = (e) => {
    if (e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 32){
        footInput.current.blur()
        inchInput.current.focus()
    }
   }

   const handleSubmit = (e) => {
       e.preventDefault()
       if (inch >= 0 && inch < 12 && inch.replace(/\s/g, '').length && foot.replace(/\s/g, '').length){
           const height = foot.toString() + " ' " + inch.toString()
           setAuthen(true)
           setSubmit(true)
           dispatch({type: 'SUBMIT_HEIGHT', height: height})
       }
       else{
           setAuthen(false)
           setSubmit(true)
           setBorderInch('red')
           setBorderFoot('red')
       }
   }
    useEffect(() => {
        footInput.current.focus()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [submitted])

  
    return ( 
        <div>
            <FormNavBar before = "/gender" width = "75%">
            <div className = "height">
                <div className = "question">Question 3/4</div>
                <div className = "nameTitle">My height is</div>
                <form onSubmit = {handleSubmit}>
                    <div className = "group">
                        <input style = {{borderBottomColor: borderFoot}} ref = {footInput} type = "text" placeholder= '5' onKeyUp = {changeFocus} onChange = {handleFoot} inputmode = "numeric"></input>
                        <div style = {{color: colorFoot}}>'</div>
                        <input style = {{borderBottomColor: borderInch}} ref = {inchInput} type = "text" placeholder= '6' onChange = {handleInch} inputmode = "numeric"></input>
                        <div style = {{color: colorInch}}>"</div>
                    </div>
                    <Authenticated isAuthenticated = {authenticated} isSubmitted = {submitted} from = "height" to = "/age"/>
                    <GetSpotted written = {written}/>
                </form>
                </div>
                </FormNavBar>
        </div>
     );
}
 
export default Height;