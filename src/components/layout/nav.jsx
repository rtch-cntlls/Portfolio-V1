

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg p-2 px-5 rounded-5 custom-nav-bg">
            <a className="navbar-brand ms-3" href="#">
                <span className="dot-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </span>
                <span className="ms-2 fw-bold name">RtchCntlls.<span className="text-danger">Dev</span></span>
            </a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">
                        <i className="bi bi-house-door-fill me-1"></i> Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">
                        <i className="bi bi-code-square me-1"></i> Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">
                        <i className="bi bi-person-vcard me-1"></i> About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white-50" href="#">
                        <i className="bi bi-envelope-fill me-1"></i> Contact
                    </a>
                </li>
            </ul>
         </nav>
    );
  }
  
  export default Nav;