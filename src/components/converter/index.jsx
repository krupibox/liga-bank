import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Converter.module.scss";

const Converter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const currencyValues = {
        from: 1,
        to: 1
    }
    const [currencyFrom, setCurrencyFrom] = useState(currencyValues)
    const [currencyTo, setCurrencyTo] = useState(currencyValues);
    const [currency, setCurrency] = useState(currencyValues);

    console.log(currency);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(currency);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setCurrency((prevTarget => ({ ...prevTarget, ...{ [name]: value } })));
    };

    // use useReducer
    useEffect(() => {
        setCurrencyFrom(prevCurrencyFrom => ({ ...prevCurrencyFrom, ...{ from: currency.from } }));
        setCurrencyTo(prevCurrencyTo => ({ ...prevCurrencyTo, ...{ to: currency.from * 2 } }));
    }, [currency.from]);

    useEffect(() => {
        setCurrencyTo(prevCurrencyTo => ({ ...prevCurrencyTo, ...{ to: currency.to } }));
        setCurrencyFrom(prevCurrencyFrom => ({ ...prevCurrencyFrom, ...{ from: currency.to / 2 } }));
    }, [currency.to]);

    // async function getRates() {
    //     try {
    //         let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js?date_req=02/03/2002');
    //         let curr = await response.json();
    //         console.log(curr.Valute.USD);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // getRates();

    return (<div className={styles.container}>
        <h2>Конвертер валют</h2>
        <form onSubmit={handleSubmit}>
            <fieldset >
                <div>
                    <legend>У меня есть:</legend>
                    <input type="number" name="from" value={currencyFrom.from} onChange={handleChange} />
                    <select>
                        <option value="rub">RUB</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div>
                    <legend>Хочу приобрести:</legend>
                    <input type="number" name="to" value={currencyTo.to} onChange={handleChange}  />
                    <select>
                        <option value="rub">USD</option>
                        <option value="usd">RUB</option>
                    </select>
                </div>
            </fieldset>
            <div>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <button type="submit">Сохранить результат </button>
            </div>
        </form>
    </div>)
}

export default Converter;