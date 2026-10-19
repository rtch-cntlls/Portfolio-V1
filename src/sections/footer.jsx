import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="text-center text-white-50 border-top border-secondary">
            <div className="container">
                <div className="mb-3 d-flex justify-content-center flex-wrap gap-3">
                    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">
                        <FaInstagram size={20} />
                    </a>
                    <a href="mailto:your.email@example.com" className="text-white-50 text-decoration-none">
                        <FaEnvelope size={20} />
                    </a>
                </div>
                <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} Built with React & Bootstrap.
                </p>
            </div>
        </footer>
    );
}

export default Footer;