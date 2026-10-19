import { useState } from 'react';

function Nav() {
    const [activeLink, setActiveLink] = useState('Home');

    const navItems = [
        { name: 'Home', icon: 'bi-house-door-fill', href: '#intro' },
        { name: 'Education', icon: 'bi-mortarboard', href: '#education' },
        { name: 'Tech Stack', icon: 'bi-stack', href: '#stack' },
        { name: 'Projects', icon: 'bi-code-square', href: '#project' },
        { name: 'About', icon: 'bi-person-fill', href: '#about' },
    ];

    return (
        <nav className="navbar navbar-expand-lg p-2 px-5 rounded-5 custom-nav-bg">
           <a className="navbar-brand ms-3" href="#">
                <span className="dot-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </span>
                <span className="ms-2 fw-bold name">Dev.<span className="text-danger">404</span></span>
            </a>
            
            <ul className="navbar-nav ms-auto">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.name}>
                        <a 
                            className={`nav-link ${activeLink === item.name ? 'text-dark active-link bg-white rounded-5 px-3' : 'text-white-50'}`} 
                            href={item.href}
                            onClick={() => setActiveLink(item.name)}
                        >
                            <i className={`bi ${item.icon} me-1`}></i> {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;