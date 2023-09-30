
import {ToldosContainer} from "../components/ToldosContainer.jsx";

import {Testimonials} from "../components/sections/Testimonials";
import {Contacts} from "../components/sections/Contacts";
import {Brands} from "../components/sections/Brands";
import {Cover} from "../components/sections/Cover";
import {Fabric} from "../components/sections/Fabric";
import {Mesure} from "../components/sections/Mesure";

export const Home = () => {
    return (
        <section className="sections-container">
            <Cover/>
            <ToldosContainer/>
            <Fabric/>
            <Mesure/>
            <Testimonials/>
            <Contacts/>
            <Brands/>
        </section>
    )
}