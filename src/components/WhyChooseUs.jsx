export default function WhyChooseUs() {
    return (
        <section className="section why-choose-us">
            <div className="why-left">
                <h2>Why Choose NordStar?</h2>

                <div className="why-grid">
                    {/* 1 */}
                    <div className="why-item">
                        <svg
                            viewBox="0 0 24 24"
                            width="34"
                            height="34"
                            fill="currentColor"
                        >
                            <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
                        </svg>
                        <div>
                            <h4>Flexibility & Efficiency</h4>
                            <p>
                                As a family run business, our operational
                                structure accommodates your unique moving
                                requirements.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="why-item">
                        <svg
                            viewBox="0 0 24 24"
                            width="34"
                            height="34"
                            fill="currentColor"
                        >
                            <path d="M12 2l2.9 6.6 7.1.6-5.3 4.6 1.6 7-6.3-3.7-6.3 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
                        </svg>
                        <div>
                            <h4>Honesty & Integrity</h4>
                            <p>Clear upfront pricing with no hidden fees.</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="why-item">
                        <svg
                            viewBox="0 0 24 24"
                            width="34"
                            height="34"
                            fill="currentColor"
                        >
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-4V7h2v4h2z" />
                        </svg>
                        <div>
                            <h4>Guaranteed Satisfaction</h4>
                            <p>
                                We serve at your pleasure and ensure you are
                                fully satisfied.
                            </p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="why-item">
                        <svg
                            viewBox="0 0 24 24"
                            width="34"
                            height="34"
                            fill="currentColor"
                        >
                            <path d="M4 4h16v4H4V4zm0 6h16v10H4V10zm2 2v6h12v-6H6z" />
                        </svg>
                        <div>
                            <h4>Communication</h4>
                            <p>Regular updates before and during your move.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-right">
                <img
                    src="../../public/images/whychooseus.jpg"
                    alt="Why choose us"
                />
            </div>
        </section>
    );
}
