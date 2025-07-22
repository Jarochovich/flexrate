import Convertor from "../Convertor/Convertor";
import classes from "./MainView.module.css";

function MainView(props:any) {
    return (
        <div className={classes.main}>
            <h4 className={classes.mainText}>FLEXRATE КОНВЕРТОР ВАЛЮТ</h4>

            <Convertor />
            
        </div>
    );
}

export default MainView;