import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedGif from "./AnimatedGif";


function NoButton( { onClick }) {
    return (
        <button className="NoButton" onClick={onClick}>
            Ne
        </button>
    );
}

export default function FirstPage() {

    const handleNoClick = () => {
        console.log("No clicked");
    };

    return (
        <div className="container">
            <h1>Möchtest du mein Valentins-Date sein?</h1>
            <div className="buttons-container">
                <Link to="/Location">
                    <button className="YesButton">
                        Ja, ich will
                    </button>
                </Link>
                <NoButton onClick={handleNoClick} />
            </div>
            <div className="gif-container">
                <AnimatedGif
                    src="https://media.tenor.com/LL_dy5f3jysAAAAM/give-food.gif"
                    alt="Animated GIF" />
            </div>
        </div>
    );
}
