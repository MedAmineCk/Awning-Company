import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import hr from "../assets/custom-hr.png"

export const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="section-container flex justify-between">
                    <div className="logo"></div>
                    <h3>MANTENERSE EN CONTACTO</h3>
                    <div className="social-medias">
                        <div className="icon flex-center">
                            <FaFacebookF/>
                        </div>
                        <div className="icon flex-center">
                            <AiOutlineInstagram/>
                        </div>
                        <div className="icon flex-center">
                            <BsWhatsapp/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-midle">
                <div className="section-container">
                    <div className="label">Enlaces</div>
                    <div className="links">
                        <a href="#">Sobre</a>
                        <a href="#">Productos</a>
                        <a href="#">Proyectos</a>
                        <a href="#">Reseñas</a>
                        <a href="#">Contacto</a>
                    </div>
                    <div className="custom-hr">
                        <img src={hr}/>
                    </div>
                    <div className="label">Condiciones</div>
                    <div className="links">
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de privacidad</a>
                        <a href="#">Devoluciones y reembolsos</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="section-container flex justify-center align-center">
                    &#xA9; all copyright reserved to the owner 2022/2023
                </div>
            </div>
        </footer>
    )
}