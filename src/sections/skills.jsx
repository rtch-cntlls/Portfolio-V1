import { FaNetworkWired, FaTools, FaKeyboard, FaFolder, FaMicrosoft } from 'react-icons/fa';

function Skills() {
    const supportSkills = [
        { name: 'Cable Management', icon: FaTools, color: 'text-secondary' },
        { name: 'Network Configuration', icon: FaNetworkWired, color: 'text-info' },
        { name: 'Data Entry', icon: FaKeyboard, color: 'text-warning' },
        { name: 'File Management', icon: FaFolder, color: 'text-info' },
        { name: 'MS Office', icon: FaMicrosoft, color: 'text-primary' },
    ];

    return (
        <section id="skills" className="mb-5">
            <h6 className="text-white-50 text-uppercase mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                Other Skills
            </h6>
            <div className="d-flex flex-wrap gap-3">
                {supportSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div 
                            key={index} 
                            className="stack bg-dark text-white px-3 py-2 rounded d-flex align-items-center border border-secondary shadow-sm"
                            style={{ gap: '10px' }}>
                            <Icon size={25} className={skill.color} />
                            <span className="fw-medium" style={{ fontSize: '0.85rem' }}>{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;