import { currencyOptions } from "libs/helpers";

export const Input = ({
    styles,
    currency,
    handleCurrencyChange,
    handleAmountChange,
    amount
}) => {
    return (<>
        <input
            className={styles.input}
            type="number"
            value={amount}
            onChange={handleAmountChange}
        />
        <select
            className={styles.select}
            value={currency}
            onChange={handleCurrencyChange}>

            {currencyOptions.map((option) => (<option
                key={option}
                value={option}>{option}</option>))}

        </select>
    </>)
}
