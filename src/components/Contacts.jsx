export default function Contacts() {
    return (
        <section className="section contact-us">
            <h2>Contact Us</h2>
            <p>Contact us to discuss the pricing and date.</p>

            <div className="card contact-card">
                {/* Hours */}
                <div className="info-box">
                    <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="#05b9a7"
                    >
                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-4V7h2v4h2z" />
                    </svg>
                    <h4>Opening Hours</h4>
                    <p>Mon - Fri: 8am - 6pm</p>
                    <p>Sat - Sun: 9am - 4pm</p>
                </div>

                <hr></hr>

                {/* Call */}
                <div className="info-box">
                    <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="#05b9a7"
                    >
                        <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3l3.8.6c.6.1 1 .6 1 1.2V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1l.6 3.8c.1.4 0 .8-.3 1.1L6.6 10.8z" />
                    </svg>
                    <h4>Call Us</h4>
                    <a href="tel:+14312787242">
                        <p>431-278-7242</p>
                    </a>
                </div>

                <hr></hr>

                {/* Email */}
                <div className="info-box">
                    <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="#05b9a7"
                    >
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
                    </svg>
                    <h4>Email Us</h4>
                    <a href="mailto:roman.bogoslovtsev@gmail.com">
                        <p>roman.bogoslovtsev@gmail.com</p>
                    </a>
                </div>

                <hr></hr>

                {/* Facebook */}
                <div className="info-box">
                    <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="#05b9a7"
                    >
                        <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15.8c-1.2 0-1.6.8-1.6 1.5V12H18l-.5 3h-2.8v7A10 10 0 0022 12z" />
                    </svg>
                    <h4>Facebook</h4>

                    <a
                        href="https://www.facebook.com/share/1BiKAEEThR/?mibextid=LQQJ4d"
                        aria-label="Facebook"
                    >
                        <p>Open Facebook</p>
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="info-box">
                    <svg
                        viewBox="0 0 30 30"
                        width="30"
                        height="30"
                        fill="#05b9a7"
                    >
                        <path d="M20 3.5A11.9 11.9 0 003.4 20.6L2 22l1.5-.4A11.9 11.9 0 0020 3.5zM12 21a9 9 0 01-4.5-1.2l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1112 21zm5-6c-.3-.1-1.8-.9-2-.9s-.5-.1-.7.2-.8.9-1 .9-.4 0-.7-.2a7.4 7.4 0 01-2.2-1.4 8.4 8.4 0 01-1.5-1.9c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7s-.7-1.7-1-2.3c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.3 3.1c.2.3 2.2 3.4 5.3 4.7 3 .2 3-.1 3.5-.4.5-.3 1.5-1.2 1.7-2.4.2-1.2.2-1.1.1-1.2z" />
                    </svg>
                    <h4>WhatsApp</h4>

                    <a href="https://wa.me/14312787242" aria-label="Whatsapp">
                        <p>Open Whatsapp</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
