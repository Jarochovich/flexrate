import classes from './Button.module.css';

function Button({children, ...props}:any) {
    return (
        <button className={classes.button} {...props}>{children}</button>
    );
}

export default Button;