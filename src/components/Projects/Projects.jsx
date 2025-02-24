import React, { useState } from 'react';
import './Projects.css';
import familyThreadThumbnail from '../../assets/projects/familyThread/thumbnail.png';
import checkMateThumbnail from '../../assets/projects/checkMate/thumbnail.png'
import heatPropagationSimulatorThumbnail from '../../assets/projects/HeatPropagationSimulator/Thumbnail.png'
import facilityLayoutThumbnail from '../../assets/projects/FacilityLayout/FacilityLayoutThumbnail.png'
import performanceMeasurementsThumbnail from '../../assets/projects/PerformanceMeasurements/PerformanceMeasurements.png'
import placeholderThumbnail from '../../assets/projects/placeholderthumbnail.jpg';
import closeSymbol from '../../assets/closeSymbol.svg'
import FamilyThread from '../ProjectPages/FamilyThread/FamilyThread.jsx'
import CheckMate from '../ProjectPages/CheckMate/CheckMateDetails.jsx'
import FacilityLayout from '../ProjectPages/FacilityLayout/FacilityLayout.jsx'
import HeatPropagation from '../ProjectPages/HeatPropagation/HeatPropagation.jsx'
import PerformanceMeasurements from '../ProjectPages/PerformanceMeasurements/PerformanceMeasurements.jsx'

const projects = [
    {
        id: 1,
        title: 'Family Thread Web Application',
        description: 'A minimum viable product for a family tree application.',
        details: <FamilyThread/>,
        thumbnail: familyThreadThumbnail,
    },
    {
        id: 2,
        title: 'CheckMate To-Do List Web Application',
        description: 'Web based to-do list application.',
        details: <CheckMate/>,
        thumbnail: checkMateThumbnail,
    },
    {
        id: 3,
        title: 'Heat Propagation Simulator',
        description: 'A mock e-commerce platform for online shopping.',
        details: <HeatPropagation/>,
        thumbnail: heatPropagationSimulatorThumbnail,
    },
    {
        id: 4,
        title: 'Optimal Facility Layout Generator',
        description: 'A mock e-commerce platform for online shopping.',
        details: <FacilityLayout/>,
        thumbnail: facilityLayoutThumbnail,
    },
    {
        id: 5,
        title: 'Performance Measurement Benchmark',
        description: 'A mock e-commerce platform for online shopping.',
        details: <PerformanceMeasurements/>,
        thumbnail: performanceMeasurementsThumbnail,
    },
    // {
    //     id: 6,
    //     title: 'Yelp Recommendation',
    //     description: 'A mock e-commerce platform for online shopping.',
    //     details: <YelpRecommendation/>,
    //     thumbnail: placeholderThumbnail,
    // },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const toggleDetails = (id) => {
        if (activeProject === id) {
            setIsClosing(true); // Start closing animation
            setTimeout(() => {
                setIsClosing(false); // Reset closing state
                setActiveProject(null); // Fully close after animation
            }, 2500); // Match CSS transition duration
        } else {
            setActiveProject(id);
        }
    };

    return (
        <section className="projects" id='projects'>
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.thumbnail} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <button onClick={() => toggleDetails(project.id)}>
                            {activeProject === project.id ? 'Close Details' : 'View Project'}
                        </button>
                    </div>
                ))}
            </div>
            <div className={`project-details-section ${activeProject && !isClosing ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
                {activeProject && (
                    <div className="project-details-content">
                        <div className='wrapper'>
                            <div className='project-details-content'>
                                <h2 style={{paddingLeft: '200px'}}>{projects.find((project) => project.id === activeProject).title}</h2>
                            </div>
                            <div className="project-details-content-button" style={{justifySelf: 'end'}}>
                                <button className="close-button" onClick={() => toggleDetails(activeProject)}>
                                    <img src={closeSymbol} alt='close button' style={{height: '15px', width: 'auto'}}/>
                                </button>
                            </div>
                        </div>
                        <p>{projects.find((project) => project.id === activeProject).details}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;