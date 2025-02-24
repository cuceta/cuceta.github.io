import 'react';
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <ul className='nav'>
                <li><a href="#about" class="active">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    );
};

export default Navbar;