import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <section className="section about-page">
            <h2>About NordStar</h2>

            {/* WHO WE ARE */}
            <div className="about-row">
                <div className="about-text">
                    <h3>Who We Are</h3>
                    <p>
                        NordStar is your trusted moving company in Winnipeg,
                        Manitoba, delivering reliable, affordable, and
                        stress-free moving services for homes and businesses.
                        Whether you are relocating across the city or planning a
                        long-distance move, our professional movers are here to
                        make the process smooth.
                    </p>
                </div>

                <img
                    src="../../public/images/movers1.jpg"
                    alt="Moving team"
                    className="about-img"
                />
            </div>

            <hr></hr>

            {/* RESIDENTIAL */}
            <div
                className="about-row-overlay"
                style={{
                    backgroundImage: 'url("../../public/images/movers2.jpg")',
                }}
            >
                <div className="about-overlay"></div>

                <h3>Residential Moving in Winnipeg</h3>

                <p>
                    From apartments and condos to houses and townhomes, our
                    skilled team handles your belongings with care. We provide
                    packing, furniture assembly, and safe transportation of
                    fragile items with on-time delivery.
                </p>
            </div>

            <hr></hr>

            {/* COMMERCIAL */}
            <div className="about-row">
                <div className="about-text">
                    <h3>Commercial Moving Services</h3>
                    <p>
                        We help offices, retail stores, and businesses move
                        efficiently with minimal downtime. Our team ensures
                        organized planning, secure handling of equipment, and
                        smooth setup at your new location.
                    </p>
                </div>

                <img
                    src="../../public/images/movers3.jpg"
                    alt="Commercial moving"
                    className="about-img"
                />
            </div>

            <hr></hr>

            {/* WHY CHOOSE US */}
            <div
                className="about-row-overlay"
                style={{
                    backgroundImage: 'url("../../public/images/movers5.jpg")',
                }}
            >
                <div className="about-overlay"></div>

                <h3>Why Choose NordStar?</h3>

                <p>
                    Affordable rates, trained movers, friendly service, and
                    reliable scheduling. We are proud to be a trusted Winnipeg
                    moving company focused on customer satisfaction.
                </p>
            </div>

            <hr></hr>

            {/* CONTACT BUTTON */}
            <div className="about-cta">
                <Link
                    to="/contact"
                    className="btn-primary"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}
