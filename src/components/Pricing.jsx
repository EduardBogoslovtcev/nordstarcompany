import { Link } from "react-router-dom";
export default function Pricing() {
    return (
        <section className="section pricing">
            <h2>Pricing:</h2>

            <div className="cards">
                {/* Hourly Rates */}
                <div className="card">
                    <h3>Hourly Rates</h3>

                    <p>1 Mover + Truck = $90 / Hour</p>
                    <p>2 Movers + Truck = $120 / Hour</p>
                    <p>3 Movers + Truck = $160 / Hour</p>

                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Flat Rate */}
                <div className="card">
                    <h3>Flat-Rate Packages</h3>

                    <p>Bachelor Apartment = $400</p>
                    <p>1 Bedroom Apartment = $500</p>
                    <p>2 Bedroom Apartment = $600</p>
                    <p>3 Bedroom House starts at $750</p>

                    <Link
                        to="/contact"
                        className="btn-primary"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Additional Services */}
                <div className="card">
                    <h3>Additional Services</h3>

                    <p>Packing Services = $50 / hour</p>
                    <p>Junk Removal</p>
                    <p>Long-Distance MB Moves</p>

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
