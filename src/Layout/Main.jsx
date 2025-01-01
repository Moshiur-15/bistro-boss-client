import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const noLogRegPage = location.pathname.includes('/Login')|| location.pathname.includes('/register')
    
    return (
        <div>
            {noLogRegPage || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noLogRegPage || <Footer></Footer>}
        </div>
    );
};

export default Main;