import {Outlet} from "react-router-dom";
import Navbar from "../container/navbar/navbar";
import Footer from "../container/footer/footer";

const Layout = ({user,setUser}) => {

    return (
        <>
            <Navbar user={user} setUser={setUser} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;