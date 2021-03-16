export const removeItem = (items, index) => {
    const firstArr = items.slice(0, index);
    const secondArr = items.slice(index + 1);
    return [...firstArr, ...secondArr]
}
export const calculateAmounts = (isAmountFrom, amount, rate) => {
    let fromAmount, toAmount;

    if (isAmountFrom) {
        fromAmount = amount;
        toAmount = parseFloat((amount * rate).toFixed(4));
    } else {
        toAmount = amount;
        fromAmount = parseFloat((amount / rate).toFixed(4));
    }

    return {
        fromAmount,
        toAmount
    }
}
