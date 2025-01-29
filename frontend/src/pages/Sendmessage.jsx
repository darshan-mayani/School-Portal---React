import React, { useState } from 'react';
import Sidebar from './Tsidebar'; // Import the Sidebar component
import './Sendmessage.css';

// Example list of students, replace this with actual data from your API or state
const students = ['Arshdeep', 'Ajay', 'Malhar', 'Darshan'];

const SendMessage = () => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('1'); // State to hold the grade
    const [message, setMessage] = useState('');
    const [sentMessages, setSentMessages] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleGradeChange = (event) => {
        setSelectedGrade(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedStudent || !message) {
            alert('Please select a student, grade, and enter a message.');
            return;
        }

        const newMessage = {
            student: selectedStudent,
            grade: selectedGrade, // Include grade in the message object
            message,
            id: Date.now(),
        };

        setSentMessages([...sentMessages, newMessage]);
        setSelectedStudent('');
        setSelectedGrade('1'); // Reset grade to '1'
        setMessage('');

        alert('Message sent successfully!');
    };

    return (
        <div className="send-message-page">
            <Sidebar /> {/* Include Sidebar */}
            <div className="content">
                <header className="message-header">
                    <h3>Send Message to Student</h3>
                </header>
                <div className="message-content">
                    <form onSubmit={handleSubmit} className="message-form">
                        <div className="form-group">
                            <label htmlFor="student">Select Student <span>*</span></label>
                            <select
                                id="student"
                                value={selectedStudent}
                                onChange={(e) => setSelectedStudent(e.target.value)}
                                required
                            >
                                <option value="">Select a student</option>
                                {students.map((student, index) => (
                                    <option key={index} value={student}>
                                        {student}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="grade">Select Grade <span>*</span></label>
                            <select
                                id="grade"
                                value={selectedGrade}
                                onChange={handleGradeChange}
                                required
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={handleMessageChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                <div className="sent-messages-list">
                    <h3>Sent Messages</h3>
                    <ul>
                        {sentMessages.map((msg) => (
                            <li key={msg.id}>
                                <div className="sent-message-item">
                                    <strong>{msg.student} (Grade: {msg.grade})</strong>
                                    <p>{msg.message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;
