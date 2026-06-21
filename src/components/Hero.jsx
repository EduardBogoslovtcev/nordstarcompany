import heroImage from "../assets/images/hero_image.jpeg";
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="hero-overlay" />

            <div className="hero-content">
                <h1>
                    Moving You The <span className="hero-span">Right</span> Way
                </h1>
                <p>
                    Reliable, professional and affordable moving services in
                    Winnipeg and surrounding areas. We treat your belongings
                    like our own.
                </p>
                <a href="tel:+14312787242" className="btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="25"
                        height="25"
                        style={{
                            marginRight: "8px",
                            verticalAlign: "middle",
                            transform: "translateY(-2.5px)",
                        }}
                        fill="currentColor"
                    >
                        <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
                    </svg>
                    431-278-7242
                </a>
            </div>
        </section>
    );
}
