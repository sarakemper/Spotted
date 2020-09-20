import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css'
import {AiFillInfoCircle, AiFillHome, AiOutlineCheckSquare} from 'react-icons/ai'
import { MdContactMail} from 'react-icons/md'

const Toolbar = ({buttonClicked}) => {
    return ( 
        <nav className= "side-drawer">
            <div style = {{textAlign: "right"}}><button onClick = {buttonClicked} className = "side-drawer-exit">X</button></div>
            <div className = "side-drawer-logo">Spotted</div>
            <div className = "side-drawer-subtitle">Get discovered</div>
            <ul>
            <hr></hr>
                <li>
                    <Link to="/">
                        <AiFillHome className = "side-drawer-icon" />
                        <div>Home</div>
                    </Link>
                </li>
                <hr></hr>

                <li>
                    <Link to="/" style = {{width: "100%"}}>
                        <AiFillInfoCircle className = "side-drawer-icon" />
                        <div>About</div>
                    </Link>
                </li>
                <hr></hr>

                <li>
                    <Link to="/">
                        <AiOutlineCheckSquare className = "side-drawer-icon" />
                        <div>How it works</div>
                    </Link>
                </li>
                <hr></hr>

                <li>
                    <Link to="/">
                        <MdContactMail className = "side-drawer-icon" />
                        <div>Contact</div>
                    </Link>
                </li>
                <hr></hr>

                <li>
                    <Link to="/name">
                      <button className = "side-drawer-button">Become a model</button>  
                    </Link>
                </li>

            </ul>
      </nav>
     );
}
 
export default Toolbar;