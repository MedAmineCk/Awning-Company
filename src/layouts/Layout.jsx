import {Outlet} from "react-router-dom";
import {Plugins} from "../components/Plugins";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Layout = () => {
    return (
        <main className="app">
            <Header/>
            <Plugins/>
            <main className="main-container">
                <Outlet/>
            </main>
            <Footer/>
        </main>
    )
}