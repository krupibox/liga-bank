export const removeItem = (items, index) => {
    const firstArr = items.slice(0, index);
    const secondArr = items.slice(index + 1);
    return [...firstArr, ...secondArr]
}
export const calculateAmounts = (isAmountFrom, amount, rate) => {
    let fromAmount = 1000;
    let toAmount = 1;

    if (isAmountFrom) {
        fromAmount = amount;
        toAmount = amount * rate;
    } else {
        toAmount = amount;
        fromAmount = amount / rate;
    }
    return {
        fromAmount: parseFloat(fromAmount.toFixed(4)),
        toAmount: parseFloat(toAmount.toFixed(4))
    }
}
