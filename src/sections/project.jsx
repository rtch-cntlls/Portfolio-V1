import ecommerceImg from '../assets/projects/e-commerce/thumbnail.png';

function Project() {
    const projects = [
        { title: 'Motorcycle Parts E-commerce & Services Management System', img: ecommerceImg, link: '#' },
    ];

    return (
        <section className="px-4 py-3" id='project'>
            <h4 className="text-white mb-5">
                <i className="bi-code-square me-3 text-primary"></i>Projects
            </h4>
            
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="card bg-dark border border-secondary shadow-sm overflow-hidden">
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="card-img-top" 
                                style={{ height: '200px', objectFit: 'cover' }} />

                            <div className="card-body">
                                <h6 className="text-white fw-bold">{project.title}</h6>
                                <a href={project.link} className="btn btn-sm btn-outline-light mt-2">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;