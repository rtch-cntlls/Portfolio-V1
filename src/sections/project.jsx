import { useState } from 'react';
import { BiLinkExternal, BiPlayCircle, BiLogoGithub } from 'react-icons/bi';
import ecommerceImg from '../assets/placeholder/project.avif';
import ecommercemock from '../assets/placeholder/project.avif';
import internImg from '../assets/placeholder/project.avif';
import internmock from '../assets/placeholder/project.avif';
import invImg from '../assets/placeholder/project.avif';
import invmock from '../assets/placeholder/project.avif';
import rentImg from '../assets/placeholder/project.avif';
import rentmock from '../assets/placeholder/project.avif';
import careImg from '../assets/placeholder/project.avif';
import caremock from '../assets/placeholder/project.avif';
import airlineImg from '../assets/placeholder/project.avif';
import airlinemock from '../assets/placeholder/project.avif';


function Project() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

const projects = [
        {
            title: 'Project Title Placeholder 1 (Capstone Project) - 2025',
            img: ecommerceImg,
            mockup: ecommercemock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            techStack: ['Technology A', 'Technology B', 'Technology C', 'API Integration 1', 'API Integration 2']
        },
        {
            title: 'Project Title Placeholder 2 (Internship Project) - 2026',
            img: internImg,
            mockup: internmock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            techStack: ['Technology A', 'Technology B', 'Technology C']
        },
        {
            title: 'Project Title Placeholder 3 (Personal Project) - 2026',
            img: invImg,
            mockup: invmock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            techStack: ['Technology A', 'Technology B', 'Technology C']
        },
        {
            title: 'Project Title Placeholder 4 (Academic Project) - 2025',
            img: rentImg,
            mockup: rentmock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            techStack: ['Technology A', 'Technology B', 'Technology C']
        },
        {
            title: 'Project Title Placeholder 5 (Personal Project) - 2026',
            img: airlineImg,
            mockup: airlinemock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            techStack: ['Technology A', 'Technology B', 'Technology C']
        },
        {
            title: 'Project Title Placeholder 6 (Academic Project) - 2025',
            img: careImg,
            mockup: caremock,
            link: '#', demo: '#', code: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            techStack: ['Technology A', 'Technology B', 'Technology C']
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section className="px-4 py-3" id='project'>
            <h4 className="text-white mb-5">
                <i className="bi-code-square me-3 text-primary"></i>Projects
            </h4>

            <div className="row g-4">
                {displayedProjects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <div className="card bg-dark border border-secondary shadow-sm h-100 project-card">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="card-img-top"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
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
                        </div>
                    </div>
                ))}
            </div>

            {projects.length > 4 && (
                <div className="text-center mt-5">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn btn-outline-primary"
                    >
                        {showAll ? 'Show Less' : `View All (${projects.length}) Projects`}
                    </button>
                </div>
            )}
           {selectedProject && (
                <div
                    className="modal fade show d-block"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(5px)' }}
                    onClick={() => setSelectedProject(null)} >
                    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content border-0 shadow-lg" style={{backgroundColor: 'rgba(48, 48, 48, 0.75)', backdropFilter: 'blur(5px)', borderRadius: '15px', overflow: 'hidden' }}>
                            
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
                                    <div className="col-md-6">
                                        <h5 className="text-white">About the Project</h5>
                                        <p className="text-white-50 small">{selectedProject.description}</p>

                                        <h6 className="mt-4 text-white">Core Technologies</h6>
                                        <div className="d-flex flex-wrap gap-2 mt-2">
                                            {selectedProject.techStack.map((tech) => (
                                                <span key={tech} className="badge" style={{ backgroundColor: '#3d3d3d', color: '#e0e0e0', padding: '0.6em 1em', borderRadius: '8px' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Project;