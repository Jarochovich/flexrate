import { ChangeEvent} from "react";

function SelectRate(props:any) {
    const rates = ['USD', 'RUB', 'EUR', 'PLN', 'GBP', 'AUD', 'JPY'];

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChangeCurrency(event.target.value);
        console.log(event.target.value);
    }

    return (
         <select value={props.currency}
                 onChange={handleChange}>
            {
               rates.map((item, index) => <option key={index} value={item}>{item}</option>)
            }
        </select>
    );
}

export default SelectRate;