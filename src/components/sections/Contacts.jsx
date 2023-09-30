import maps from "../../assets/map.png"
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import contacts from "../../data/contacts.js";
import {BiMap} from "react-icons/bi";
export const Contacts = () => {
    return (
        <section id="contact_us" className="contact_us highlight">
            <div className="section-container">
                <h3>Contáctanos</h3>
                <p>Nuestro equipo de expertos está a tu disposición para brindarte asesoramiento gratuito sobre toldos y sombrillas. ¡Contáctanos ahora!</p>
                <div className="container flex justify-between">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon flex-center"><BsFillTelephoneFill/></div>
                            <div className="container">
                                <div className="label">PHONE</div>
                                <div className="contact">{contacts.phone}</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon flex-center"><MdEmail/></div>
                            <div className="container">
                                <div className="label">EMAIL</div>
                                <div className="contact">{contacts.email}</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon flex-center"><BiMap/></div>
                            <div className="container">
                                <div className="label">ADDRESS</div>
                                <div className="contact">{contacts.address}</div>
                            </div>
                        </div>
                    </div>
                    <div className="map flex justify-center">
                        <img src={maps} alt="maps"/>
                    </div>
                </div>
            </div>
        </section>
    )
}