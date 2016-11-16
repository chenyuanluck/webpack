/**
 * 描述: set集合
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/16
 * 创建时间: 14:34
 */
let set = new Set([1, 2, 3, 4, 5, 6, 7]);                   // 实例化一个Set集合
console.log([...set]);
console.log(set.size);

var divs = new Set([...document.querySelectorAll("h1")]);    // 将h1元素存入一个Set
console.log([...divs]);
console.log(divs.size);

export default "Set";