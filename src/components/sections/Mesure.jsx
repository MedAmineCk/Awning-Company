import mesures from '../../assets/mesures.jpg'
export const Mesure = () => {
    return (
        <section className="mesure highlight">
            <div className="section-container">
                <div className="section-label"><span>mejor ajuste</span></div>
                <div className="container flex justify-between">
                    <div className="img-container flex-center">
                        <img src={mesures} alt="toldos sizes"/>
                    </div>
                    <div className="content">
                        <h3>tamaños personalizados a sus necesidades</h3>
                        <p>usted nos da los tamaños y nosotros hacemos los cálculos para hacer los toldos que mejor se adapten a sus
                            necesidades</p>
                    </div>
                </div>
            </div>
        </section>
    )
}