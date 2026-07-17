import { FaGamepad, FaCode, FaBasketballBall, FaPalette, FaBed } from 'react-icons/fa';
function About() {
    const hobbyList = [
        { name: 'Gaming', icon: FaGamepad, color: 'text-info' },
        { name: 'Coding', icon: FaCode, color: 'text-warning' },
        { name: 'Basketball', icon: FaBasketballBall, color: 'text-danger' },
        { name: 'Arts', icon: FaPalette, color: 'text-primary' },
        { name: 'Sleeping', icon: FaBed, color: 'text-light' }
    ];
    return (
        <section id="about" className="mb-5 px-4">
            <h4 className="text-white mb-4">
                <i className="bi-person-fill me-3 text-primary"></i>About me
            </h4>

            <div className="row g-4">
                <div className="col-md-12">
                    <div className="card bg-dark border-secondary shadow-sm h-100">
                    <div className="card-body p-4">
                        <h5 className="text-white mb-3">Who I Am?</h5>
                        <p className="text-white-50 mb-3">
                            I am a dedicated and hardworking professional based in <strong>City of Naga, Cebu, Philippines</strong>, 
                            with a strong foundation in both software development and technical support. 
                            I thrive in challenging environments where I can apply my problem-solving 
                            skills to build efficient solutions.
                        </p>
                        <p className="text-white-50 mb-0">
                            I am highly motivated to expand my expertise and am always eager to learn new 
                            technologies. Whether it's developing full-stack applications 
                            or managing technical infrastructure, I approach every project with a commitment 
                            to quality, accuracy, and continuous growth.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card bg-dark border-secondary shadow-sm h-100">
                        <div className="card-body p-4">
                            <h5 className="text-white mb-3">Hobbies</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {hobbyList.map((hobby, index) => {
                                    const Icon = hobby.icon;
                                    return (
                                        <div 
                                            key={index} 
                                            className="bg-dark text-white px-3 py-2 rounded d-flex align-items-center border border-secondary shadow-sm"
                                            style={{ gap: '10px' }}
                                        >
                                            <Icon size={25} className={hobby.color} />
                                            <span className="fw-medium" style={{ fontSize: '0.85rem' }}>{hobby.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;