import React from 'react';
import './Experience.css';
import SUNYOswegoLogo from '../../assets/Experience/SUNYOswegoLogo.png'
import MakerStateLogo from '../../assets/Experience/MakerStateLogo.png'
import VerizonAccentureLogo from '../../assets/Experience/VerizonAccentureLogo.png'

const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <h1>Experience</h1>
            <div className="timeline">

                <div className="container left-container">
                    <img src={SUNYOswegoLogo} alt="SUNY Oswego Logo"/>
                    <div className="text-box">
                        <h2>
                            Peer Tutor
                        </h2>
                        <p>At SUNY Oswego</p>
                        <small>
                            January 2023 - Present
                        </small>
                        <p>
                            Actively working with fellow students to develop and deepen their knowledge/understanding of
                            topics in courses I have previously excelled. Leading to the constant use of critical
                            thinking and problem solving skills through one-on-one sessions with students.
                        </p>
                        <p> Courses tutored:
                            <ul>
                                <li>Principles of Programming</li>
                                <li>Foundations of Computer Science</li>
                                <li>Abstract Data Types and Programming Methodology</li>
                                <li>Calculus I</li>
                                <li>Calculus II</li>
                                <li>Elementary Spanish</li>
                                <li>Continuing Elementary Spanish</li>
                            </ul>
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <img src={SUNYOswegoLogo} alt="SUNY Oswego Logo"/>
                    <div className="text-box">
                        <h2>
                            Computer Lab Assistant
                        </h2>
                        <p>At SUNY Oswego</p>
                        <small>
                            January 2024 - Present
                        </small>
                        <p>Main responsibility is managing and overseeing the library's computer lab to ensure all
                            the equipment is working as it should. As well as, reporting hardware and software issues
                            to other departments to maintain smooth operations. Finally, the most common task is
                            answering students' questions regarding the use of certain software or hardware.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <img src={SUNYOswegoLogo} alt="SUNY Oswego Logo"/>
                    <div className="text-box">
                        <h2>
                            Computer Science Teacher Assistant
                        </h2>
                        <p>At SUNY Oswego</p>
                        <small>
                            September 2023 - May 2024
                        </small>
                        <p> Revising and grading students’ work for the introductive Computer Science course and holding
                            office hours provide explanation and guidance where needed.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <img src={MakerStateLogo} alt="MakerState Logo"/>
                    <div className="text-box">
                        <h2>
                            Intern Instructor
                        </h2>
                        <p>At MakerState STEM Summer Camp</p>
                        <small>
                            July 2022 - May 2024
                        </small>
                        <p> Guided students in Social Emotional Learning Development
                            (self-awareness, empathy, etc) and practice in Executive Functioning
                            (analyzing options, planning, etc.).
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <img src={VerizonAccentureLogo} alt="Accenture Logo"/>
                    <div className="text-box">
                        <h2>
                            Product Development Summer Intern
                        </h2>
                        <p>At Verizon and Accenture</p>
                        <small>
                            June 2021 - August 2021
                        </small>
                        <p> Five weeks internship for the summer, with the goal of provid-
                            ing interns with workspace experience.
                            <ul>
                                <li>
                                    Constant problem-solving development.
                                </li>
                            </ul>
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;