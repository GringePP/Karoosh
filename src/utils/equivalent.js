const equal = (x, y) => {
    if (typeof x !== typeof y) {
        return {
            result: false,
            reason: 'The type of your answer is NOT the same as the correct one.'
        };
    }
    let result = false;
    if (x instanceof Array) {
        result = arrayEqual(x, y);
        return {
            result,
            reason: y instanceof Array ? 'Both are arrays, but with different elements or structures.' : 'The type of your answer is NOT the same as the correct one.'
        }
    }
    switch (typeof x) {
        case 'number':
        case 'string':
            result = x === y;
        default:
            return {
                result,
                reason: 'Both are ' + typeof x + " type, but with the different values."
            }
            break;
    }
}

//method to compare 2 potential arrays.
const arrayEqual = (x, y) => {
    if (!x || !y) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if ((x[i] instanceof Array) && (y[i] instanceof Array)) {
            if (!arrayEqual(x[i], y[i])) {
                return false;
            }
        } else if (x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}

module.exports = { equal };