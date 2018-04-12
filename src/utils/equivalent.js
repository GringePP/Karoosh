const equal = (x, y) => {
    if (typeof x !== typeof y) {
        return {
            result: false,
            reason: 'The type of your answer is NOT the same as the correct one.'
        };
    }
    let result = false;
    switch (typeof x) {
        case Array:
            result = arrayEqual(x, y);
        case 'number':
        case 'string':
            result = x === y;
        default:
            return { result, reason: 'Both are ' + typeof x + " type, but with the different values." }
            break;
    }
}

const arrayEqual = (x, y) => {

}


module.exports = { equal };