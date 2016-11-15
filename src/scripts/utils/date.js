/**
 * 描述: 时间处理工具
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/15
 * 创建时间: 9:34
 */
class DateUtils {
    constructor() {
        this.date = new Date(...arguments);             // 当前时间
    }

    /**
     * 格式化时间
     * @param format 返回的时间格式(default: yyyy-MM-dd hh:mm:ss)
     * @returns {string} 返回一个格式化后的时间字串
     */
    format(format = "yyyy-MM-dd hh:mm:ss") {
        let date = this.date;                              // 当前实例化时的时间
        var o = {
            "M+": date.getMonth() + 1,                      //month
            "d+": date.getDate(),                           //day
            "h+": date.getHours(),                          //hour
            "m+": date.getMinutes(),                        //minute
            "s+": date.getSeconds(),                        //second
            "q+": Math.floor((date.getMonth() + 3) / 3),    //quarter
            "S+": date.getMilliseconds()                    //millisecond
        };

        if (new RegExp("(y+)").test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
}

export default DateUtils;
export {DateUtils};