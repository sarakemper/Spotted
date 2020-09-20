import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import DrawerToggleButton from './sidedrawer/DrawerToggleButton';


const Home = () => {

    return (
        <div className = "allHome">
            <div className = "home">
                <DrawerToggleButton />
                <div className = "container"> Spotted
                </div>
                <Link to = "/name" className = "link">
                    <button className = "getSpotted">
                        Become a model
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;