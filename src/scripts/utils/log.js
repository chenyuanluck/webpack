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
import {DateUtils} from "./date";       // 导入日期工具
let Logger = {};                         // 日志对象
let emptyMethod = new Function();        // 空方法

for (let k in console) {
    if (console.hasOwnProperty(k)) Logger[k] = Config.ENABLED_LOGGER ? console[k] : emptyMethod;
}

if (Config.ENABLED_LOGGER) {              // 当启用日志时，重写Logger.log方法
    Logger.log = function (log, des = "") {
        if (des.length > 0) {
            console.log('↓↓↓[' + new DateUtils().format() + '] : ' + des);
        }
        console.log(log);
    }
}

export default Logger;