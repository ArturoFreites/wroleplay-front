import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";
import xLogo from '../assets/x.webp';
import tikTokLogo from '../assets/tiktok.webp';
import instagramLogo from '../assets/instagram.webp';
import logo from '../assets/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-links">
                    <Link to={"/"}><p>INICIO</p></Link>
                    <Link to={"/tienda"}><p>TIENDA</p></Link>
                    <Link to={"/eventos"}><p>EVENTOS</p></Link>
                    <Link to={"/foro"}><p>FORO</p></Link>
                    <Link to={"/admin"}><p>ADMIN</p></Link>
                </div>
                <Link to={"/"} className="footer-logo">
                    <img src={logo} alt="windingo roleplay" />
                </Link>
                <article className="footer-social">
                    <div className="footer-ds">
                        <a>
                            <span><FaDiscord /></span>
                            <p>Únite a Discord</p>
                        </a>
                    </div>
                    <div className="footer-redes">
                        <img src={tikTokLogo} alt="tik tok" />
                        <img src={instagramLogo} alt="instagram" />
                        <img src={xLogo} alt="x" />
                    </div>
                </article>
            </footer>
            <div className="footer-line"></div>
        </>
    );
}

export default Footer;