import React from 'react';
import Sidebar from './Sidebar'; // Import the sidebar as used in your Dashboard
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './AttendancePage.css';

const AttendancePage = () => {
    // Sample subjects with attendance data
    const subjects = [
        { name: 'Math', totalClasses: 30, attended: 28 },
        { name: 'Science', totalClasses: 25, attended: 22 },
        { name: 'History', totalClasses: 28, attended: 26 },
        { name: 'Geography', totalClasses: 32, attended: 30 },
        { name: 'English', totalClasses: 20, attended: 18 }
    ];

    return (
        <div className="attendance-container">
            <Sidebar />
            <div className="attendance-content">
                <header className="attendance-header">
                    <h3>Attendance Overview</h3>
                </header>
                <div className="attendance-main">
                    <div className="attendance-circles">
                        {subjects.map((subject, index) => {
                            const percentage = (subject.attended / subject.totalClasses) * 100;

                            return (
                                <div key={index} className="attendance-item">
                                    <h4>{subject.name}</h4>
                                    <div className="attendance-circle">
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`${subject.attended}/${subject.totalClasses}`}
                                            styles={{
                                                path: {
                                                    stroke: percentage > 80 ? '#4caf50' : '#f44336', // Green or Red color
                                                    strokeLinecap: 'round',
                                                    transition: 'stroke-dashoffset 0.5s ease 0s', // Animation for smooth stroke
                                                },
                                                text: {
                                                    fill: '#333',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                },
                                            }}
                                            initialAnimation={true} // Enable initial animation
                                            strokeWidth={10} // Adjust stroke width for better visibility
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="attendance-details">
                        {subjects.map((subject, index) => (
                            <div key={index} className="subject-detail">
                                <h4>{subject.name}</h4>
                                <p>Present: {subject.attended} / {subject.totalClasses}</p>
                                <p>Absent: {subject.totalClasses - subject.attended}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendancePage;
