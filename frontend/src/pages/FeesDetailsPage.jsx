import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is already set up in the app
import './FeesDetailsPage.css';

const FeesDetailsPage = () => {
    const feeDetails = [
        { name: 'Tuition Fee', amount: '5000', status: 'Paid' },
        { name: 'Library Fee', amount: '500', status: 'Pending' },
        { name: 'Transport Fee', amount: '1000', status: 'Paid' },
        { name: 'Activity Fee', amount: '300', status: 'Paid' },
        { name: 'Exam Fee', amount: '700', status: 'Pending' },
    ];

    return (
        <div className="fees-details-container">
            <Sidebar />
            <div className="fees-details-content">
                <div className="fees-details-card">
                    <h2 className="fees-details-title">Fee Details</h2>
                    <table className="fees-details-table">
                        <thead>
                            <tr>
                                <th>Fee Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeDetails.map((fee, index) => (
                                <tr key={index}>
                                    <td>{fee.name}</td>
                                    <td>{fee.amount}</td>
                                    <td className={fee.status.toLowerCase()}>{fee.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeesDetailsPage;
