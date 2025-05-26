import classes from './Input.module.css';

function Input({children, ...props} : any) {
    return (
        <input className={classes.input} {...props}>{children}</input>
    );
}

export default Input;