
function SelectRate(props:any) {

    const rates = ['USD', 'BYN', 'RUB', 'EUR'];

    return (
         <select>
            {
               rates.map((item, index) => <option key={index}>{item}</option>)
            }
        </select>
    );
}

export default SelectRate;