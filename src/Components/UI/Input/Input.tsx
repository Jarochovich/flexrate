import classes from './Input.module.css';

function Input({onChangeValue, value} : any) {
    return (
        <input className={classes.input}
               type='number'
               value={value} 
               onChange={(e) => onChangeValue(e.target.value)} 
               placeholder='0'/>
    );
}

export default Input;