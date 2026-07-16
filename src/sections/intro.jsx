import Image from '../assets/images/pfp.jpg';
import Buttons from '../components/common/buttons';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    const socialLinks = [
        { 
            label: "Email",  subLabel: "rtchcntlls@email.com", href: "mailto:rtchcntlls@email.com",  icon: FaEnvelope 
        },
        { 
            label: "LinkedIn",  subLabel: "in/ritchie-cantillas",  href: "https://linkedin.com/in/ritchie-cantillas-314543419",   icon: FaLinkedin 
        },

        { 
            label: "Github",  subLabel: "rtch-cntlls", href: "https://github.com/rtch-cntlls", icon: FaGithub 
        }
    ];
    return(
        <section className="sans-serif text-white-50 d-flex align-itens-center justify-content-between gap-5" id='intro'>
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
                    I am Rtch, a 23 years old Information Technology graduate specializing in full-stack web development with a strong focus on frontend design.
                    Experienced in building fast, responsive websites, and connecting them to reliable backend systems.
                    Skilled at turning designs into clean, accessible code that works seamlessly for users. A dedicated developer who
                    bridges the gap between beautiful visual design and solid technical performance to build great web applications.
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
                {/* 4 Corners */}
                <div className="decorator-square sq-tl"></div>
                <div className="decorator-square sq-tr"></div>
                <div className="decorator-square sq-bl"></div>
                <div className="decorator-square sq-br"></div>

                {/* 4 Centers */}
                <div className="decorator-square sq-tc"></div>
                <div className="decorator-square sq-bc"></div>
                <div className="decorator-square sq-ml"></div>
                <div className="decorator-square sq-mr"></div>

                {/* The Image */}
                <img src={Image} alt="Rtch PFP" className="framed-image" />
            </div>
        </section>
    )
}

export default Intro;