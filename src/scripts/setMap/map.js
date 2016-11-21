/**
 * 描述:
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/18
 * 创建时间: 10:26
 */
let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);
for(let [k, o] of map) {
    console.info(k + ' : ' + o);
}