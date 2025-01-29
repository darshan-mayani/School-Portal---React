import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './AssignmentUpload.css';

const AssignmentUploadPage = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file || !title) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Assignment Uploaded:', { title, description, file });
        alert('Assignment uploaded successfully!');

        setFile(null);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="assignment-upload-page">
            <Sidebar /> {/* Include Sidebar */}
            <div className="content">
                <header className="upload-header">
                    <h3>Upload Assignment</h3>
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
                            <label htmlFor="file">Upload File <span>*</span></label>
                            <input
                                type="file"
                                id="file"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentUploadPage;
