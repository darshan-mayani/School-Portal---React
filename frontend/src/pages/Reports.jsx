import React, { useState, useEffect } from 'react';

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // TODO: Fetch reports from the backend
        setReports([
            { id: 1, title: 'Monthly Progress Report', date: '2023-05-01' },
            { id: 2, title: 'Semester Performance Summary', date: '2023-06-15' },
        ]);
    }, []);

    return (
        <div className="reports-container">
            <h2>Reports</h2>
            <ul className="report-list">
                {reports.map((report) => (
                    <li key={report.id} className="report-item">
                        <h3>{report.title}</h3>
                        <p>Date: {report.date}</p>
                        <button>View Report</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;

