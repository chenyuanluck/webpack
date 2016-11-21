/**
 * 描述: Symbol实践
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/21
 * 创建时间: 10:18
 */

var o = {};
for (let i = 0; i < 30; i++) {
    o[Symbol(i)] = i;
}
console.log(o);