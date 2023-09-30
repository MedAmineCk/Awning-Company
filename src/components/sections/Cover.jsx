import backgroundImg from "../../assets/cover.png"
import fouad from "../../assets/fouad.png"
import {BsFillPatchCheckFill} from "react-icons/bs";
import businessCard from "../../assets/businessCard.png";
import offerImg from "../../assets/offer.png";
export const Cover = () => {
    const why_us = [
        'Instalación experta',
        'Durabilidad',
        'Estilo variado',
        'Enfoque en el cliente.',
        'Excelente servicio postventa',
        'Precios competitivos'
    ];

    const portfolio =[
        {data: '+25', label: 'años de experiencia'},
        {data: '+1000', label: 'clientes'},
        {data: '+10', label: 'Tipos de Toldos'}
    ]
    return (
        <section id="cover" className="cover" style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className="section-container flex">
                <div className="left">
                    <div className="fouad-logo">
                        <img src={fouad} alt="fouad logo arabic"/>
                    </div>
                    <h1>Fouad Toldos</h1>
                    <h3>Montador de Toldos</h3>
                    <p>Tu Compañero de Confianza para Soluciones
                        de Sombra con Estilo!</p>
                    <div className="why-us flex">
                        {why_us.map((item, index)=> (
                            <div className="item" key={index}>
                                <span className='icon-container'><BsFillPatchCheckFill/></span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio">
                        {portfolio.map((obj, index) => (
                            <div className="item" key={index}>
                                <span className="data">{obj.data}</span>
                                <span className="label">{obj.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="offer" style={{backgroundImage: `url(${offerImg})`}}>
                        <div className="content">
                            <span className="data">0€</span>
                            <span className="label">oferta consultante</span>
                        </div>
                    </div>
                    <div className="business-card">
                        <img src={businessCard} alt="business card"/>
                    </div>
                </div>
            </div>
        </section>
    )
}