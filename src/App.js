import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationPage from './Location';
import FirstPage from "./FirstPage";
import ActivityPage from "./Activity";
import MessagePage from "./Message";
import NopePage from "./Nope";
import FinalNopePage from "./FinalNope";
import EndPage from "./End";

export default function MyApp() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/location" element={<LocationPage />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/message" element={<MessagePage />} />
                    <Route path="/nope" element={<NopePage />} />
                    <Route path="/finalnope" element={<FinalNopePage />} />
                    <Route path="/end" element={<EndPage />} />
                </Routes>
            </div>
        </Router>
    );
}
