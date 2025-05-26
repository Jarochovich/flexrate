import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Layout.module.css";

function Layout(props:any) {
    return (
        <div className={classes.wpapper}>
          <Header />
            <main className={classes.main}>
                <Outlet />
            </main>
          <Footer />  
        </div>
    );
}

export default Layout;