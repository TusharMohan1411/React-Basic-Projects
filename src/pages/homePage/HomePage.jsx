import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css'; // Import CSS file for styling

export default function HomePage() {
    // Example projects data (you can replace with your actual projects data)
    const projects = [
        { id: 1, name: 'Counter App', description: 'A simple counter application', link: '/counter' },
        { id: 2, name: 'Todo List App', description: 'Manage your tasks efficiently', link: '/todo' },
        { id: 3, name: 'Basic Page', description: 'Basic Page to Practice React', link: '/basic-page' },
        // Add more projects as needed
    ];

    return (
        <section className="home-page">
            <div className="landing">
                <h1>Welcome to Tushar's Projects</h1>
                <p>Explore my collection of React projects</p>
            </div>
            <div className="project-cards">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={project.link}>View Project</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
