import React, { useState } from 'react';
import Sidebar from './Tsidebar'; // Import the Sidebar component
import './Uploadecontent.css';

// Example list of grades, replace with actual data from your API or state
const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'];

const UploadEContent = () => {
    const [eContentLink, setEContentLink] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState('');
    const [contentType, setContentType] = useState('link'); // Default to 'link'

    const handleLinkChange = (event) => {
        setEContentLink(event.target.value);
    };

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleGradeChange = (event) => {
        setSelectedGrade(event.target.value);
    };

    const handleContentTypeChange = (event) => {
        setContentType(event.target.value);
        setEContentLink(''); // Reset link field if switching to file upload
        setVideoFile(null); // Reset file field if switching to link upload
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedGrade) {
            alert('Please select a grade.');
            return;
        }

        if (contentType === 'link' && !eContentLink) {
            alert('Please provide a valid link.');
            return;
        }

        if (contentType === 'file' && !videoFile) {
            alert('Please upload a video.');
            return;
        }

        const uploadedContent = {
            grade: selectedGrade,
            content: contentType === 'link' ? eContentLink : videoFile.name,
            contentType,
        };

        console.log('E-Content Uploaded:', uploadedContent);
        alert('E-Content uploaded successfully!');

        // Reset form after submission
        setEContentLink('');
        setVideoFile(null);
        setSelectedGrade('');
    };

    return (
        <div className="upload-econtent-page">
            <Sidebar /> {/* Include Sidebar */}
            <div className="content">
                <header className="econtent-header">
                    <h3>Upload E-Content</h3>
                </header>
                <div className="econtent-content">
                    <form onSubmit={handleSubmit} className="econtent-form">
                        <div className="form-group">
                            <label htmlFor="grade">Select Grade <span>*</span></label>
                            <select
                                id="grade"
                                value={selectedGrade}
                                onChange={handleGradeChange}
                                required
                            >
                                <option value="">Select Grade</option>
                                {grades.map((grade, index) => (
                                    <option key={index} value={grade}>
                                        {grade}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contentType">Content Type</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="contentType"
                                        value="link"
                                        checked={contentType === 'link'}
                                        onChange={handleContentTypeChange}
                                    />
                                    Link
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="contentType"
                                        value="file"
                                        checked={contentType === 'file'}
                                        onChange={handleContentTypeChange}
                                    />
                                    Video File
                                </label>
                            </div>
                        </div>

                        {contentType === 'link' ? (
                            <div className="form-group">
                                <label htmlFor="eContentLink">Paste Video Link <span>*</span></label>
                                <input
                                    type="url"
                                    id="eContentLink"
                                    value={eContentLink}
                                    onChange={handleLinkChange}
                                    placeholder="https://your-video-link.com"
                                    required
                                />
                            </div>
                        ) : (
                            <div className="form-group">
                                <label htmlFor="videoFile">Upload Video File <span>*</span></label>
                                <input
                                    type="file"
                                    id="videoFile"
                                    accept="video/*"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" className="submit-button">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadEContent;
