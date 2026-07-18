import { motion } from 'framer-motion';

function Exp() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: '100%', transition: { duration: 1, ease: "easeInOut", delay: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const ExpItem = ({ title, company, date, active }) => (
        <motion.div 
            variants={itemVariants}
            className="mb-5 position-relative ps-4"
        >
            <div 
                className={`position-absolute rounded-circle ${active ? 'bg-primary' : 'bg-secondary'}`} 
                style={{ width: '17px', height: '17px', left: '-9px', top: '4px', border: '2px solid #212529', zIndex: 1 }} 
            />
            
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold text-white mb-1">{title}</h6>
                    <span className="font-monospace text-white-50 small ms-3">{date}</span>
                </div>
                <span className="text-white-50 small">{company}</span>
            </div>
        </motion.div>
    );

    return (
        <div className="col-12 col-md-6">
            <div className="px-4 py-3">
                <h4 className="text-white mb-5 d-flex align-items-center">
                    <i className="bi bi-briefcase me-3 text-primary"></i>Experience
                </h4>

                <motion.div 
                    className="border-start border-2 border-secondary ms-2 position-relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.9 }}>
                    <motion.div 
                        variants={lineVariants}
                        className="position-absolute bg-secondary"
                        style={{ width: '2px', left: '-3px', top: 0, zIndex: 0 }}
                    />

                    <ExpItem 
                        title="Full Stack Developer/IT Support Intern" 
                        company="Naga Central Elementary School (NCES)" 
                        date="2026" 
                        active={true} 
                    />
                    <ExpItem 
                        title="FullStack Developer (Capstone)" 
                        company="Motorcycle Parts E-commerce & Services Management System" 
                        date="2025" 
                    />
                    <ExpItem 
                        title="Hello World" 
                        company="My first line of code" 
                        date="2022" 
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Exp;