const BaseClass = require('../common/base-class');

/**
 * 数组操作符测试
 */

class ArrayMethods extends BaseClass {

    init() {
        this.name = 'ArrayMethods';
    }

    filter5fromLeft() {
        const arr = [0, 1, 3, 6, 8, 9, 20, 1];
        //TODO 筛选出前5个元素，并返回新数组
    }

    reduceToSum() {
        const arr = [0, 20, 3, 20, 10, 2, 3, 1];
        //TODO 利用reduce运算符计算出数组元素相加值
    }

    //Do not modify this function, as it will impact the judgement system.
    getAllItems() {
        return [
            [this.filter5fromLeft, [0, 1, 3, 6, 8]],
            [this.reduceToSum, 59]
        ]
    }

}

module.exports = ArrayMethods;