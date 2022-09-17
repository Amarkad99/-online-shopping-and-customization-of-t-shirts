import React from "react";

import './Display.css'

const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'



const Settings = ({color, upperText, lowerText ,uploadImage, textSize, textColor, saveDetails }) =>{
    return (

        <div className="card bg-light container">
             <h3 className="text-center">Settings</h3>
             <h4>Change T-shirt Color</h4>
             <div className="tshirt-color">
                <img onClick={color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white" />
                <img onClick={color} src={`${urlImgBase}black.png`} alt="black-tshirt" id="black"/>
                <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey-tshirt" id="grey"/>
                <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue"/>
                <img onClick={color} src={`${urlImgBase}red.png`} alt="red-tshirt" id="red"/>

             </div>
             <hr />
             <h4>Write Text</h4>
             <input onClick={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
             <input onClick={lowerText} type="text" className="form-control form-control-sm" placeholder="Lower Text" />
            <hr />
            <h4>Upload Image</h4>
            <div className="form-group">
                <input onChange={uploadImage} type="file" className="form-control-file mb-2"/>
               
            </div>
            <hr />
            <h4>Text Size</h4>
            <input onChange={textSize} type="range" min="10" max="100" />
            <hr />
            <h4>Text Color</h4>
            <select onChange={textColor} className="form-control form-control-sm mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Orange</option>
            </select>
            <hr />
            <button onClick={saveDetails} className="btn- btn-primary btn-sm mb-4">Save</button>
        </div>
        
    )
}

export default Settings
