import classes from './Input.module.css';

function Input({currency, children, ...props} : any) {
    return (
        <input className={classes.input} {...props}>{children}</input>
    );
}

export default Input;