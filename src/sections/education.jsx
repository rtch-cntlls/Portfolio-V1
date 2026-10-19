import Exp from './exp';

function Education() {
    const EducationItem = ({ school, degree, active, sy }) => (
        <div className="mb-5 position-relative ps-4">
            <div 
                className={`position-absolute ${active ? 'bg-success' : 'bg-light'}`} 
                style={{ width: '17px', height: '17px', left: '-9px', top: '4px', border: '2px solid #212529' }}></div>
            
            <div className="d-flex flex-column">
                <h6 className="fw-bold text-white mb-1">{school}</h6>
                {degree && <span className="text-white-50 small mb-2">{degree}</span>}
                <small className="text-white font-monospace" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                    {sy ? `SY: ${sy}` : 'SY: N/A'}
                </small>
            </div>
        </div>
    );

    return (
        <section id="education">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="px-4 py-3">
                        <h4 className="text-white mb-5 d-flex align-items-center">
                            <i className="bi bi-mortarboard me-3 text-success"></i>Education
                        </h4>
                        <div className="border-start border-2 border-secondary ms-2">
                            <EducationItem 
                                school="University Name Placeholder" 
                                degree="Bachelor of Science in Field Name" 
                                sy="2022 - 2026"
                                active={true} />
                            <EducationItem 
                                school="High School Name Placeholder" 
                                degree="Academic Track or Specialization"
                                sy="2020 - 2022" />
                        </div>
                    </div>
                </div>
                <Exp />
            </div>
        </section>
    );
}

export default Education;