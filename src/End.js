import React from 'react';
import AnimatedGif from "./AnimatedGif";

export default function EndPage() {
    return (
        <div className="container">
            <h1>Ich frue mich auf unser Valentines Date🥰</h1>
            <div className="gif-container">
                <AnimatedGif
                    src="https://i.pinimg.com/originals/60/53/ee/6053eea2252d679c884989db76ae8410.gif"
                    alt="Animated GIF" />
            </div>
        </div>
    );
}