import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the sidebar used in the dashboard
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './EventsPage.css';

const EventsPage = () => {
    const [date, setDate] = useState(new Date());

    // Sample data for events on specific days
    const events = {
        '2024-12-15': ['Annual Sports Day', 'Teacher’s Day Celebration'],
        '2024-12-20': ['School Annual Function'],
        '2024-12-25': ['Christmas Celebration'],
    };

    // Function to check if there are any events for the selected date
    const getEventsForDate = (date) => {
        const dateString = date.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'
        return events[dateString] || [];
    };

    return (
        <div className="events-container">
            <Sidebar />
            <div className="events-content">
                <header className="events-header">
                    <h3>School Events</h3>
                </header>
                <div className="events-main">
                    {/* Calendar Section */}
                    <div className="calendar-section">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            tileClassName={({ date }) => {
                                // Add a custom class for days that have events
                                const dateString = date.toISOString().split('T')[0];
                                return events[dateString] ? 'event-day' : '';
                            }}
                        />
                    </div>

                    {/* Events List Section */}
                    <div className="events-list">
                        <h4>Events on {date.toDateString()}:</h4>
                        <ul>
                            {getEventsForDate(date).length > 0 ? (
                                getEventsForDate(date).map((event, index) => (
                                    <li key={index}>{event}</li>
                                ))
                            ) : (
                                <li>No events for this day</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
