/**
 * 描述: 控制台日志
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/14
 * 创建时间: 16:17
 */
import * as Config from "../profile";           //  导入配置文件

let Logger = {};

for (let k in console) {
    if (console.hasOwnProperty(k))  Logger[k] = console[k];
}

Logger.log = console.log;

export default Logger;