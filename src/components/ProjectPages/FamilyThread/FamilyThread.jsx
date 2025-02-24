import React from 'react';
import '../projectPagesStyles.css'

const FamilyThread = () => {
    return (
        <div className="project-detail">
            <h3>Project Goal:</h3>
            <p>
                Develop a fully functional web application with the capability to allow users to create, save
                and share their family trees as an introductory software engineering project.
            </p>

            <h3>Involvement:</h3>
            <p>
                <ul>
                    <li>Front-End Development</li>
                    <li>UX/UI Design</li>
                    <li>Communication with stakeholders and potential clients</li>
                    <li>Requirements development</li>
                    <li>UML diagram development and maintenance</li>
                </ul>
            </p>

            <h3>Source Code:</h3>
            <a href='https://github.com/FamilyThread/Family_Thread'>Github repository</a>
        </div>
    );
};

export default FamilyThread;