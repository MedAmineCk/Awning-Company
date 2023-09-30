import React, {useCallback, useState} from "react";
import ImageViewer from 'react-simple-image-viewer';
const ToldoDetail = ({ toldo }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const {id, title, description, images, thumbnail} = toldo;
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div className="toldo-detail">
            <section className="main-content">

                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </section>
            <section className="gallery-section">
                <div className="section-label"><span>galería</span></div>
                <div className="gallery-container">
                    {images.map((imgSrc, index) => (
                        <div className="gallery-item" key={index}>
                            <img className="gallery-image" src={imgSrc} alt={title} onClick={ () => openImageViewer(index) }/>
                        </div>
                    ))}
                    {isViewerOpen && (
                        <ImageViewer
                            src={ images }
                            currentIndex={ currentImage }
                            disableScroll={ false }
                            closeOnClickOutside={ true }
                            onClose={ closeImageViewer }
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default ToldoDetail;
