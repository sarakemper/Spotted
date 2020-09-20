import React from 'react';

const GetSpotted = ({written}) => {
    if (written === true){
        return <button className = "continue">Get Spotted</button>
    }
    else{
        return null;
    }
}
 
export default GetSpotted;