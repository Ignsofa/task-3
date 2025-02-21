function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__contact">
                    <div className="footer__contact-title">Contact</div>
                    <div className="footer__contact-text">
                        <p>We're focused on building brands and a better future.</p>
                        <div className="footer__text-wrapper">
                            <p>If you'd like to partner with us, we're <span className="footer__text-link">here</span> to talk.</p>
                        </div>
                    </div>
                </div>

                <div className="footer__lists">
                    <ul className="footer__list">
                        <li>Open Spaces</li>
                        <li>GIR</li>
                        <li>Letterfolk</li>
                        <li>Yield</li>
                        <li>Poketo</li>
                        <li>Equal Parts</li>
                    </ul>
                    <ul className="footer__list">
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                    <ul className="footer__list">
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                    <ul className="footer__list-address">
                        <li>228 Park Ave S.</li>
                        <li>New York, NY 10003</li>
                        <li>acquisitions@patternbrands.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer__copyright">
                <div className="footer__copyright-content">© 2025 Pattern Brands</div>
            </div>
        </footer>
    );
}

export default Footer;
