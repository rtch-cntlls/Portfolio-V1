import Image from '../assets/images/profile.png';
import Buttons from '../components/common/buttons';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Intro() {
    const socialLinks = [
        { label: "Email", subLabel: "rdev404@email.com", href: "mailto:rtchcntlls@email.com", icon: FaEnvelope },
        { label: "LinkedIn", subLabel: "in/rdev404", href: "https://linkedin.com/in/ritchie-cantillas-314543419", icon: FaLinkedin },
        { label: "Github", subLabel: "rdev404", href: "https://github.com/rtch-cntlls", icon: FaGithub }
    ];

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const squareVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, delay: 0.5 } }
    };

    return(
        <section className="sans-serif text-white-50 d-flex align-items-center justify-content-between gap-5" id='intro'>
            <motion.div 
                className='w-100 w-md-75'
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.9 } } }} >
                <motion.h1 variants={textVariants} className="intro">
                    <TypeAnimation sequence={['Hello!', 2000, 'Hello!',]} wrapper="span" cursor={true} repeat={Infinity} />
                </motion.h1>
                <motion.p variants={textVariants}>
                    I am ritchie, a 23 years old Information Technology graduate specializing in full-stack web development with a strong focus on frontend design.
                    Experienced in building fast, responsive websites, and connecting them to reliable backend systems.
                    Skilled at turning designs into clean, accessible code that works seamlessly for users. A dedicated developer who
                    bridges the gap between beautiful visual design and solid technical performance to build great web applications.
                </motion.p>
                <motion.div variants={textVariants} className="d-flex gap-2 gap-md-3">
                    {socialLinks.map((link, index) => (
                        <Buttons key={index} label={link.label} subLabel={link.subLabel} href={link.href} icon={link.icon} />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div 
                className="img-frame-container"
                initial="hidden"
                animate="visible">
                {[...Array(8)].map((_, i) => (
                    <motion.div key={i} variants={squareVariants} className={`decorator-square ${['sq-tl', 'sq-tr', 'sq-bl', 'sq-br', 'sq-tc', 'sq-bc', 'sq-ml', 'sq-mr'][i]}`}></motion.div>
                ))}

                <motion.img 
                    src={Image} 
                    alt="Rtch PFP" 
                    className="framed-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </motion.div>
        </section>
    )
}

export default Intro;