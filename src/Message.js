import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MessagePage() {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = () => {
        if (message.trim() === '') {
            console.log('Keine Nachricht eingegeben.');
        } else {
            // Nachricht an die Netlify Funktion senden
            fetch('/.netlify/functions/trackClick', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    element: `Nachricht: ${message}`,
                    timestamp: new Date().toISOString(),
                }),
            });
            console.log(`Nachricht: ${message}`);
            setMessage(''); // Textfeld zurücksetzen
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Noch ein Anliegen?</h1>
            <textarea
                placeholder="Schreibe eine Nachricht..."
                value={message}
                onChange={handleInputChange}
                rows="5"
                style={{
                    width: '80%',
                    padding: '10px',
                    fontSize: '16px',
                    margin: '10px 0',
                    borderRadius: '5px',
                    border: '1px solid gray',
                }}
            ></textarea>
            <br />
            <Link to="/Location">
                <button className="YesButton">
                    Back
                </button>
            </Link>
            <Link to="/End">
                <button className="YesButton"
                        onClick={handleSendClick}
                >
                    Absenden
                </button>
            </Link>
        </div>
    );
}
