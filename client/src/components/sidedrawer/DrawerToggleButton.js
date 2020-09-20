import React, { useState } from 'react';
import './DrawerToggleButton.css'
import Toolbar from '../toolbar/toolbar';
import BackDrop from '../backdrop/backdrop';

const DrawerToggleButton = () => {
    const [clicked, setClicked] = useState(false)
    
    const buttonClicked = (e) => {
        e.preventDefault();
        const clickMe = !clicked
        setClicked(clickMe)
    }

    if (clicked === false){
        return (
            <button className="toggle-button" onClick = {buttonClicked}>
                <div className = "toggle-button-line"/>
                <div className = "toggle-button-line"/>
                <div className = "toggle-button-line"/>
            </button>
         );
    }
    else{
        return <div>
        <div></div>
            <BackDrop/>
            <Toolbar buttonClicked = {buttonClicked}/>
        </div>
    }

    
}
 
export default DrawerToggleButton;