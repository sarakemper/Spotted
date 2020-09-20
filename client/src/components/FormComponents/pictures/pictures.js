import React, { useState } from 'react';
import './pictures.css';
import upClose from '../../../images/up_close.jpg'
import fullLength from '../../../images/full_length.jpg'
import picPortrait from '../../../images/portrait.jpg'
import ReactCrop from 'react-image-crop'
import { Link } from 'react-router-dom';
import 'react-image-crop/dist/ReactCrop.css';


const Upload = () => {
    const [full, setFull] = useState(fullLength)
    const [portrait, setPortrait] = useState(picPortrait)
    const [close, setClose] = useState(upClose)

    const [upload, setImageUpload] = useState(null) //image link uploaded

    const [croppedFile, setFile] = useState(null) //the newly croped image file
    const [croppedFileName, setName] = useState('') //the newly croppped file name
    const [imageRef, setImageRef] = useState(null) //reference to image
    const [croppedImageURL, setImageURL] = useState(null) //cropped image link

    const [crop, setCrop] = useState({
        aspect: 0.72222222,
        height: 270,
    })

    const imageMaxSize = 1000000000
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
    const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

    const verifyFile = (files) => {
        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if(currentFileSize > imageMaxSize) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                setImageUpload(null)
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)){
                alert("This file is not allowed. Only images are allowed.")
                setImageUpload(null)
                return false
            }
            return true
        }
    }

    const getCroppedImg = (image, crop, filename) => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )
    
        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                dataURLtoFile(reader.result, filename)
            }
        })
    }

    const dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        setFile(croppedImage)
        setImageURL(URL.createObjectURL(croppedImage))
    }

    const handleChange = (e, filename, type) => {
        console.log(type)
        if (verifyFile(e.target.files) === true){
            const url = URL.createObjectURL(e.target.files[0])
            setImageUpload(url)
            setName(filename)
            type(null)
        }
    }

    const handleCrop = (crop) => {
        setCrop(crop)
    }

    const handleSubmit = (e) => {
        console.log(croppedImageURL)
        e.preventDefault();

        //UPLOAD TO FORM

        if (close === null){
            setClose(croppedImageURL)
        }
        else if (full === null){
            console.log("in full")
            setFull(croppedImageURL)
        }
        else{
            console.log("in else")
            setPortrait(croppedImageURL)
        }
        setImageUpload(null);

    }

    const onImageLoaded = (image) => {
        console.log(image)
        setImageRef(image)
    }

    const onCropComplete = (crop) => {
        console.log(crop)
        if (imageRef!== null && crop.width && crop.height) {
            getCroppedImg(imageRef, crop)
        }
    }

    return ( 
        <div className = "upload">
            <div className = "upload-navbar">
                <Link to = "/instructions">
                    <button className = 'button'>Back</button>
                </Link>
                <div className = "upload-title">Let's take a selfie.</div>
            </div>
            {upload === null ?
            <div>
            <div className = "upload-instructions-description">Thanks for answering our questions and reading our instructions. Get ready to be introduced to Canada’s top agencies.  Please upload a full-length, close-up and profile photo of yourself.</div>

            <div className = "pictures">
                <div className = "full-length">
                    <div className = "title">Full Length</div>
                    <img src = {full} style = {{height: "270px"}} alt = "full size"></img>
                    <label className="custom-file-upload">
                         Upload full length
                         <input accept = {acceptedFileTypesArray} type = "file" onChange = {(e) => {handleChange(e, 'full-length-upload.jpg', setFull)}}></input>
                    </label>
                </div>
                <div className = "full-length">
                    <div className = "title">Portrait</div>
                    <img src = {portrait} style = {{height: "270px"}} alt = "portrait"></img>
                    <label className="custom-file-upload">
                         Upload portrait
                         <input accept = {acceptedFileTypesArray} type = "file" onChange = {(e) => {handleChange(e, 'portrait-upload.jpg', setPortrait)}}></input>

                    </label>
                </div>
                <div className = "full-length">
                    <div className = "title">Close Up</div>
                    <img src = {close} style = {{height: "270px"}} alt = "close up"></img>
                    <label className="custom-file-upload">
                         Upload close up
                         <input accept = {acceptedFileTypesArray} type = "file" onChange = {(e) => {handleChange(e, 'close-up-upload.jpg', setClose)}}></input>
                    </label>
                </div>
            </div>
            {/* <div className = "centerSubmit">
                <button className = "submit">Submit my application</button>
            </div> */}
            </div>

            :
            <div>
                <ReactCrop src = {upload} keepSelection = "true" onChange = {handleCrop} crop = {crop} onImageLoaded = {onImageLoaded} onComplete = {onCropComplete}/>
                <button onClick = {handleSubmit}>Upload</button>
            </div>

            }
        </div>
     )
}
 
export default Upload;