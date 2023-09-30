import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhone} from "react-icons/fi";
import {useEffect, useState} from "react";

export const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const numStripes = Math.floor(windowWidth / 30); // Calcula el número de franjas según el ancho de la ventana

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const stripes = [];

    for (let i = 0; i < numStripes; i++) {
        stripes.push(<div key={i} className="awning-stripe"></div>);
    }

    const [navToggle, setNavToggle] = useState(false);
    const handleNavToggle = () => {
        setNavToggle(!navToggle)
    }

    const scrollToContactUs = ({section}) => {
        // You can adjust the duration as needed
        window.scrollTo({
            top: document.getElementById(section).offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <header>
            <div className="notice-bar">
                <div className="section-container flex justify-between align-center">
                    <Link to="/" className="logo"><img src={logo} alt="ToldoItem logo"/></Link>
                    <div className="contact-info">
                        <div className="flex-container">
                            <div className="icon flex-center"><HiOutlineMail/></div>
                            <div className="icon flex-center"><FiPhone/></div>
                            <span>600 42 35 47</span>
                        </div>
                        <span className="sub">Contáctanos para consultoría gratuita.</span>
                    </div>
                </div>
            </div>
            <nav className={navToggle ? 'open' : ''}>
                <div className="section-container flex justify-between align-center">
                    <ul>
                        <li><Link className="active" to="/" onClick={()=>scrollToContactUs({section:'cover'})}>Inicio</Link></li>
                        <li><Link to="/" onClick={()=>scrollToContactUs({section:'toldos'})}>Productos</Link></li>
                        <li><Link to="/" onClick={()=>scrollToContactUs({section:'about_us'})}>Nosotros</Link></li>
                        <li><Link to="/faqs">Preguntas Frecuentes</Link></li>
                    </ul>
                    <Link
                        to="/#contact_us"
                        onClick={()=>scrollToContactUs({section: 'contact_us'})}
                        className="contactUs-btn">Contáctanos</Link>
                </div>
            </nav>
            <div className={`nav_tab_icon ${navToggle ? 'open' : ''}`} onClick={()=>handleNavToggle()}>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            <div className="awning">{stripes.map((stripe) => (stripe))}</div>
        </header>
    )
}