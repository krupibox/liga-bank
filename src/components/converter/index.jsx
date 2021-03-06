import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format, subDays } from "date-fns";
import History from "components/history";
import { Button, Input } from "components/ui";
import { calculateAmounts } from "libs/utils";
import { EXCHANGE_URL, MAX_HISTORY_ITEMS, INITIAL_AMOUNT } from "libs/constants";
import { Exchange } from "assets/icons";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Converter.module.scss";

const Converter = () => {
    const [rate, setRate] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("RUB");
    const [toCurrency, setToCurrency] = useState("USD");
    const [amount, setAmount] = useState(INITIAL_AMOUNT);
    const [isAmount, setIsAmount] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [history, setHistory] = useState([]);

    let { toAmount, fromAmount } = calculateAmounts(isAmount, amount, rate);

    const toggleAmount = {
        from: (value) => {
            setAmount(value);
            setIsAmount(true);
        },
        to: (value) => {
            setAmount(value);
            setIsAmount(false);
        },
    }

    const handleAmountChange = ({ target: { name, value } }) => toggleAmount[name](value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (history.length < MAX_HISTORY_ITEMS) {
            setHistory([...history, {
                date: format(startDate, 'dd.MM.yyyy'),
                amountFrom: `${fromAmount} ${fromCurrency}`,
                amountTo: `${toAmount} ${toCurrency}`
            }]);
        } else {
            setHistory([...history.slice(1), {
                date: format(startDate, 'dd.MM.yyyy'),
                amountFrom: `${fromAmount} ${fromCurrency}`,
                amountTo: `${toAmount} ${toCurrency}`
            }]);
        }
    };

    useEffect(() => {
        (async function getRates() {
            try {
                let response = await fetch(`${EXCHANGE_URL}/${format(startDate, 'yyyy-MM-dd')}?base=${fromCurrency}&symbols=${toCurrency}`);
                let data = await response.json();
                let [rate] = Object.values(data.rates);
                setRate(rate.toFixed(4));
            } catch (err) {
                console.log(err);
            }
        })();

    }, [startDate, fromCurrency, toCurrency])

    return (<div className={styles.container}>
        <h2 className={styles.title}>?????????????????? ??????????</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset className={styles.fieldset}>
                <div className={styles.block}>
                    <legend className={styles.legend} >?? ???????? ????????:</legend>
                    <div className={styles.group}>
                        <Input
                            name="from"
                            styles={styles}
                            currency={fromCurrency}
                            amount={fromAmount}
                            onCurrencyChange={({ target: { value } }) => setFromCurrency(value)}
                            onAmountChange={handleAmountChange}
                        />
                    </div>
                </div>
                <Exchange className={styles.exchange} />
                <div className={styles.block}>
                    <legend className={styles.legend}>???????? ????????????????????:</legend>
                    <div className={styles.group}>
                        <Input
                            name="to"
                            styles={styles}
                            currency={toCurrency}
                            amount={toAmount}
                            onCurrencyChange={({ target: { value } }) => setToCurrency(value)}
                            onAmountChange={handleAmountChange}
                        />
                    </div>
                </div>
            </fieldset>
            <div className={styles.calendar}>
                <DatePicker
                    selected={startDate}
                    dateFormat="dd.MM.yyyy"
                    minDate={subDays(new Date(), 7)}
                    maxDate={new Date()}
                    className={[styles.input, styles.icon, styles.date].join(" ")}
                    onChange={date => setStartDate(date)}
                />
                <Button button={{
                    className: styles.button,
                    type: "submit"
                }} title="?????????????????? ??????????????????"></Button>
            </div>
        </form>
        <History history={history} onSetHistory={setHistory} />
    </div>)
}

export default Converter;
