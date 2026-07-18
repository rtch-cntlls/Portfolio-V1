import { motion } from 'framer-motion';
import Exp from './exp';

function Education() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: '100%', transition: { duration: 1, ease: "easeInOut" } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const EducationItem = ({ school, degree, active, sy }) => (
        <motion.div 
            variants={itemVariants}
            className="mb-5 position-relative ps-4" >
            <div 
                className={`position-absolute rounded-circle ${active ? 'bg-success' : 'bg-light'}`} 
                style={{ width: '17px', height: '17px', left: '-9px', top: '4px', border: '2px solid #212529', zIndex: 1 }}>
            </div>
            
            <div className="d-flex flex-column">
                <h6 className="fw-bold text-white mb-1">{school}</h6>
                {degree && <span className="text-white-50 small mb-2">{degree}</span>}
                <small className="text-white font-monospace" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                    {sy ? `SY: ${sy}` : 'SY: N/A'}
                </small>
            </div>
        </motion.div>
    );

    return (
        <section id="education">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="px-4 py-3">
                        <h4 className="text-white mb-5 d-flex align-items-center">
                            <i className="bi bi-mortarboard me-3 text-success"></i>Education
                        </h4>
                        
                        <motion.div 
                            className="border-start border-2 border-secondary ms-2 position-relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.9 }} >
                            <motion.div 
                                variants={lineVariants}
                                className="position-absolute bg-secondary"
                                style={{ width: '2px', left: '-3px', top: 0, zIndex: 0 }} />
                            
                            <EducationItem 
                                school="Cebu Technological University" 
                                degree="Bachelor of Science in Information Technology" 
                                sy="2022 - 2026"
                                active={true} />
                            <EducationItem 
                                school="Don Emilio Canonigo Senior High School" 
                                degree="Accountancy, Business, and Management"
                                sy="2020 - 2022" />
                        </motion.div>
                    </div>
                </div>
                <Exp />
            </div>
        </section>
    );
}

export default Education;