import Image from '../assets/images/profile1.webp';
import Buttons from '../components/common/buttons';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaMagic } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Intro() {
    const socialLinks = [
        { label: "Email", subLabel: "rtchcntlls@email.com", href: "mailto:rtchcntlls@email.com", icon: FaEnvelope },
        { label: "LinkedIn", subLabel: "in/ritchie-cantillas", href: "https://linkedin.com/in/ritchie-cantillas-314543419", icon: FaLinkedin },
        { label: "Github", subLabel: "rtch-cntlls", href: "https://github.com/rtch-cntlls", icon: FaGithub }
    ];

    const textVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const squareVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 220, delay: 0.4 } }
    };

    return (
        <section className="sans-serif text-white-50 d-flex align-items-center justify-content-between gap-5 py-4 position-relative" id='intro'>
            
            <motion.div 
                className="img-frame-wrapper position-relative d-none d-lg-block"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
            >
                <div className="ambient-glow"></div>

                <div className="img-frame-container glass-card p-3 rounded-4">
                    {[...Array(8)].map((_, i) => (
                        <motion.div 
                            key={i} 
                            variants={squareVariants} 
                            initial="hidden"
                            animate="visible"
                            className={`decorator-square ${['sq-tl', 'sq-tr', 'sq-bl', 'sq-br', 'sq-tc', 'sq-bc', 'sq-ml', 'sq-mr'][i]}`}
                        ></motion.div>
                    ))}

                    <motion.img 
                        src={Image} 
                        alt="Rtch PFP" 
                        className="framed-image rounded-3 img-fluid"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.2 }}
                        style={{ objectFit: 'cover', minHeight: '420px' }}
                    />

                    <div className="floating-badge badge-top-right shadow-lg">
                        <FaCode className="text-info me-2" />
                        <span>Full-Stack</span>
                    </div>

                    <div className="floating-badge badge-bottom-left shadow-lg">
                        <FaMagic className="text-warning me-2" />
                        <span>UI / UX Focus</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className='w-100 w-lg-60 d-flex flex-column gap-3'
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
                <motion.div variants={textVariants}>
                    <span className="status-badge d-inline-flex align-items-center gap-2 px-3 py-1-5 rounded-pill">
                        <span className="pulse-indicator"></span>
                        <span className="small text-uppercase fw-bold text-white-80">Available for Work</span>
                    </span>
                </motion.div>

                <motion.h1 variants={textVariants} className="intro display-3 fw-bold text-white m-0">
                    <TypeAnimation 
                        sequence={['Hello!', 2000, 'I\'m RTCH.', 2000]} 
                        wrapper="span" 
                        cursor={true} 
                        repeat={Infinity} 
                        className="gradient-text"
                    />
                </motion.h1>

                <motion.div 
                    variants={textVariants} 
                    className="p-3 p-md-4 rounded-4 border-glass glass-card pe-lg-4"
                    style={{ maxWidth: '720px' }}
                >
                    <p className="text-white-50 leading-relaxed m-0" style={{ fontSize: '1.05rem' }}>
                        I am ritchie, a 23 years old Information Technology graduate specializing in full-stack web development with a strong focus on frontend design.
                        Experienced in building fast, responsive websites, and connecting them to reliable backend systems.
                        Skilled at turning designs into clean, accessible code that works seamlessly for users. A dedicated developer who
                        bridges the gap between beautiful visual design and solid technical performance to build great web applications.
                    </p>
                </motion.div>

                <motion.div variants={textVariants} className="d-flex flex-wrap gap-2 gap-md-3 pt-2">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: index * 0.4
                            }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Buttons label={link.label} subLabel={link.subLabel} href={link.href} icon={link.icon} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}

export default Intro;