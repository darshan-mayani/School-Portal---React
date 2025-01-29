import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaUser, FaMoneyBill, FaCalendarAlt, FaClipboard, FaBook, FaEdit, FaBus, FaChartBar, FaHome, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { title: 'Home', route: '/dashboard', icon: <FaHome /> },
        { title: 'Attendance', route: '/attendance', icon: <FaClipboard /> },
        { title: 'Results', route: '/results', icon: <FaChartBar /> },
        { title: 'Exam', route: '/exam', icon: <FaEdit /> },
        { title: 'Events/Calendar', route: '/events', icon: <FaCalendarAlt /> },
        { title: 'Bus Pass', route: '/bus-pass', icon: <FaBus /> },
        { title: 'Fees Details', route: '/fees', icon: <FaMoneyBill /> },
        { title: 'Assignment', route: '/assignment', icon: <FaClipboardList /> },
        { title: 'E-Content', route: '/econtent', icon: <FaBook /> },
        { title: 'Logout', route: '/', icon: <FaUser /> },
        
        
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <h2>{isOpen ? 'Student Dashboard' : 'SD'}</h2>
                <button className="toggle-button" onClick={toggleSidebar}>
                    {isOpen ? '❮' : '❯'}
                </button>
            </div>
            <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.route}>
                            <span className="icon">{item.icon}</span>
                            {isOpen && <span className="menu-text">{item.title}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
