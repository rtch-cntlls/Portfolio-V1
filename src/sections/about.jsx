
function About() {

    return (
        <section id="about" className="mb-5 px-4">
            <h4 className="text-white mb-4">
                <i className="bi-person-fill me-3 text-primary"></i>About me
            </h4>

            <div className="row g-4">
                <div className="col-md-12">
                    <div className="card bg-dark border-secondary shadow-sm h-100">
                        <div className="card-body p-4">
                            <h5 className="text-white mb-3">Who I Am?</h5>
                            <p className="text-white-50 mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-white-50 mb-0">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;