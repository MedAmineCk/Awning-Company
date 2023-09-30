import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";

export const SocialMedia = () => {
    return (
        <div className="social_media">
            <div className="item facebook" onClick={()=>window.open('https://web.facebook.com/profile.php?id=61550710925662')}>
                <span>Facebook</span>
                <div className="icon-container flex-center">
                    <FaFacebookF/>
                </div>
            </div>
            <div className="item youtube" onClick={()=>window.open('https://web.facebook.com/profile.php?id=61550710925662')}>
                <span>Instagram</span>
                <div className="icon-container flex-center">
                    <AiOutlineInstagram/>
                </div>
            </div>
        </div>
    )
}