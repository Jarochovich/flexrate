import classes from "./Convertor.module.css";
import exchange from "../../imgs/exchange.svg";
import Input from "../UI/Input/Input";
import { useEffect, useRef, useState } from "react";
import SelectRate from "../SelectRate/SelectRate";

interface RatesData {
  [key: string]: number;
}

interface ApiResponse {
  data: RatesData;
}

function Convertor(props:unknown) {

    // const [rates, setRates] = useState<ApiResponse | null>(null);

    // с useState не происходит получение названия валюты из-за асинхронности setRates
    // функции изменения state всегда асинхронные
    const ratesRef = useRef<ApiResponse | null>(null);

    useEffect(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ltbmcS64qlUdydaz9pbzRtclaBGhi0faF8xhEL3d')
            .then(response => response.json())
            .then((data: ApiResponse) => {
                ratesRef.current = data;
                changeFromRate(1)})
            .catch(err => console.error(`Error: ${err}`));
    }, []);


    const [fromRate, setFromRate] = useState(1);
    const [toRate, setToRate] = useState(0);

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');


    const changeFromRate = (value:any) => {
        if (value < 0) return;
        const price = value / (ratesRef.current?.data[fromCurrency] || 0);
        const result = price * (ratesRef.current?.data[toCurrency] || 0);
        setFromRate(value);
        setToRate(result);
    }

    const changeToRate = (value:any) => {
        if (value < 0) return;
        const price = ((ratesRef.current?.data[fromCurrency] || 0) / (ratesRef.current?.data[toCurrency] || 0) * value);
        setToRate(value);
        setFromRate(price);
    }


    const onChangeFromCurrency = (currency: string) => setFromCurrency(currency);

    const onChangeToCurrency = (currency: string) => setToCurrency(currency);


    useEffect(() => {
        changeFromRate(fromRate);
    }, [fromCurrency]);

    useEffect(() => {
        changeToRate(toRate);
    }, [toCurrency]);


    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.convertFrom}>
                    <div className={classes.currency}>
                       <SelectRate currency={fromCurrency} 
                                   onChangeCurrency={onChangeFromCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={fromRate} 
                               onChangeValue={changeFromRate} 
                               currency={fromCurrency} />
                    </div>
                </div>

                <div className={classes.changeCurrency}>
                    <img src={exchange}/>
                </div>

                <div className={classes.convertTo}>
                    <div className={classes.currency}>
                       <SelectRate currency={toCurrency} 
                                   onChangeCurrency={onChangeToCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={toRate} 
                               onChangeValue={changeToRate} 
                               currency={toCurrency} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Convertor;