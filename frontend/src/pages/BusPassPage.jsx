import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is already set up in the app
import './BusPassPage.css';

const BusPassPage = () => {
    const busPassData = {
        name: "Darshan",
        rollNumber: "12345",
        class: "10th Grade",
        address: "Shashtri Nagar",
        busNumber: "42",
        route: "Nana Mova",
        issueDate: "06-06-2024",
        expiryDate: "06-06-2025",
    };

    return (
        <div className="bus-pass-container">
            <Sidebar />
            <div className="bus-pass-content">
                <div className="bus-pass-card">
                    <h2 className="bus-pass-title">Bus Pass</h2>
                    <div className="bus-pass-details">
                        <p><strong>Name:</strong> {busPassData.name}</p>
                        <p><strong>Roll Number:</strong> {busPassData.rollNumber}</p>
                        <p><strong>Class:</strong> {busPassData.class}</p>
                        <p><strong>Address:</strong> {busPassData.address}</p>
                        <p><strong>Bus Number:</strong> {busPassData.busNumber}</p>
                        <p><strong>Route:</strong> {busPassData.route}</p>
                        <p><strong>Issue Date:</strong> {busPassData.issueDate}</p>
                        <p><strong>Expiry Date:</strong> {busPassData.expiryDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusPassPage;
