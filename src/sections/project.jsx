import { useState } from 'react';
import { BiLinkExternal, BiPlayCircle, BiLogoGithub } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { rawProjectData } from '../data/projectData';

function Project() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const displayedProjects = showAll ? rawProjectData : rawProjectData.slice(0, 4);

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

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.85, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: { 
            opacity: 0, 
            scale: 0.9, 
            y: 10,
            transition: { duration: 0.2 }
        }
    };

    return (
        <section className="px-4 py-3" id='project'>
            <h4 className="text-white mb-5">
                <i className="bi-code-square me-3 text-primary"></i>Projects
            </h4>

            <motion.div 
                key={showAll ? 'all' : 'limited'}
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
                            className="card bg-dark border border-secondary shadow-sm h-100 project-card overflow-hidden"
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        >
                            <div className="overflow-hidden" style={{ height: '180px' }}>
                                <motion.img
                                    src={project.img}
                                    alt={project.title}
                                    className="card-img-top w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="text-white fw-bold">{project.title}</h6>
                                </div>
                                <div className='d-flex gap-2 flex-wrap mt-3'>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn btn-sm btn-outline-light d-flex align-items-center" >
                                        <BiLinkExternal className="me-1" /> View Details
                                    </button>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light d-flex align-items-center">
                                        <BiPlayCircle className="me-1" /> Demo
                                    </a>
                                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light d-flex align-items-center">
                                        <BiLogoGithub className="me-1" /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {rawProjectData.length > 4 && (
                <div className="text-center mt-5">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAll(!showAll)}
                        className="btn btn-outline-primary"
                    >
                        {showAll ? 'Show Less' : `View All (${rawProjectData.length}) Projects`}
                    </motion.button>
                </div>
            )}

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal fade show d-block"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)', zIndex: 1050 }}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelectedProject(null)} 
                    >
                        <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                            <motion.div 
                                className="modal-content border-0 shadow-lg" 
                                style={{ backgroundColor: 'rgba(42, 42, 42, 0.92)', backdropFilter: 'blur(10px)', borderRadius: '15px', overflow: 'hidden' }}
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="d-flex align-items-center p-3" style={{ backgroundColor: '#2d2d2d' }}>
                                    <div className="d-flex gap-2">
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
                                    </div>
                                    <h6 className="text-white-50 mx-auto mb-0" style={{ fontSize: '0.8rem' }}>{selectedProject.title}</h6>
                                </div>

                                <div className="modal-body p-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={selectedProject.mockup} className="img-fluid rounded shadow" alt="Project"/>
                                            <div className='d-flex gap-2 mt-3'>
                                                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success d-flex align-items-center">
                                                    <BiPlayCircle className="me-1" /> Live Demo
                                                </a>
                                                <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light d-flex align-items-center">
                                                    <BiLogoGithub className="me-1" /> Source Code
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3 mt-md-0">
                                            <h5 className="text-white">About the Project</h5>
                                            <p className="text-white-50 small">{selectedProject.description}</p>

                                            <h6 className="mt-4 text-white">Core Technologies</h6>
                                            <div className="d-flex flex-wrap gap-2 mt-2">
                                                {selectedProject.techStack.map((tech, idx) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.1 + idx * 0.04 }}
                                                        className="badge" 
                                                        style={{ backgroundColor: '#3d3d3d', color: '#e0e0e0', padding: '0.6em 1em', borderRadius: '8px' }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Project;