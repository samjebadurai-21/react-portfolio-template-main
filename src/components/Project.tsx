import React from "react";
import mock01 from '../assets/images/DotNetReact.webp';
import mock02 from '../assets/images/Best-eCommerce-Platforms.jpg';
import mock03 from '../assets/images/6554783.jpg';
import mock04 from '../assets/images/7090333.jpg';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%" height="62%"/>
                <h2>Web Application with .NET & React</h2>
                <p>Full-stack web application developed using .NET Framework for backend API and React for responsive frontend. Features include user authentication, data management, and responsive design.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Responsive E-commerce Platform</h2>
                <p>Built a comprehensive e-commerce solution using modern web technologies. Implemented shopping cart functionality, payment integration, and admin dashboard with React and TypeScript.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Database Management System</h2>
                <p>Designed and implemented a robust database management system using SQL and MongoDB. Created efficient data models and optimized queries for improved performance.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%" height="56%"/>
                <h2>REST API Development</h2>
                <p>Developed RESTful APIs using .NET Framework with comprehensive documentation. Implemented authentication, error handling, and data validation for seamless client integration.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Quality Assurance Tools</h2>
                <p>Created automated testing tools and quality assurance workflows to ensure code quality and maintain high standards in software development projects.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Frontend Development Portfolio</h2>
                <p>Collection of responsive web interfaces built with HTML5, CSS3, JavaScript, and modern frameworks. Focused on user experience and cross-browser compatibility.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;