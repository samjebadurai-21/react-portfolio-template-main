import React from "react";
import '@fortawesome/free-regular-svg-icons'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "UI Design",
    "UX Research",
    "Figma",
    "Adobe XD",
    "Wireframing",
    "Prototyping",
    "Interaction Design",
    "Visual Design",
    "Design Systems",
    "CSS",
    "HTML5"
];

const labelsSecond = [
    "User Testing",
    "Usability Analysis",
    "Information Architecture",
    "User Research",
    "User Personas",
    "Journey Mapping",
    "Responsive Design",
    "Accessibility (A11y)",
    "Design Thinking"
];

const labelsThird = [
    "Digital Design",
    "Web Design",
    "Mobile Design",
    "Brand Identity",
    "Design Collaboration",
    "Creative Problem Solving",
    "Design Principles",
    "User-Centered Design"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPalette} size="3x"/>    */}
                    <h3>UI/UX Design</h3>
                    <p>Specialized in creating intuitive and visually appealing user interfaces combined with research-driven UX strategies. I focus on designing digital products that are both beautiful and functional, ensuring exceptional user experiences across all platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    {/* <FontAwesomeIcon icon={['fab', 'figma'] as IconProp} size="3x"/> */}
                    <h3>User Research & Testing</h3>
                    <p>Expert in conducting comprehensive user research, usability testing, and data-driven design decisions. I leverage user insights to inform design strategies, validate concepts, and create solutions that truly resonate with target audiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Expertise:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPencilRuler} size="3x"/> */}
                    <h3>Design Strategy</h3>
                    <p>Experienced in developing comprehensive design solutions that align with business goals and user needs. From brand identity to complete design systems, I create scalable and cohesive design solutions that drive engagement and success.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Focus Areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;