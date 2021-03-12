import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Converter.module.scss";

const Converter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [currencyFrom, setCurrencyFrom] = useState(0);
    const [currencyTo, setCurrencyTo] = useState(0);

    const handleSubmit = () => {
        console.log(currencyFrom * currencyTo);
    }

    const handleChangeFrom = (event) => setCurrencyTo(event.target.value);
    const handleChangeTo = (event) => setCurrencyFrom(event.target.value);

    console.log(currencyFrom);

    return (<div className={styles.container}>
        <h2>Конвертер валют</h2>
        <form onSubmit={handleSubmit}>
            <fieldset >
                <div>
                    <legend>У меня есть:</legend>
                    <input type="number" name="from" defaultValue={currencyFrom} onChange={handleChangeFrom} />
                    <select>
                        <option value="rub">RUB</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div>
                    <legend>Хочу приобрести:</legend>
                    <input type="number" name="to" defaultValue={currencyTo} onChange={handleChangeTo} />
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