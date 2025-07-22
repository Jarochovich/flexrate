import classes from "./Header.module.css";
import logo from "../../imgs/logo.svg"

function Header(props:any) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;