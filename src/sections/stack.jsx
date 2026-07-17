import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, FaJava, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiMysql, SiPostgresql, SiDotnet, SiC, SiGit, SiGithub, SiTask,  } from 'react-icons/si';
import { VscTerminal } from "react-icons/vsc";
import Other from './skills'

function Stack() {
    const stack = [
        { title: 'Front End', name: 'HTML5', icon: FaHtml5, color: 'text-danger' },
        { title: 'Front End', name: 'CSS3', icon: FaCss3Alt, color: 'text-primary' },
        { title: 'Front End', name: 'JavaScript', icon: FaJs, color: 'text-warning' }, 
        { title: 'Front End', name: 'Bootstrap', icon: FaBootstrap, color: 'text-primary' }, 
        { title: 'Front End', name: 'React (Vite)', icon: FaReact, color: 'text-info' },
        { title: 'Full Stack', name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { title: 'Back End', name: 'PHP', icon: FaPhp, color: 'text-primary' },
        { title: 'Full Stack', name: 'Laravel', icon: FaLaravel, color: 'text-danger' },
        { title: 'Back End', name: 'Supabase', icon: SiSupabase, color: 'text-success' },
        { title: 'Back End', name: 'MySQL', icon: SiMysql, color: 'text-white' },
        { title: 'Back End', name: 'Postgresql', icon: SiPostgresql, color: 'text-white' },
        { title: 'Back End', name: 'ASP.NET', icon: SiDotnet, color: 'text-primary' },
        { title: 'Back End', name: 'VB.NET', icon: SiDotnet, color: 'text-primary' },
        { title: 'Languages', name: 'Java', icon: FaJava, color: 'text-primary' },
        { title: 'Languages', name: 'C', icon: SiC, color: 'text-white' },
        { title: 'Languages', name: 'C#', icon: SiC , color: 'text-white' },
        { title: 'Tools', name: 'Git', icon: SiGit , color: 'text-danger' },
        { title: 'Tools', name: 'Github', icon: SiGithub , color: 'text-white' },
        { title: 'Tools', name: 'VS Code', icon: VscTerminal , color: 'text-white' },
        { title: 'Tools', name: 'Visual Studio', icon: VscTerminal , color: 'text-white' },
        { title: 'Tools', name: 'XAMPP', icon: FaServer , color: 'text-white' },
        { title: 'Methodologies', name: 'Waterfall Model', icon: SiTask, color: 'text-info' },
    ];

    const categories = [...new Set(stack.map(item => item.title))];

    return (
        <section id='stack'>
            <h4 className="text-white mb-5">
                <i className="bi-stack me-3 text-danger"></i>Tech Stack
            </h4>
            
            {categories.map((category) => (
                <div key={category} className="mb-4">
                    <h6 className="text-white-50 text-uppercase mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                        {category}
                    </h6>

                    <div className="d-flex flex-wrap gap-3 mb-4 ">
                        {stack
                            .filter(item => item.title === category)
                            .map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="stack bg-dark text-white px-3 py-2 rounded d-flex align-items-center border border-secondary shadow-sm"
                                        style={{ gap: '10px' }}>
                                        <Icon size={25} className={item.color} />
                                        <span className="fw-medium" style={{ fontSize: '0.85rem' }}>{item.name}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
            <Other/>
        </section>
    );
}

export default Stack;