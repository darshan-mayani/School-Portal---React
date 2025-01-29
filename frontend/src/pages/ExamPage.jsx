import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming you already have Sidebar as in the Dashboard
import './ExamPage.css';

const ExamPage = () => {
    // Sample upcoming exams data
    const upcomingExams = [
        { name: 'Mathematics Exam', subject: 'Mathematics', date: '2024-12-18', time: '10:00 AM' },
        { name: 'English Literature Exam', subject: 'English', date: '2024-12-20', time: '9:00 AM' },
        { name: 'Science Practical Exam', subject: 'Science', date: '2024-12-22', time: '1:00 PM' },
        { name: 'History Exam', subject: 'History', date: '2024-12-25', time: '11:00 AM' },
    ];

    return (
        <div className="exam-container">
            <Sidebar />
            <div className="exam-content">
                <header className="exam-header">
                    <h3>Upcoming Exams</h3>
                </header>
                <div className="exam-list">
                    {upcomingExams.length > 0 ? (
                        upcomingExams.map((exam, index) => (
                            <div className="exam-card" key={index}>
                                <h4>{exam.name}</h4>
                                <p><strong>Subject:</strong> {exam.subject}</p>
                                <p><strong>Date:</strong> {exam.date}</p>
                                <p><strong>Time:</strong> {exam.time}</p>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming exams at the moment</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExamPage;
