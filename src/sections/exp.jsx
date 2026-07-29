import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

function Exp() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: '100%', transition: { duration: 1, ease: "easeInOut", delay: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const ExpItem = ({ title, company, date, active }) => (
        <motion.div 
            variants={itemVariants}
            className="mb-4 position-relative ps-4"
        >
            <div 
                className={`position-absolute rounded-circle ${active ? 'bg-primary shadow-primary-glow' : 'bg-secondary'}`} 
                style={{ 
                    width: '14px', 
                    height: '14px', 
                    left: '-8px', 
                    top: '5px', 
                    border: '2px solid #000000', 
                    zIndex: 2 
                }} 
            />
            
            <div className="d-flex flex-column gap-1">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h6 className="fw-bold text-white m-0" style={{ fontSize: '1.05rem' }}>{title}</h6>
                    <span className="font-monospace text-info small mt-1 mt-sm-0" style={{ fontSize: '0.75rem', letterSpacing: '0.8px' }}>{date}</span>
                </div>
                <span className="text-white-50 small">{company}</span>
            </div>
        </motion.div>
    );

    return (
        <motion.div 
            className="glass-card border-glass p-4 rounded-4 h-100 position-relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h4 className="text-white mb-4 d-flex align-items-center gap-3 fw-bold">
                <span className="p-2 rounded-3 bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center">
                    <FaBriefcase />
                </span>
                Experience
            </h4>

            <motion.div 
                className="border-start border-2 border-secondary border-opacity-25 ms-2 position-relative pt-1 pb-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div 
                    variants={lineVariants}
                    className="position-absolute bg-primary"
                    style={{ width: '2px', left: '-2px', top: 0, zIndex: 1 }}
                />

                <ExpItem 
                    title="Full Stack Developer / IT Intern" 
                    company="Naga Central Elementary School (NCES)" 
                    date="2026" 
                    active={true} 
                />
                <ExpItem 
                    title="Full-Stack Developer (Capstone)" 
                    company="Motorcycle Parts E-commerce & Services System" 
                    date="2025" 
                />
                <ExpItem 
                    title="Hello World" 
                    company="My first line of code" 
                    date="2022" 
                />
            </motion.div>
        </motion.div>
    );
}

export default Exp;