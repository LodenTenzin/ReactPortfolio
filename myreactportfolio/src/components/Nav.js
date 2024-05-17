import { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

    //adding States
    const [isActive, setIsActive] = useState(false);
    
    //const toggleActiveClass = ()


    return(
         <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
         </nav>
    )

};

export default Nav;