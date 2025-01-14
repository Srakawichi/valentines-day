import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedGif from "./AnimatedGif";

export default function FirstPage() {

    const handleButtonClick = (button) => {
        fetch('/.netlify/functions/trackClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                element: button,
                timestamp: new Date().toISOString(),
            }),
        });
    };

    return (
        <div className="container">
            <h1>Möchtest du mein Valentins-Date sein?</h1>
            <div className="buttons-container">
                <Link to="/Activity">
                    <button
                        className="YesButton"
                        onClick={() => handleButtonClick('Ja, ich will')}
                    >
                        Ja, ich will
                    </button>
                </Link>
                <Link to="/Nope">
                    <button
                        className="NoButton"
                        onClick={() => handleButtonClick('Ne, hihi')}
                    >
                        Ne, hihi
                    </button>
                </Link>
            </div>
            <div className="gif-container">
                <AnimatedGif
                    src="https://media.tenor.com/LL_dy5f3jysAAAAM/give-food.gif"
                    alt="Animated GIF" />
            </div>
        </div>
    );
}
