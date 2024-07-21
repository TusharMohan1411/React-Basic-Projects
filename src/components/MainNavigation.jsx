import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainNavigation.css'; // Import CSS file for styling

export default function MainNavigation() {
    return (
        <nav className="main-navigation">
            <div className="logo">
                <h1>Tushar's Projects</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active' : undefined}
                    >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter" className={({ isActive }) => isActive ? 'active' : undefined}> Counter</NavLink>
                </li>
                <li>
                    <NavLink to='/todo' className={({ isActive }) => isActive ? 'active' : undefined} >Todo List</NavLink>
                </li>
                <li>
                    <NavLink to='/basic-page' className={({ isActive }) => isActive ? 'active' : undefined} >Basic Page</NavLink>
                </li>
                <li>
                    <NavLink to='/stopwatch' className={({ isActive }) => isActive ? 'active' : undefined} >Stopwatch</NavLink>
                </li>
                <li>
                    <NavLink to='/random-color-generator' className={({ isActive }) => isActive ? 'active' : undefined} >Random Color Generator</NavLink>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    )
}
