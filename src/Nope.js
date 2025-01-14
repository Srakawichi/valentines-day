import React from 'react';
import AnimatedGif from "./AnimatedGif";
import { Link } from 'react-router-dom';

export default function NopePage() {

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
            <div className="buttons-container">
                <h1>Wirklich nicht?...</h1>
                <Link to="/Activity">
                    <button
                        className="YesButton"
                        onClick={() => handleButtonClick('Doch natürlich')}
                    >
                        Doch natürlich
                    </button>
                </Link>
                <Link to="/FinalNope">
                    <button
                        className="NoButton"
                        onClick={() => handleButtonClick('Nein Nein')}
                    >
                        Nein Nein
                    </button>
                </Link>
            </div>
            <div className="gif-container">
                <AnimatedGif
                    src="https://media1.giphy.com/media/B5k8qOiXmmXe8Ndiwg/giphy.gif?cid=6c09b9525k9w1i59ajjq6j7qr44xiz4t8oj3dkbo3hwtm0l7&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                    alt="Animated GIF"/>
            </div>
        </div>
    );
}
