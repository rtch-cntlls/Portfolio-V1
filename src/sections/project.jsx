import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rawProjectData } from '../data/projectData';

function Project() {
    const displayedProjects = rawProjectData.slice(0, 2);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.1 
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
        }
    };

    return (
        <section className="px-4 py-3" id='project'>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="text-white mb-0">
                    <i className="bi bi-pin-angle-fill me-2 text-primary"></i>Pinned Projects
                </h4>
            </div>

            <motion.div 
                className="row g-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {displayedProjects.map((project) => (
                    <motion.div 
                        key={project.id || project.title} 
                        variants={cardVariants} 
                        className="col-12 col-md-6"
                    >
                        <motion.div 
                            className="card bg-dark border border-primary border-opacity-25 shadow-sm h-100 project-card overflow-hidden position-relative"
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        >
                            <div 
                                className="position-absolute top-0 end-0 m-3 px-2 py-1 rounded-pill d-flex align-items-center gap-1"
                                style={{ 
                                    backgroundColor: 'rgba(13, 109, 253, 0.43)', 
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 2,
                                    fontSize: '0.75rem'
                                }}
                            >
                                <i className="bi bi-pin-fill text-danger"></i>
                                <span className="fw-semibold text-white">Pinned</span>
                            </div>

                            <div className="overflow-hidden" style={{ height: '220px' }}>
                                <motion.img
                                    src={project.thumbnail || project.img}
                                    alt={project.title}
                                    className="card-img-top w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h6 className="text-white fw-bold mb-2">{project.title}</h6>
                                {project.techStack && (
                                    <div className="d-flex flex-wrap gap-1 mt-auto pt-2">
                                        {project.techStack.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="badge border border-secondary text-secondary-light fw-normal"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.7rem' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="text-center mt-5">
                <Link to="/projects" className="btn btn-outline-primary px-4 py-2">
                    View All Projects ({rawProjectData.length}) <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>
        </section>
    );
}

export default Project;