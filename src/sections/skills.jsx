import { FaNetworkWired, FaTools, FaKeyboard, FaFolder, FaMicrosoft } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
    const supportSkills = [
        { name: 'Cable Management', icon: FaTools, color: 'text-secondary', x: -50, y: -30 },
        { name: 'Network Configuration', icon: FaNetworkWired, color: 'text-info', x: 40, y: -40 },
        { name: 'Data Entry', icon: FaKeyboard, color: 'text-warning', x: -20, y: 50 },
        { name: 'File Management', icon: FaFolder, color: 'text-info', x: 60, y: 20 },
        { name: 'MS Office', icon: FaMicrosoft, color: 'text-primary', x: -60, y: 30 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: (custom) => ({
            x: custom.x,
            y: custom.y,
            opacity: 0,
            scale: 0.8
        }),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 60, damping: 10 }
        }
    };

    return (
        <section id="skills" className="mb-5">
            <h6 className="text-white-50 text-uppercase mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                Other Skills
            </h6>
            
            <motion.div 
                className="d-flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.9 }}
            >
                {supportSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div 
                            key={index}
                            custom={{ x: skill.x, y: skill.y }}
                            variants={itemVariants}
                            className="stack bg-dark text-white px-3 py-2 rounded d-flex align-items-center border border-secondary shadow-sm"
                            style={{ gap: '10px' }}
                        >
                            <Icon size={25} className={skill.color} />
                            <span className="fw-medium" style={{ fontSize: '0.85rem' }}>{skill.name}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

export default Skills;