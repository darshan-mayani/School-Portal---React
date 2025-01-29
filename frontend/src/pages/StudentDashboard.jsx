import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import myPhoto from '../assets/Dm.jpg';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
    const navigate = useNavigate();

    // Mock student data
    const student = {
        name: '',
        class: '12th Grade',
        rollNo: 'A12345',
        photoUrl: myPhoto,   
     };

    // Sample statistics data
    const statistics = [
        { title: 'Current Standard', value: 10 },
        { title: 'Total Subjects', value: 8 },
        { title: 'Subjects Passed', value: 7 },
        { title: 'Subjects Failed', value: 1 },
    ];

    // Sample data for the performance chart
    const chartData = {
        labels: ['Math', 'Science', 'History', 'Geography', 'English'],
        datasets: [
            {
                label: 'Marks Obtained',
                data: [85, 90, 75, 80, 88],
                backgroundColor: '#4c9ef7',
                borderColor: '#4c9ef7',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <header className="dashboard-header">
                    <div className="header-left">
                        <h3>Welcome !! {student.name}</h3>
                    </div>
                    <div className="header-right">
                        <img className="profile-photo" src={student.photoUrl} alt="Profile" />
                    </div>
                </header>

                <div className="dashboard-main">
                    {/* Statistics Section */}
                    <div className="stat-section">
                        {statistics.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h4>{stat.title}</h4>
                                <p>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Performance Chart */}
                    <div className="dashboard-chart">
                        <h4>Performance Overview</h4>
                        <Bar data={chartData} options={{ responsive: true }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
