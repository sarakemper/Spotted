import React from 'react';
import '../../styles/uploadInstructions.css'
import '../../styles/formNavBar.css'
import { Link } from 'react-router-dom';

const UploadInstructions = () => {
    return ( 
        <div className = "upload-instructions">
            <div className = "upload-instructions-navbar">
                <Link to = "/age">
                    <button className = 'button'>Back</button>
                </Link>
                <div className = "logo">Spotted</div>
            </div>
                <div className = "upload-instructions-title">How to take pictures agents will love</div>

                <div className = "upload-instructions-group-cards">
                    <div className = "card">
                        <div className = "circle">1</div>
                            <div>
                                <div className = "subtitle">Be Natural</div>
                                <p>Agents want to see your natural beauty.  No makeup, wear your hair down or in a low pony tail, and please shoot your photos in daylight with a neutral background. You’ll already look like a professional!</p>
                            </div>
                        </div>
                    <div className = "card">
                            <div className = "circle">2 </div>
                            <div>
                                <div className = "subtitle">Don't Submit Professional Photos</div>
                                <p>Don’t worry about professional photos.  Grab your friend or family member and channel your inner supermodel.</p>
                            </div>
                        </div>
                    <div className = "card">
                        <div className = "circle">3</div>
                        <div>
                            <div className = "subtitle">Try To Replicate Example Pictures</div>
                            <p>Do your best to replicate the photos on the next page.  These are the types of photos agents are looking for.</p>
                        </div>
                    </div>
                </div>
                <div style = {{textAlign: "center"}}>
                    <Link to = "/upload">
                        <button className = "upload-instructions-get-spotted">Get Spotted</button> 
                    </Link>
                </div>
                
        </div>
     );
}
 
export default UploadInstructions;