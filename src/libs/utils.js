import PropTypes from 'prop-types';

export const removeItem = (items, index) => {
    const firstArr = items.slice(0, index);
    const secondArr = items.slice(index + 1);
    return [...firstArr, ...secondArr]
}

export const calculateAmounts = (isAmountFrom, amount, rate) => {
    let fromAmount, toAmount;

    if (isAmountFrom) {
        fromAmount = parseFloat(amount);
        toAmount = parseFloat((amount * rate).toFixed(4));
    } else {
        toAmount = parseFloat(amount);
        fromAmount = parseFloat((amount / rate).toFixed(4));
    }

    return {
        fromAmount,
        toAmount
    }
}

calculateAmounts.propTypes = {
    isAmountFrom: PropTypes.bool.isRequired,
    amount: PropTypes.number.isRequired,
    rate: PropTypes.string.isRequired,
};
