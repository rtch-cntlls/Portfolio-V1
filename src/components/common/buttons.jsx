const Buttons = ({ label, href, subLabel, icon: Icon, className = "" }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn btn-outline-dark border-white d-flex flex-column align-items-start p-4 text-white ${className}`}
            style={{ width: "180px", height: "120px", justifyContent: "space-between" }}
        >
            {Icon && <Icon size={20} />}

            <span className="fw-bold">{label}</span>
  
            <small className="text-white-50 small">{subLabel}</small>
        </a>
    );
};

export default Buttons;