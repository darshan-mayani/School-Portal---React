import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaUser, FaMoneyBill, FaCalendarAlt, FaClipboard, FaBook, FaEdit, FaBus, FaChartBar, FaHome } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { title: 'Home', route: '/teacher-dashboard', icon: <FaHome /> },
        { title: 'Assignment', route: '/tassignment', icon: <FaClipboard /> },
        { title: 'Message', route: '/sendmessage', icon: <FaChartBar /> },
        { title: 'E-Content', route: '/tecontent', icon: <FaBook /> },
        { title: 'Logout', route: '/', icon: <FaUser /> },
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <h2>{isOpen ? 'Teacher Dashboard' : 'SD'}</h2>
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
