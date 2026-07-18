import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='text-white' >
            <div className="">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <h5 className="text-primary mb-3 fw-bold">rtch<span className='text-danger'>cntlls</span></h5>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Full-stack developer passionate about building scalable, 
                            user-centric web applications and exploring new technologies.
                        </p>
                    </div>
                    <div className="col-lg-4 text-lg-center">
                        <h6 className="text-white mb-3">Quick Links</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                            <li><a href="#intro" className="text-white-50 text-decoration-none">Home</a></li>
                            <li><a href="#education" className="text-white-50 text-decoration-none">About Me</a></li>
                            <li><a href="#stack" className="text-white-50 text-decoration-none">Tech Stack</a></li>
                            <li><a href="#project" className="text-white-50 text-decoration-none">Projects</a></li>
                            <li><a href="#about" className="text-white-50 text-decoration-none">About</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <h6 className="text-white mb-3">Let's Connect</h6>
                        <div className="d-flex gap-3 justify-content-lg-end mb-3">
                            <a href="https://github.com/rtch-cntlls" className="text-white-50 fs-5"><FaGithub /></a>
                            <a href="https://linkedin.com/in/ritchie-cantillas-314543419" className="text-white-50 fs-5"><FaLinkedin /></a>
                            <a href="mailto:rtchcntlls@email.com" className="text-white-50 fs-5"><FaEnvelope /></a>
                            <a href="#" className="text-white-50 fs-5"><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                <hr className="mt-4 border-secondary" />

                <div className="text-center pt-2" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                    &copy; {currentYear}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;