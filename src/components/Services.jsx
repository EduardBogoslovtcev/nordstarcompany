import { Link } from "react-router-dom";
export default function Services() {
    return (
        <section className="section" id="services">
            <h2>Services We Provide:</h2>

            <div className="cards">
                {/* Commercial */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                                fill="currentColor"
                            >
                                <path d="M3 21h18v-2H3v2zm2-3h14V3H5v15zm2-2V5h10v11H7zm2-8h6v2H9V8zm0 4h6v2H9v-2z" />
                            </svg>
                        </div>

                        <h3>Commercial Moving</h3>

                        <p>
                            Efficient office and business relocation services.
                        </p>
                    </div>

                    <img
                        className="card-image"
                        src="../../public/images/commercial.jpg"
                        alt="Commercial moving"
                    />

                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Residential */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                                fill="currentColor"
                            >
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>

                        <h3>Residential Moving</h3>

                        <p>Smooth and stress-free home moving services.</p>
                    </div>

                    <img
                        className="card-image"
                        src="../../public/images/residential.jpg"
                        alt="Residential moving"
                    />

                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Local */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                                fill="currentColor"
                            >
                                <path d="M20 8h-3V4H3v13h2a3 3 0 006 0h4a3 3 0 006 0h2v-5l-3-4zM7 18a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>

                        <h3>Local Moving</h3>

                        <p>Moving within Winnipeg? We've got you covered.</p>
                    </div>

                    <img
                        className="card-image"
                        src="../../public/images/local.jpg"
                        alt="Local moving"
                    />

                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
