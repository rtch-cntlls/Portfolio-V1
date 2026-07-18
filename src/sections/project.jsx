import { useState } from 'react';
import { BiLinkExternal, BiPlayCircle, BiLogoGithub } from 'react-icons/bi';
import { motion } from 'framer-motion';
import ecommerceImg from '../assets/projects/e-commerce/1.png';
import ecommercemock from '../assets/projects/e-commerce/thumbnail.png';
import internImg from '../assets/projects/intern/2.png';
import internmock from '../assets/projects/intern/thumbnail.png';
import invImg from '../assets/projects/inv/2.png';
import invmock from '../assets/projects/inv/thumbnail.png';
import rentImg from '../assets/projects/rent/4.png';
import rentmock from '../assets/projects/rent/thumbnail.png';
import careImg from '../assets/projects/care/1.png';
import caremock from '../assets/projects/care/thumbnail.png';
import airlineImg from '../assets/projects/airline/1.png';
import airlinemock from '../assets/projects/airline/thumbnail.png';

function Project() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Motorcycle Parts E-commerce & Services Management System (Capstone Project) - 2025',
            img: ecommerceImg,
            mockup: ecommercemock,
            link: '#', demo: '#', code: '#',
            description: 'A full-stack, single-vendor e-commerce and service management system tailored for the motorcycle industry. Beyond standard inventory, order processing, and booking functionalities, this platform features an intelligent AI engine powered by Gemini. The system automates service scheduling by analyzing maintenance history, provides personalized recommendations for future upkeep, and offers basic AI-driven troubleshooting to guide customers. This project demonstrates the integration of generative AI to enhance customer retention and streamline operational workflow.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL', 'Paymongo API', 'Google Gemini API','Google Auth','Facebook Auth','PHPMailer','PhilSMS API']
        },
        {
            title: 'Student Record Management System (Internship Project) - 2026',
            img: internImg,
            mockup: internmock,
            link: '#', demo: '#', code: '#',
            description: 'Developed to digitize the student permanent record system for Naga Central Elementary School. This platform replaces traditional, manual paperwork by providing administrators with a centralized database to securely search, manage, and print student records, significantly improving data retrieval efficiency and record-keeping accuracy.',
            techStack: ['Next.js', 'Bootstrap', 'Supabase', 'PostgreSQL', 'hCaptcha']
        },
        {
            title: 'School Inventory Management System (Personal Project) - 2026',
            img: invImg,
            mockup: invmock,
            link: '#', demo: '#', code: '#',
            description: 'Built to modernize school asset management, this system digitizes the inventory borrowing process. It allows administrators to quickly identify who has checked out specific equipment, track return statuses, and maintain an organized, searchable record of all school-owned items',
            techStack: ['Next.js', 'Bootstrap', 'Supabase', 'PostgreSQL']
        },
        {
            title: 'Property Rental Management Platform (Academic Project) - 2025',
            img: rentImg,
            mockup: rentmock,
            link: '#', demo: '#', code: '#',
            description: 'A dynamic property rental marketplace featuring a dual-role user architecture. The platform empowers guests to transition into property hosts through an integrated upgrade request system, subject to a secure administrative approval process. Designed to streamline property listings and booking management, this project showcases expertise in role-based access control (RBAC) and end-to-end administrative oversight.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL', 'Google Auth']
        },
        {
            title: 'Airline Booking Management System (Personal Project) - 2026',
            img: airlineImg,
            mockup: airlinemock,
            link: '#', demo: '#', code: '#',
            description: 'SkyBook is an all-in-one system designed to manage every part of an airline, from the ground up. It starts by organizing the basics, like airports, planes, and flight routes. From there, it handles flight scheduling and automatically sets ticket prices based on seat class and special deals. Passengers can easily book their flights, while the system records every reservation in real-time. Finally, it provides clear reports on how much money is being made and how well the flights are running.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL', 'Google Auth']
        },
        {
            title: 'Clinic Management System (Academic Project) - 2025',
            img: careImg,
            mockup: caremock,
            link: '#', demo: '#', code: '#',
            description: 'This is an all-in-one system designed to help clinics run smoothly by keeping all information in one place. Instead of using different programs for different tasks, this platform connects everything including patient appointments, medicine inventory, and billing into a single, easy-to-use system. It features six custom dashboards for doctors, admins, patients, cashiers, pharmacists, and receptionists, giving each user access only to the tools they need. By automating daily tasks and keeping data perfectly synced, this system saves time, prevents mistakes, and helps owners easily track how their clinic is doing.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL', 'Google Auth']
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
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
                    viewport={{ once: true, amount: 0.1 }}
                >
                {displayedProjects.map((project, index) => (
                    <motion.div key={index} variants={cardVariants} className="col-12 col-md-6">
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
                    </motion.div>
                ))}
            </motion.div>

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