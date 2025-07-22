import classes from "./Convertor.module.css";
import exchange from "../../imgs/exchange.svg";
import Input from "../UI/Input/Input";
import { useEffect, useState } from "react";
import SelectRate from "../SelectRate/SelectRate";

interface RatesData {
  [key: string]: number;
}

interface ApiResponse {
  data: RatesData;
}

function Convertor(props:unknown) {

    const [rates, setRates] = useState<ApiResponse | null>(null);
    
    useEffect(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ltbmcS64qlUdydaz9pbzRtclaBGhi0faF8xhEL3d')
            .then(response => response.json())
            .then((data: ApiResponse) => {
                setRates(data);
                console.log(data)})
            .catch(err => console.error(`Error: ${err}`));
    }, []);

    const [fromRate, setFromRate] = useState('');
    const [toRate, setToRate] = useState('');

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');


    const changeFromRate = (event:any) => {
        const price = event.target.value / (rates?.data[fromCurrency] || 1);
        const result = price * (rates?.data[toCurrency] || 1);
        setFromRate(event.target.value);
        setToRate(result.toString());
        console.log(fromRate);
    }

    const changeToRate = (event:any) => {
        const price = ((rates?.data[fromCurrency] || 1) / (rates?.data[toCurrency] || 1) * event.target.value);
        setToRate(event.target.value);
        setFromRate(price.toString());
        console.log(toRate);
    }


    const onChangeFromCurrency = (currency: string) => {
        setFromCurrency(currency);
        console.log(rates);
        console.log(rates?.data[currency]);
    }

    const onChangeToCurrency = (currency: string) => {
        setToCurrency(currency);
        console.log(rates?.data[currency]);
    }




    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.convertFrom}>
                    <div className={classes.currency}>
                       <SelectRate currency={fromCurrency} onChangeCurrency={onChangeFromCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={fromRate} onChange={changeFromRate} currency={fromCurrency} placeholder='0'/>
                    </div>
                </div>

                <div className={classes.changeCurrency}><img src={exchange}/></div>

                <div className={classes.convertTo}>
                    <div className={classes.currency}>
                       <SelectRate currency={toCurrency} onChangeCurrency={onChangeToCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={toRate} onChange={changeToRate} currency={toCurrency} placeholder='0'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Convertor;