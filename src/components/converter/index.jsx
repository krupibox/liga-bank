import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format, subDays } from "date-fns";
import History from "components/history";
import { Button } from "components/ui/button";
import { getPriceTotalWithNoZero } from "../../helpers";
import { Exchange } from "assets/icons";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Converter.module.scss";

const Converter = () => {

    const MAX_HISTORY_ITEMS = 10;
    const DEFAULT_AMOUNT = {
        from: 1,
        to: 1
    }
    const DEFAULT_CURRENCY = {
        from: "USD",
        to: "RUB"
    }

    const [startDate, setStartDate] = useState(new Date());
    const [amountFrom, setAmountFrom] = useState(DEFAULT_AMOUNT)
    const [amountTo, setAmountTo] = useState(DEFAULT_AMOUNT);
    const [amount, setAmount] = useState(DEFAULT_AMOUNT);
    const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
    const [rate, setRate] = useState(1);
    const [history, setHistory] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (history.length < MAX_HISTORY_ITEMS) {
            setHistory([...history, {
                date: format(startDate, 'dd.MM.yyyy'),
                amountFrom: `${amountFrom.from} ${currency.from}`,
                amountTo: `${amountTo.to} ${currency.to}`
            }]);
        } else {
            setHistory([...history.slice(1), {
                date: format(startDate, 'dd.MM.yyyy'),
                amountFrom: `${amountFrom.from} ${currency.from}`,
                amountTo: `${amountTo.to} ${currency.to}`
            }]);
        }
    };

    const handleAmountChange = (evt) => {
        const { name, value } = evt.target;
        setAmount((prevValue => ({ ...prevValue, ...{ [name]: value } })));
    };

    const handleCurrencyChange = (evt) => {
        const { name, value } = evt.target;
        setCurrency((prevCurrency => ({ ...prevCurrency, ...{ [name]: value } })));
    };

    // use useReducer
    useEffect(() => {
        setAmountFrom(prevAmountFrom => ({ ...prevAmountFrom, ...{ from: amount.from } }));
        setAmountTo(prevAmountTo => ({ ...prevAmountTo, ...{ to: getPriceTotalWithNoZero(amount.from * rate) } }));
    }, [amount.from, currency, rate]);

    useEffect(() => {
        setAmountTo(prevAmountTo => ({ ...prevAmountTo, ...{ to: amount.to } }));
        setAmountFrom(prevAmountFrom => ({ ...prevAmountFrom, ...{ from: getPriceTotalWithNoZero(amount.to / rate) } }));
    }, [amount.to, currency, rate]);

    useEffect(() => {
        async function getRates() {
            try {
                let response = await fetch(`https://api.exchangeratesapi.io/${format(startDate, 'yyyy-MM-dd')}?base=${currency.from}&symbols=${currency.to}`);
                let data = await response.json();
                let [rate] = Object.values(data.rates);
                setRate(rate.toFixed(4));
            } catch (err) {
                console.log(err);
            }
        }

        getRates();

    }, [startDate, currency])

    return (<div className={styles.container}>
        <h2>Конвертер валют</h2>
        <form className={styles.form} onSubmit={handleSubmit}>

            <fieldset className={styles.fieldset}>
                <div>
                    <legend>У меня есть:</legend>
                    <input type="number" name="from" value={amountFrom.from} onChange={handleAmountChange} />
                    <select name="from" value={currency.from} onChange={handleCurrencyChange}>
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>

                <Exchange />
                <div>{rate}</div>

                <div>
                    <legend>Хочу приобрести:</legend>
                    <input type="number" name="to" value={amountTo.to} onChange={handleAmountChange} />
                    <select name="to" value={currency.to} onChange={handleCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="RUB">RUB</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                    </select>
                </div>
            </fieldset>

            <div className={styles.calendar}>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="dd.MM.yyyy"
                    minDate={subDays(new Date(), 7)}
                    maxDate={new Date()}
                />
                <Button button={{
                    className: styles.button,
                    type: "submit"
                }} title="Сохранить результат"></Button>
            </div>
        </form>
        <History history={history} setHistory={setHistory} />
    </div>)
}

export default Converter;
