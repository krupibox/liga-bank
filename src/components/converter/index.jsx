import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Converter.module.scss";

const Converter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [currency, setCurrency] = useState(
        {
            from: 0,
            to: 0
        });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(currency);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        // const mult = 2;
        // const translateFromTo = () => ({ [name]: value * mult });

        setCurrency({ ...currency, [name]: value });
    };

    async function getRates() {
        try {
            let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js?date_req=02/03/2002');
            let curr = await response.json();
            console.log(curr.Valute.USD);
        } catch (err) {
            console.log(err);
        }
    }
    getRates();

    return (<div className={styles.container}>
        <h2>Конвертер валют</h2>
        <form onSubmit={handleSubmit}>
            <fieldset >
                <div>
                    <legend>У меня есть:</legend>
                    <input type="number" name="from" value={currency.from} onChange={handleChange} />
                    <select>
                        <option value="rub">RUB</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div>
                    <legend>Хочу приобрести:</legend>
                    <input type="number" name="to" value={currency.to} onChange={handleChange} />
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