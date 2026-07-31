import { motion } from 'framer-motion';
import Exp from './exp';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: '100%', transition: { duration: 1, ease: "easeInOut" } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const EducationItem = ({ school, degree, active, sy }) => (
        <motion.div 
            variants={itemVariants}
            className="mb-4 position-relative ps-4" 
        >
            <div 
                className={`position-absolute rounded-circle ${active ? 'bg-success shadow-success-glow' : 'bg-secondary'}`} 
                style={{ 
                    width: '14px', 
                    height: '14px', 
                    left: '-8px', 
                    top: '5px', 
                    border: '2px solid #000000', 
                    zIndex: 2 
                }}
            ></div>
            
            <div className="d-flex flex-column gap-1">
                <h6 className="fw-bold text-white m-0" style={{ fontSize: '1.05rem' }}>{school}</h6>
                {degree && <span className="text-white-50 small">{degree}</span>}
                <small className="text-info font-monospace mt-1" style={{ fontSize: '0.75rem', letterSpacing: '0.8px' }}>
                    {sy ? `SY: ${sy}` : 'SY: N/A'}
                </small>
            </div>
        </motion.div>
    );

    return (
        <section id="education" className="py-2">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <motion.div 
                        className="p-4 rounded-4 h-100 position-relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h4 className="text-white mb-4 d-flex align-items-center gap-3 fw-bold">
                            <span className="p-2 rounded-3 bg-success bg-opacity-10 text-success d-inline-flex align-items-center justify-content-center">
                                <FaGraduationCap />
                            </span>
                            Education
                        </h4>
          
                        <motion.div 
                            className="border-start border-2 border-secondary border-opacity-25 ms-2 position-relative pt-1 pb-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.5 }}
                        >
                            <motion.div 
                                variants={lineVariants}
                                className="position-absolute bg-success"
                                style={{ width: '2px', left: '-2px', top: 0, zIndex: 1 }} 
                            />
                            
                            <EducationItem 
                                school="Cebu Technological University" 
                                degree="Bachelor of Science in Information Technology" 
                                sy="2022 - 2026"
                                active={true} 
                            />
                            <EducationItem 
                                school="Don Emilio Canonigo Senior High School" 
                                degree="Accountancy, Business, and Management"
                                sy="2020 - 2022" 
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="col-12 col-md-6">
                    <Exp />
                </div>
            </div>
        </section>
    );
}

export default Education;