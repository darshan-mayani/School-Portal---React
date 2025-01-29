import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is present as in Dashboard
import './ResultPage.css';

const ResultPage = () => {
    // Sample data for the student's results
    const studentData = {
        name: "Darshan",
        rollNumber: "12345",
        class: "10th Grade",
        results: [
            { subject: "Mathematics", marks: 90, total: 100, grade: "A", comments: "Excellent performance" },
            { subject: "Science", marks: 85, total: 100, grade: "B", comments: "Good effort, needs improvement in practicals" },
            { subject: "English", marks: 88, total: 100, grade: "A", comments: "Well done" },
            { subject: "History", marks: 80, total: 100, grade: "B", comments: "Good understanding of the subject" },
            { subject: "Geography", marks: 75, total: 100, grade: "C", comments: "Average, needs more focus" },
        ]
    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="result-container">
            <Sidebar />
            <div className="result-content">
                <header className="result-header">
                    <h3>Student Results</h3>
                </header>
                <div className="student-info">
                    <h4>{studentData.name}</h4>
                    <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>
                    <p><strong>Class:</strong> {studentData.class}</p>
                </div>
                <div className="results-list">
                    {studentData.results.map((result, index) => (
                        <div className="result-card" key={index}>
                            <div className="result-header-card" onClick={() => toggleExpand(index)}>
                                <h5>{result.subject}</h5>
                                <span>{expandedIndex === index ? "▼" : "▲"}</span>
                            </div>
                            {expandedIndex === index && (
                                <div className="result-details">
                                    <p><strong>Marks:</strong> {result.marks}/{result.total}</p>
                                    <p><strong>Grade:</strong> {result.grade}</p>
                                    <p><strong>Comments:</strong> {result.comments}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
