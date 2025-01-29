import React, { useState } from 'react';
import Sidebar from './Tsidebar'; // Import the Sidebar component
import './TAssignment.css';

const TAssignment = () => {
    // State for storing assignments, form fields, and edit mode
    const [assignments, setAssignments] = useState([]);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [grade, setGrade] = useState('1'); // Added grade state (default is '1')
    const [editIndex, setEditIndex] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file || !title) {
            alert('Please fill in all required fields.');
            return;
        }

        const newAssignment = { title, description, grade, file, id: Date.now() }; // Include grade in the assignment

        if (editIndex !== null) {
            const updatedAssignments = [...assignments];
            updatedAssignments[editIndex] = newAssignment;
            setAssignments(updatedAssignments);
            setEditIndex(null); // Reset edit mode
        } else {
            setAssignments([...assignments, newAssignment]);
        }

        // Reset form
        setFile(null);
        setTitle('');
        setDescription('');
        setGrade('1'); // Reset grade
    };

    const handleEdit = (index) => {
        const assignmentToEdit = assignments[index];
        setTitle(assignmentToEdit.title);
        setDescription(assignmentToEdit.description);
        setFile(assignmentToEdit.file);
        setGrade(assignmentToEdit.grade); // Set the grade for editing
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedAssignments = assignments.filter((_, i) => i !== index);
        setAssignments(updatedAssignments);
    };

    return (
        <div className="assignment-page">
            <Sidebar /> {/* Include Sidebar */}
            <div className="content">
                <header className="upload-header">
                    <h3>{editIndex === null ? 'Create Assignment' : 'Edit Assignment'}</h3>
                </header>
                <div className="upload-content">
                    <form onSubmit={handleSubmit} className="upload-form">
                        <div className="form-group">
                            <label htmlFor="title">Assignment Title <span>*</span></label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="grade">Grade <span>*</span></label>
                            <select
                                id="grade"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                required
                            >
                                {/* Dropdown for grades */}
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
                            <label htmlFor="file">Upload File <span>*</span></label>
                            <input
                                type="file"
                                id="file"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">{editIndex === null ? 'Upload' : 'Update'}</button>
                    </form>
                </div>

                <div className="assignments-list">
                    <h3>Assignments</h3>
                    <ul>
                        {assignments.map((assignment, index) => (
                            <li key={assignment.id}>
                                <div className="assignment-item">
                                    <div>
                                        <strong>{assignment.title}</strong>
                                        <p>{assignment.description}</p>
                                        <p><em>Grade: {assignment.grade}</em></p> {/* Display grade */}
                                        <p><em>File: {assignment.file.name}</em></p>
                                    </div>
                                    <div className="actions">
                                        <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                                        <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TAssignment;
