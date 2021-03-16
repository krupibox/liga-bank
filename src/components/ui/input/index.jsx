import PropTypes from 'prop-types';
import { currencyOptions } from "libs/helpers";

export const Input = ({
    name,
    styles,
    currency,
    amount,
    onCurrencyChange,
    onAmountChange,
}) => {
    return (<>
        <input
            type="number"
            step="any"
            name={name}
            className={styles.input}
            value={amount}
            onChange={onAmountChange}
        />
        <select
            className={styles.select}
            value={currency}
            onChange={onCurrencyChange}>

            {currencyOptions.map((option) => (<option
                key={option}
                value={option}>{option}</option>))}

        </select>
    </>)
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    onAmountChange: PropTypes.func.isRequired
};