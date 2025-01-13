import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationPage from './Location';
import FirstPage from "./FirstPage";  // Deine Location-Seite

export default function MyApp() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/location" element={<LocationPage />} />
                </Routes>
            </div>
        </Router>
    );
}
