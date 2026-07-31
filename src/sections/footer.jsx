import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
    const currentYear = new Date().getFullYear();
    const navLinks = [
        { label: 'Home', href: '#intro' },
        { label: 'Education', href: '#education' },
        { label: 'Tech Stack', href: '#stack' },
        { label: 'Projects', href: '#project' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com/rtch-cntlls', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/ritchie-cantillas-314543419', label: 'LinkedIn' },
        { icon: <FaEnvelope />, href: 'mailto:rtchcntlls@email.com', label: 'Email' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="position-relative text-white pt-5 pb-4 overflow-hidden" id="footer">
            <div 
                className="position-absolute top-0 start-50 translate-middle-x pointer-events-none" 
                style={{
                    width: '60%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(13, 110, 253, 0.5), transparent)',
                }}
            />
            <div 
                className="position-absolute bottom-0 start-50 translate-middle-x rounded-circle pointer-events-none opacity-20"
                style={{
                    width: '400px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    zIndex: 0
                }}
            />

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div 
                    className="p-4 p-md-5 rounded-4 border border-secondary border-opacity-25 shadow-lg"
                    style={{
                        backgroundColor: 'rgba(25, 28, 36, 0.6)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                    }}
                >
                    <div className="row g-4 align-items-center">
                        
                        <div className="col-lg-5 col-md-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
                                    <span 
                                        style={{
                                            background: 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            letterSpacing: '-0.5px'
                                        }}
                                    >
                                        rtch
                                    </span>
                                    <span 
                                        style={{
                                            background: 'linear-gradient(135deg, #dc3545 0%, #ff4d5e 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            letterSpacing: '-0.5px'
                                        }}
                                    >
                                        cntlls
                                    </span>
                                </h4>

                                <p className="text-white-50 mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '380px' }}>
                                    Full-stack developer passionate about building scalable, 
                                    user-centric web applications and exploring modern technologies.
                                </p>

                                <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill border border-success border-opacity-25 bg-success bg-opacity-10">
                                    <span 
                                        className="rounded-circle bg-success d-inline-block" 
                                        style={{ 
                                            width: '8px', 
                                            height: '8px', 
                                            boxShadow: '0 0 10px #198754' 
                                        }} 
                                    />
                                    <span className="text-success fw-medium" style={{ fontSize: '0.78rem' }}>
                                        Available for opportunities
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h6 className="text-white fw-semibold mb-3" style={{ letterSpacing: '0.5px' }}>
                                    Navigation
                                </h6>
                                <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                    {navLinks.map((link) => (
                                        <li key={link.label}>
                                            <motion.a 
                                                href={link.href} 
                                                className="text-white-50 text-decoration-none d-inline-block"
                                                whileHover={{ x: 5, color: '#ffffff' }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                {link.label}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 text-md-end">
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="d-flex flex-column align-items-start align-items-md-end"
                            >
                                <h6 className="text-white fw-semibold mb-3" style={{ letterSpacing: '0.5px' }}>
                                    Connect
                                </h6>
                                
                                <div className="d-flex gap-2 mb-4 flex-wrap">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="d-flex align-items-center justify-content-center text-white-50 rounded-3 border border-secondary border-opacity-25 text-decoration-none"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                                fontSize: '1.1rem'
                                            }}
                                            whileHover={{ 
                                                scale: 1.1, 
                                                backgroundColor: '#0d6efd', 
                                                color: '#ffffff',
                                                borderColor: '#0d6efd' 
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    <hr className="my-4 border-secondary border-opacity-25" />

                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-white-50" style={{ fontSize: '0.82rem' }}>
                        <div>
                            &copy; {currentYear} <span className="text-white fw-medium">rtchcntlls</span>. All rights reserved.
                        </div>
                        <div className="d-flex gap-3">
                            <span>Designed & Crafted with React & Bootstrap</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;