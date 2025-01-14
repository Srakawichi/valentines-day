import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedGif from "./AnimatedGif";


export default function FirstPage() {
    return (
        <div className="container">
            <h1>Möchtest du mein Valentins-Date sein?</h1>
            <div className="buttons-container">
                <Link to="/Activity">
                    <button className="YesButton">
                        Ja, ich will
                    </button>
                </Link>
                <Link to="/Nope">
                    <button className="NoButton" >
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
