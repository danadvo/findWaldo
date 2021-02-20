import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import Waldo from '../Waldo.png';
import './App.css';

function Heading(){

    return(
        <div className="Heading">
            <h1>Where's Waldo?</h1>
            <center>
            <ReactRoundedImage
                image={Waldo}
                roundedColor="red"
                hoverColor="white"
                imageWidth="180"
                imageHeight="180"
                roundedSize="20"
            />
            </center>
        </div>
    )
};

export default Heading;