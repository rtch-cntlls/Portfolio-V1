import { useState } from 'react';
import { motion } from 'framer-motion';

function Nav() {
    const [activeLink, setActiveLink] = useState('Home');

    const navItems = [
        { name: 'Home', icon: 'bi-house-door-fill', href: '#intro' },
        { name: 'Education', icon: 'bi-mortarboard', href: '#education' },
        { name: 'Tech Stack', icon: 'bi-stack', href: '#stack' },
        { name: 'Projects', icon: 'bi-code-square', href: '#project' },
    ];

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="navbar navbar-expand-lg p-2 px-5 rounded-5 custom-nav-bg d-none d-lg-flex mt-4 position-relative"
        >
            <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="navbar-brand ms-3" 
                href="#"
            >
                <span className="dot-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </span>
                <span className="ms-2 fw-bold name">RtchCntlls<span className="text-danger">Dev</span></span>
            </motion.a>
            
            <ul className="navbar-nav ms-auto gap-1 align-items-center">
                {navItems.map((item) => {
                    const isActive = activeLink === item.name;
                    
                    return (
                        <li className="nav-item position-relative" key={item.name}>
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`nav-link px-3 py-2 rounded-5 position-relative z-1 d-flex align-items-center ${
                                    isActive ? 'text-dark fw-semibold' : 'text-white-50'
                                }`} 
                                href={item.href}
                                onClick={() => setActiveLink(item.name)}
                                style={{ transition: 'color 0.2s ease-in-out' }}
                            >
                                <i className={`bi ${item.icon} me-1`}></i> {item.name}

                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavPill"
                                        className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-5 z-n1 shadow-sm"
                                        initial={false}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                        style={{ zIndex: 0 }}
                                    />
                                )}
                            </motion.a>
                        </li>
                    );
                })}
            </ul>
        </motion.nav>
    );
}

export default Nav;