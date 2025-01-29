import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is already set up in the app
import './EContentPage.css';

const EContentPage = () => {
    const videos = [
        {
            title: "Introduction to Algebra",
            url: "https://www.youtube.com/embed/WZdZhuUSmpM", 
        },
        {
            title: "Basic Geometry Concepts",
            url: "https://www.youtube.com/embed/J-kLTQPNnPc",
        },
        {
            title: "Newton's Laws of Motion",
            url: "https://www.youtube.com/embed/-w6oW1ut4Dw",
        },
        {
            title: "Chemical Reactions Explained",
            url: "https://www.youtube.com/embed/TX6BYceUSL0",
        },
    ];

    return (
        <div className="econtent-container">
            <Sidebar />
            <div className="econtent-content">
                <div className="econtent-card">
                    <h2 className="econtent-title">E-Content: Math & Science Learning</h2>
                    <div className="videos-container">
                        {videos.map((video, index) => (
                            <div className="video-card" key={index}>
                                <h3>{video.title}</h3>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={video.url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.title}
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EContentPage;
