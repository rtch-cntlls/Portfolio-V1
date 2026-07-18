import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, FaJava, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiMysql, SiPostgresql, SiDotnet, SiC, SiGit, SiGithub, SiTask } from 'react-icons/si';
import { VscTerminal } from "react-icons/vsc";
import { motion } from 'framer-motion';
import Other from './skills';

function Stack() {
    const stack = [
        { title: 'Front End', name: 'HTML5', icon: FaHtml5, color: 'text-danger', x: -50, y: -30 },
        { title: 'Front End', name: 'CSS3', icon: FaCss3Alt, color: 'text-primary', x: 50, y: -20 },
        { title: 'Front End', name: 'JavaScript', icon: FaJs, color: 'text-warning', x: -30, y: 40 }, 
        { title: 'Front End', name: 'Bootstrap', icon: FaBootstrap, color: 'text-primary', x: 20, y: 50 }, 
        { title: 'Front End', name: 'React (Vite)', icon: FaReact, color: 'text-info', x: -60, y: 10 },
        { title: 'Full Stack', name: 'Next.js', icon: SiNextdotjs, color: 'text-white', x: 40, y: -40 },
        { title: 'Back End', name: 'PHP', icon: FaPhp, color: 'text-primary', x: -40, y: -50 },
        { title: 'Full Stack', name: 'Laravel', icon: FaLaravel, color: 'text-danger', x: 60, y: 30 },
        { title: 'Back End', name: 'Supabase', icon: SiSupabase, color: 'text-success', x: -20, y: 60 },
        { title: 'Back End', name: 'MySQL', icon: SiMysql, color: 'text-white', x: 30, y: -30 },
        { title: 'Back End', name: 'Postgresql', icon: SiPostgresql, color: 'text-white', x: -50, y: 20 },
        { title: 'Back End', name: 'ASP.NET', icon: SiDotnet, color: 'text-primary', x: 40, y: 40 },
        { title: 'Back End', name: 'VB.NET', icon: SiDotnet, color: 'text-primary', x: -30, y: -40 },
        { title: 'Languages', name: 'Java', icon: FaJava, color: 'text-primary', x: 50, y: -50 },
        { title: 'Languages', name: 'C', icon: SiC, color: 'text-white', x: -40, y: 30 },
        { title: 'Languages', name: 'C#', icon: SiC , color: 'text-white', x: 20, y: -60 },
        { title: 'Tools', name: 'Git', icon: SiGit , color: 'text-danger', x: -60, y: -20 },
        { title: 'Tools', name: 'Github', icon: SiGithub , color: 'text-white', x: 40, y: 50 },
        { title: 'Tools', name: 'VS Code', icon: VscTerminal , color: 'text-white', x: -20, y: -50 },
        { title: 'Tools', name: 'Visual Studio', icon: VscTerminal , color: 'text-white', x: 30, y: 40 },
        { title: 'Tools', name: 'XAMPP', icon: FaServer , color: 'text-white', x: -50, y: 10 },
        { title: 'Methodologies', name: 'Waterfall Model', icon: SiTask, color: 'text-info', x: 60, y: -30 },
    ];

    const categories = [...new Set(stack.map(item => item.title))];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: (custom) => ({
            x: custom.x,
            y: custom.y,
            opacity: 0,
            scale: 0.8
        }),
        visible: { 
            x: 0, 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { type: 'spring', stiffness: 60, damping: 10 } 
        }
    };

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

                    <motion.div 
                        className="d-flex flex-wrap gap-3 mb-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stack
                            .filter(item => item.title === category)
                            .map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div 
                                        key={index} 
                                        custom={{ x: item.x, y: item.y }}
                                        variants={itemVariants}
                                        className="stack bg-dark text-white px-3 py-2 rounded d-flex align-items-center border border-secondary shadow-sm"
                                        style={{ gap: '10px' }}
                                    >
                                        <Icon size={25} className={item.color} />
                                        <span className="fw-medium" style={{ fontSize: '0.85rem' }}>{item.name}</span>
                                    </motion.div>
                                );
                            })}
                    </motion.div>
                </div>
            ))}
            <Other/>
        </section>
    );
}

export default Stack;