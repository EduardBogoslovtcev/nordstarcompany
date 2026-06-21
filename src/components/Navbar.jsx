import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/" onClick={() => setMenuOpen(false)}>
                    NORDSTAR
                </a>
            </div>

            <button
                className="burger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/#services" onClick={() => setMenuOpen(false)}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="/about" onClick={() => setMenuOpen(false)}>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="/pricing" onClick={() => setMenuOpen(false)}>
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>

            <a href="/contact" className="btn-primary nav-btn">
                Contact Us
            </a>
        </nav>
    );
}
