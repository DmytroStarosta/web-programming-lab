import React from "react";
import "./footer.css";
import Logo from '../Logo';

function Footer() {
    return (
        <footer>
            <div className = "footer__information">
                <div className = "text">
                    <h2 className="footer__txt-title">Branding staff</h2>
                    <p className="footer__txt-par">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <Logo className="footer__logo"/>
                <div className = "footer__social_networks">
                    <ul>
                        <li className="footer__li"><a href="#"><img src = "https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook"></img></a></li>
                        <li className="footer__li"><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter"></img></a></li>
                        <li className="footer__li"><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="Linkedin"></img></a></li>
                        <li className="footer__li"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CblwksVFXhuIqxmB8GIaQR4edc6sy1enBA&s" alt="Google plus"></img></a></li>  
                    </ul>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className="footer__autor"> © Dmytro Starosta 2024</div>
        </footer>
    )  
}

export default Footer;