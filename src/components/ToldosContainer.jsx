import toldos from "../data/toldos.js";
import {ToldoItem} from "./ToldoItem.jsx";

export const ToldosContainer = () => {
    return (
        <section className="toldos" id="toldos">
            <div className="section-container">
                <div className="section-label"><span>Toldos</span></div>
                <div className="toldos-container">
                    {
                        toldos.map((toldoObj, index) => <ToldoItem toldoObj={toldoObj} key={index}/>)
                    }
                </div>
            </div>
        </section>
    )
}