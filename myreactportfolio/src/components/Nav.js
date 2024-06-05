import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const Nav = () => {

    const tabs = [
        { id: 1, page: "Home", path: "/", xposition: 69},
        { id: 2, page: "Work", path: "/portfolio", xposition: 145},
        { id: 3, page: "About", path: "/resume", xposition: 245},
        ];

    //adding States
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const[x, setX] = useState(69);
    const y = 0;
    //const toggleActiveClass = ()
  

    return(
        <div>
         <nav>
            <ul>
                {tabs.map((val) => (
                <li onClick={() => setX(val.xposition)}>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to= {val.path} >{val.page} </NavLink>
                </li>
                ))}
            </ul>
            <div className='motionwrapper'>
                <motion.div
                    className="dot"
                    animate={{ x, y}}
                    transition={{ type: "spring" }}
                />
            </div>
         </nav>
         </div>
    )

};

export default Nav;