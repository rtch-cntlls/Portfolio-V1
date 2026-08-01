import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { rawProjectData } from '../data/projectData';

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

function ProjectCarousel({ images, title }) {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageList = Array.isArray(images) 
        ? images.slice(0, 5) 
        : [images].filter(Boolean);

    const currentIndex = Math.abs(page % imageList.length);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const goToSlide = (index) => {
        const newDirection = index > currentIndex ? 1 : -1;
        setPage([index, newDirection]);
    };

    return (
        <div className="position-relative overflow-hidden rounded h-100" style={{ minHeight: '280px', backgroundColor: '#141414' }}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={imageList[currentIndex]}
                    alt={`${title} screenshot ${currentIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="w-100 h-100 position-absolute top-0 start-0"
                    style={{ objectFit: 'cover' }}
                />
            </AnimatePresence>

            {imageList.length > 1 && (
                <>
                    <button
                        onClick={() => paginate(-1)}
                        className="btn btn-sm btn-dark position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle d-flex align-items-center justify-content-center border-0"
                        style={{ width: '34px', height: '34px', backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', zIndex: 2 }}
                        aria-label="Previous image"
                    >
                        <i className="bi bi-chevron-left text-white"></i>
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="btn btn-sm btn-dark position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle d-flex align-items-center justify-content-center border-0"
                        style={{ width: '34px', height: '34px', backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', zIndex: 2 }}
                        aria-label="Next image"
                    >
                        <i className="bi bi-chevron-right text-white"></i>
                    </button>
                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-1" style={{ zIndex: 2 }}>
                        {imageList.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`border-0 rounded-circle p-0 ${idx === currentIndex ? 'bg-primary' : 'bg-white opacity-50'}`}
                                style={{ width: idx === currentIndex ? '18px' : '6px', height: '6px', transition: 'all 0.3s ease' }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function AllProjects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center justify-content-between mb-5">
                <h3 className="text-white mb-0">
                    <i className="bi bi-code-square me-2 text-primary"></i>All Projects
                </h3>
                <Link to="/" className="btn btn-outline-light btn-sm d-flex align-items-center gap-1">
                    <i className="bi bi-arrow-left"></i> Back to Home
                </Link>
            </div>

            <motion.div 
                className="d-flex flex-column gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {rawProjectData.map((project) => {
                    const projectImages = (project.images && project.images.length > 0)
                        ? project.images
                        : [project.thumbnail || project.img];

                    return (
                        <motion.div 
                            key={project.id || project.title} 
                            variants={cardVariants}
                            className="card bg-dark border border-secondary shadow-sm overflow-hidden"
                        >
                            <div className="row g-0">
                                <div className="col-12 col-md-6 p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="text-white fw-bold mb-3">{project.title}</h5>
                                        {project.description && (
                                            <p className="text-white-50 mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                                            {(!project.link && !project.demo && !project.code) ? (
                                                <span 
                                                    className="badge border border-secondary text-secondary-light fw-normal d-inline-flex align-items-center gap-1"
                                                    style={{ backgroundColor: 'rgba(255,255,255,0.03)', fontSize: '0.75rem', padding: '0.45em 0.8em' }}
                                                >
                                                    <i className="bi bi-lock-fill me-1 text-secondary"></i>
                                                    Private Project / No Links Available
                                                </span>
                                            ) : (
                                                <>
                                                    {project.link && (
                                                        <a 
                                                            href={project.link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="btn btn-live btn-sm d-inline-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-box-arrow-up-right"></i> Live Link
                                                        </a>
                                                    )}

                                                    {project.demo && (
                                                        <a 
                                                            href={project.demo} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="btn btn-test btn-sm d-inline-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-play-circle-fill"></i> Test Demo
                                                        </a>
                                                    )}

                                                    {project.code && (
                                                        <a 
                                                            href={project.code} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="btn btn-code btn-sm d-inline-flex align-items-center gap-1"
                                                        >
                                                            <i className="bi bi-github"></i> Source Code
                                                        </a>
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        {project.techStack && (
                                            <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-50">
                                                {project.techStack.map((tech) => (
                                                    <span 
                                                        key={tech} 
                                                        className="badge border border-secondary text-secondary-light fw-normal"
                                                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', padding: '0.4em 0.8em' }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 p-3">
                                    <ProjectCarousel 
                                        images={projectImages} 
                                        title={project.title} 
                                    />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default AllProjects;