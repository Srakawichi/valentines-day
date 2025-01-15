import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';
import { Link } from "react-router-dom";

export default function LocationPage() {
    const [selectedTime, setSelectedTime] = useState(dayjs('2025-04-17T15:30'));

    const handleNextClick = async () => {
        const formattedTime = selectedTime.format('HH:mm');

        // Nachricht an die Serverless-Funktion senden
        const response = await fetch('/.netlify/functions/trackClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                element: `Uhrzeit: ${formattedTime}`,
                timestamp: new Date().toISOString(),
                time: formattedTime,
            }),
        });

        if (response.ok) {
            console.log(`Uhrzeit: ${formattedTime}`); // Zeit ausgeben
        } else {
            console.error(`Fehler beim Senden der Uhrzeit: ${response.statusText}`);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <h1>Wann möchtest du dich am 14.02. treffen?</h1>
                <MobileTimePicker
                    value={selectedTime}
                    onChange={(newTime) => setSelectedTime(newTime)}
                />
            </div>
            <div className="buttons-container">
                <Link to="/Activity">
                    <button className="YesButton">
                        Back
                    </button>
                </Link>
                <Link to="/Message">
                    <button className="YesButton" onClick={handleNextClick}>
                        Next
                    </button>
                </Link>
            </div>
        </LocalizationProvider>
    );
}
