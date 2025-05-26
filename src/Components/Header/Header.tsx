import classes from "./Header.module.css";
import logo from "../../imgs/logo.svg"

function Header(props:any) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.menu}>
                <select name="languages">
                    <option selected value="RU">Русский</option>
                    <option value="EN">English</option>
                </select>
            </div>
        </header>
    );
}

export default Header;