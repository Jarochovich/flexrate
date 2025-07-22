import classes from "./Convertor.module.css";
import exchange from "../../imgs/exchange.svg";
import Input from "../UI/Input/Input";
import { useEffect, useState } from "react";
import SelectRate from "../SelectRate/SelectRate";

function Convertor(props:unknown) {

    
    const [fromRate, setFromRate] = useState();
    const [toRate, setToRate] = useState();

    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('BYN');


    const changeFromRate = (event:any) => {
        setFromRate(event.target.value);
        console.log(fromRate);
    }

    const changeToRate = (event:any) => {
        setToRate(event.target.value);
        console.log(toRate);
    }


    const onChangeFromCurrency = (currency: string) => {
        setFromCurrency(currency);
        // console.log(fromCurrency);
    }

    const onChangeToCurrency = (currency: string) => {
        setToCurrency(currency);
        // console.log(toCurrency);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.convertFrom}>
                    <div className={classes.currency}>
                       <SelectRate currency={fromCurrency} onChangeCurrency={onChangeFromCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={fromRate} onChange={changeFromRate} currency='USD' placeholder='0'/>
                    </div>
                </div>

                <div className={classes.changeCurrency}><img src={exchange}/></div>

                <div className={classes.convertTo}>
                    <div className={classes.currency}>
                       <SelectRate currency={toCurrency} onChangeCurrency={onChangeToCurrency}/>
                    </div>
                    <div className={classes.value}>
                        <Input value={toRate} onChange={changeToRate} currency='BYN' placeholder='0'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Convertor;