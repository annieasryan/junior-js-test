const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = cartItemsPrices.reduce((acc, item) => Number(acc) + Number(item))
    let strSum = sum + ''
    let arrSum = strSum.split('.')
    if (arrSum[1].length > 2) {
        sum = Math.round(sum * 10) / 10
    }
    return sum === WINNING_SUM
}


module.exports = doesCartWinPrize;
