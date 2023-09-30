import clients from "../../assets/clients.png"
export const Brands = () => {
    return (
        <section className="brands">
            <div className="section-container">
                <div className="img-container">
                    <img src={clients} alt="brands"/>
                </div>
            </div>
        </section>
    )
}