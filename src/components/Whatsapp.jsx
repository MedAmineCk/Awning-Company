import {AiOutlineWhatsApp} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";
import {useState} from "react";
import conf from "../data/whatsapp.js";

export const Whatsapp = () => {
    const [toggleWhatsapp, setToggleWhatsapp] = useState(false);

    return (
        <div id="whatsapp" className={`${toggleWhatsapp && 'active'}`} onClick={()=>setToggleWhatsapp(!toggleWhatsapp)}>
            <div className="btn-container">
                <div className="label animate__animated">{conf.label}</div>
                <div className="icon-container main-btn"></div>
            </div>
            <div className="wtp-container animate__animated">
                <div className="wtp-header">
                    <div className="instructions">
                        <p className="h1">{conf.title}</p>
                        <p className="sub">{conf.subtitle}</p>
                    </div>
                    <div className="icon-container flex-center">
                        <AiOutlineWhatsApp/>
                    </div>
                </div>
                <div className="wtp-body">
                    <p className="header">{conf.notification}</p>
                    {conf.accounts.map((account, index) => <WhatsappAccount account={account} key={index}/>)}
                </div>
            </div>
        </div>
    )
}


export const WhatsappAccount = ({account}) => {
    const {logo, label, whatsapp, message} = account
    const openURL = (_whatsapp, _message) => {
        const newURL = `https://wa.me/${_whatsapp}?text=${_message});`
        window.open(newURL)
    }
    return (
        <div className="item animate__animated" onClick={()=>openURL(whatsapp, message)}>
            <div className="logo-container flex-center">
                <img src={logo} alt="profile"/>
            </div>
            <div className="content">
                <p className="name">{label}</p>
                <p className="sub">{whatsapp}</p>
            </div>
            <div className="icon-container flex-center">
                <BiLinkExternal/>
            </div>
        </div>
    )
}