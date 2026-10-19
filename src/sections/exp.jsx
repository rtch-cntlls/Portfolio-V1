function Exp() {
    const ExpItem = ({ title, company, date, active }) => (
        <div className="mb-5 position-relative ps-4">
            <div 
                className={`position-absolute ${active ? 'bg-primary' : 'bg-secondary'}`} 
                style={{ width: '17px', height: '17px', left: '-9px', top: '4px', border: '2px solid #212529' }}  ></div>
            
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold text-white mb-1">{title}</h6>
                    <span className="font-monospace text-white-50 small ms-3">{date}</span>
                </div>
                <span className="text-white-50 small">{company}</span>
            </div>
        </div>
    );

    return (
        <div className="col-12 col-md-6">
            <div className="px-4 py-3">
                <h4 className="text-white mb-5 d-flex align-items-center">
                    <i className="bi bi-briefcase me-3 text-primary"></i>Experience
                </h4>

                <div className="border-start border-2 border-secondary ms-2">
                    <ExpItem 
                        title="Job Title Placeholder" 
                        company="Company Name / Organization" 
                        date="Present" 
                        active={true} 
                    />
                    <ExpItem 
                        title="Previous Job Title" 
                        company="Company Name Placeholder" 
                        date="2024 - 2025" 
                    />
                    <ExpItem 
                        title="Junior Position Role" 
                        company="Company Name Placeholder" 
                        date="2022 - 2023" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Exp;