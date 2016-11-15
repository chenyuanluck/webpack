/**
 * 描述: 控制台日志
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/14
 * 创建时间: 16:17
 */
import * as Config from "../config";    // 导入配置文件
let Logger = {};                         // 日志对象
let emptyMethod = new Function();        // 空方法

for (let k in console) {
    if (console.hasOwnProperty(k)) Logger[k] = Config.ENABLED_LOGGER ? console[k] : emptyMethod;
}

if (Config.ENABLED_LOGGER) {
    Logger.log = function (log) {
        console.log('[' + new Date() + ']' + log);
    }
}

export default Logger;