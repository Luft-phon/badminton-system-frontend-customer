import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "../../css/Footer.css"
import { Link } from "react-scroll"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="footer-info-brand">
                    <div className="footer-info-title"><h2>Westminster Badminton</h2></div>
                    <div className="footer-info-content">
                        <p>Best Badminton Court in American. Gain entertainment and network after joining us</p>
                    </div>
                </div>
                <div className="footer-info-nav">
                    <div className="footer-info-title"><h3>Navitgation</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li>
                                <Link to="Home" duration={500} smooth={true}>Home</Link>
                            </li>
                            <li>
                                 <Link to="About" duration={500} smooth={true}>About us</Link>
                            </li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-information">
                    <div className="footer-info-title"><h3>Information</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li>+ 273-728-3849</li>
                            <li>info@badminton.com</li>
                            <li>Edita Ave, Westminster, CA</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info-hour">
                    <div className="footer-info-title"><h3>Opening Hour</h3></div>
                    <div className="footer-info-content">
                        <ul>
                            <li>Mon - Fri: 9:00 - 21:00</li>
                            <li>Sat - Sun: 8:00 - 22:00</li>
                            <li>Holiday: off</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-media">
                <div className="footer-media-watermark">© 2025 Badminton Management. All rights reserved | Made by Phong Ngo</div>
                <div className="footer-media-social">
                    <Link to="Home" duration={500} smooth={true}><FaFacebook /></Link>
                    <Link to="Home" duration={500} smooth={true}><FaInstagram /></Link>
                    <Link to="Home" duration={500} smooth={true}><FaTwitter /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer