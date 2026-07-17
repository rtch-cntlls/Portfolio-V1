import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="border-top border-secondary text-white-50">
            <div className="container d-flex flex-column align-items-center gap-3 mt-5">
                <div className="d-flex gap-4">
                    {[
                        { icon: FaGithub, href: "https://github.com/rtch-cntlls" },
                        { icon: FaLinkedin, href: "https://linkedin.com/in/ritchie-cantillas-314543419" },
                        { icon: FaEnvelope, href: "mailto:rtchcntlls@email.com" },
                        { icon: FaTwitter, href: "#" },
                        { icon: FaFacebook, href: "#" }
                    ].map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-link"
                        >
                            <item.icon size={22} />
                        </a>
                    ))}
                </div>
                <p className="mb-0" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                    &copy; {new Date().getFullYear()} RtchCntlls. Built with passion.
                </p>
            </div>
        </footer>
    );
}

export default Footer;