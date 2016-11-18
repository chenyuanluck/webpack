/**
 * 描述: set集合
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/16
 * 创建时间: 14:34
 */
var obj = {};
var foo = {};
var ws = new WeakSet([obj, foo]);
var set = new Set([obj, foo]);
console.log(ws);
console.log(set);
obj = null;
console.log(ws);
console.log(set);

export default "Set";