import 'react';
import './aboutMe.css';
import profile from '../../assets/selfGraphic.svg';
import Typewriter from 'typewriter-effect';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import email from '../../assets/gmail.svg';
import CV from '../../assets/CrislennyUcetaResume.pdf';

const AboutMe = () => {
    return (
        <section className="about-me" id='about'>
            <div className="content-wrapper">
                <div className="profile-container">
                    <div className="oval-background"></div>
                    <img src={profile} alt="Illustration of Crislenny Uceta" className="profile-image" />
                </div>
                <div className="text-container">
                    <h3>Hello there! It’s me, Crislenny!</h3>
                    <h2>
                        <Typewriter
                            options={{
                                strings: [
                                    "I'm a Front-end Developer",
                                    "I'm a Graphic Designer",
                                    "I'm a Back-end Developer",
                                    "I'm a Web Developer",
                                    "I'm a UX/UI Designer"
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                            }}
                        />
                    </h2>
                    <p>
                        I am passionate about designing in a timeless manner in a field
                        where I can merge technology and design. Therefore, I am an
                        aspiring web developer who strives to learn and get better every day.
                    </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn logo" className="social-icon"/>
                        </a>
                        <a href="mailto:cuceta@oswego.edu">
                            <img src={email} alt="Email logo" className="social-icon"/>
                        </a>
                        <a href="https://github.com/cuceta" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Email logo" className="social-icon"/>
                        </a>
                    </div>
                    <div>
                        <a href={CV} download>
                            <button className="resume-button">
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
