import fabric from "../../assets/fabric.png"
export const Fabric = () => {
    return (
        <section className="fabric highlight" id="about_us">
            <div className="section-container">
                <div className="section-label"><span>Telas que utilizamos:</span></div>
                <div className="container flex justify-between">
                    <div className="content">
                        <h3>Nosotros trabajamos solo
                            con mejores calidades, tanto
                            de aluminio como de telas.</h3>
                        <p>
                            nos enorgullece utilizar únicamente materiales
                            de la más alta calidad en la fabricación de
                            nuestros toldos. Nuestro compromiso con
                            la excelencia se refleja en cada detalle de
                            nuestros productos. Desde las telas hasta los
                            componentes, seleccionamos cuidadosamente los
                            materiales para garantizar que nuestros toldos
                            sean duraderos y resistentes a los elementos.
                            Confía en nosotros para ofrecerte la mejor
                            calidad y durabilidad en cada toldo que fabricamos.
                        </p>
                        <button className="btn-explore">Explora Nuestros Materiales</button>
                    </div>
                    <div className="img-container flex-center">
                        <img src={fabric} alt="fabric"/>
                    </div>
                </div>
            </div>
        </section>
    )
}