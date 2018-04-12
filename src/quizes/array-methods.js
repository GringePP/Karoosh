const BaseClass = require('../common/base-class');

/**
 * 数组操作符测试
 */

class ArrayMethods extends BaseClass {

    filter5fromLeft() {
        const arr = [0, 1, 3, 6, 8, 9, 20, 1];
        //TODO 筛选出前5个元素，并返回新数组
    }

    reduceToSum() {
        const arr = [0, 20, 3, 20, 10, 2, 3, 1];
        //TODO 利用reduce运算符计算出数组元素相加值
    }

    checkAll() {
        this.check(this.filter5fromLeft)([0, 1, 3, 6, 8]);
        this.check(this.reduceToSum)(59);
    }

}

module.exports = ArrayMethods;