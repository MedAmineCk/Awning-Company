import React, {useState} from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

export const ToldoItem = ({ toldoObj }) => {
    const { title, description, id, thumbnail, images } = toldoObj;
    const [currentImg, setCurrentImg] = useState(thumbnail);

    const handleThumbnailChange = (imgSrc) => {
        setCurrentImg(imgSrc)
    }


    return (
        <div className="card-ui" key={id}>
            <div className="images">
                <div className="thumbnail"><img src={currentImg} alt={title}/></div>
                <div className="other-images">
                    {images.map((imgSrc, index) => (
                        <div className={`item ${currentImg === imgSrc ? 'active' : ''}`} key={index} onClick={()=>handleThumbnailChange(imgSrc)}><img src={imgSrc} alt={title} /></div>
                    ))}
                </div>
            </div>
            <div className="title">{title}</div>
            <div className="sub">
                {description}
            </div>
            <div className="see-more">
                <Link to={`/toldos/${id}`}>Ver más <span className="icon-container"><HiOutlineArrowNarrowRight/></span></Link>
            </div>
        </div>
    );
};
