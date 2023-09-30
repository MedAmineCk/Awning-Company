import {useParams} from "react-router-dom";
import toldos from "../data/toldos.js";
import ToldoDetail from "../components/ToldoDetail.jsx";

export const ToldoPage = () => {
    const { toldoId } = useParams();
    const selectedToldo = toldos.find((toldo) => toldo.id.toString() === toldoId);

    if (!selectedToldo) {
        return <div>Toldo not found</div>;
    }

    return (
        <div className="section-container">
            <ToldoDetail toldo={selectedToldo} />
        </div>
    );
}