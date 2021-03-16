import { currencyOptions } from "libs/helpers";

export const Input = ({
    name,
    styles,
    currency,
    handleCurrencyChange,
    handleAmountChange,
    amount
}) => {
    return (<>
        <input
            type="number"
            step="any"
            name={name}
            className={styles.input}
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
