import Image from '../assets/images/pfp.jpg';
import Buttons from '../components/common/buttons';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    const socialLinks = [
        { 
            label: "Email", 
            subLabel: "email@example.com", 
            href: "mailto:email@example.com", 
            icon: FaEnvelope 
        },
        { 
            label: "LinkedIn", 
            subLabel: "in/username", 
            href: "https://linkedin.com/in/username", 
            icon: FaLinkedin 
        },
        { 
            label: "Github", 
            subLabel: "username", 
            href: "https://github.com/username", 
            icon: FaGithub 
        }
    ];

    return (
        <section className="sans-serif text-white-50 d-flex align-items-center justify-content-between gap-5" id='intro'>
            <div>
                <h1 className="intro">
                    <TypeAnimation
                        sequence={[
                            'Hello!',
                            2000,
                            'Hello!',
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="d-flex gap-3">
                    {socialLinks.map((link, index) => (
                        <Buttons 
                            key={index} 
                            label={link.label} 
                            subLabel={link.subLabel}
                            href={link.href} 
                            icon={link.icon} 
                        />
                    ))}
                </div>
            </div>
            <div className="img-frame-container">

                <div className="decorator-square sq-tl"></div>
                <div className="decorator-square sq-tr"></div>
                <div className="decorator-square sq-bl"></div>
                <div className="decorator-square sq-br"></div>

                <div className="decorator-square sq-tc"></div>
                <div className="decorator-square sq-bc"></div>
                <div className="decorator-square sq-ml"></div>
                <div className="decorator-square sq-mr"></div>

                <img src={Image} alt="Profile Placeholder" className="framed-image" />
            </div>
        </section>
    );
}

export default Intro;