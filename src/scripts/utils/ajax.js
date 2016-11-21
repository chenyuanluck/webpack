/**
 * 描述: ajax工具
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/15
 * 创建时间: 15:58
 */
const getParams = Symbol("getParams");
class Ajax {
    constructor() {

    }

    /**
     * 获取请求入参,如果没有参数，则使用默认
     * @param params 请求设置
     * @returns {Map}
     */
    [getParams](params) {
        let setting = new Map();                           // 默认请求入参
        setting.set("contentType", "application/json");     // 默认文件类型
        setting.set("dataType", "json");                    // 默认返回数据类型
        setting.set("type", "POST");                        // 默认提交方式
        setting.set("params", new Map());                   // 默认提交参数

        for (let k in params) {
            if (params.hasOwnProperty(k))
                setting.set(k, params[k]);
        }
        return setting;
    }

    /**
     * 请求数据
     * @param setting 请求设置
     * @returns {Promise}
     */
    ajax(setting) {
        setting = this[getParams](setting);
        if (!(setting.get("params") instanceof Map)) {
            throw new TypeError("请求入参对象类型只能为Map");
        }
        return new Promise((resolve, reject)=> {
            let client = new XMLHttpRequest();                                      // 创建XMLHttpRequest对象
            if (setting.get("type").toLocaleUpperCase() == "GET") {                 // GET方式请求将参数加入到地址
                let url = setting.get("url");                                       // 请求设置-请求路径
                let array = [];                                                     // 参数数组
                let params = setting.get("params");                                 // 入参Map对象
                for (let [key, val] of params.entries()) {                                   // 将入参Map对象传入参数数组
                    array.push(key + '=' + val);
                }
                if (new RegExp("\\?$").test(url)) {
                    url += array.join("&");
                } else if (new RegExp("\\?[^\\?]+$").test(url)) {
                    url += "&" + array.join("&");
                } else if (new RegExp("^[^\\?]+$").test(url)) {
                    url += "?" + array.join("&");
                }
                setting.set("url", url);
            }
            client.open(setting.get("type"), setting.get("url"));
            client.onreadystatechange = function handle() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            client.responseType = setting.get("dataType");
            client.setRequestHeader("Accept", setting.get("contentType"));
            client.send(JSON.stringify(setting.get("params")));
        });
    }

    /**
     * GET方式请求数据
     * @param url 请求地址
     * @param params 请求入参
     * @param successCallBack 成功回调方法
     * @param errorCallBack 失败回调方法
     */
    get(url, params = {}, successCallBack = new Function(), errorCallBack = new Function()) {
        this.ajax({url: url, type: "GET", params: params || new Map()}).then(successCallBack, errorCallBack);
    }

    /**
     * POST方式请求数据
     * @param url 请求地址
     * @param params 请求入参
     * @param successCallBack 成功回调方法
     * @param errorCallBack 失败回调方法
     */
    post(url, params = {}, successCallBack = new Function(), errorCallBack = new Function()) {
        this.ajax({url: url, type: "POST", params: params}).then(successCallBack, errorCallBack);
    }
}

let AjaxUtils = new Ajax();

export default AjaxUtils;
export {AjaxUtils};

// eg:
// var params = new Map();                                             // 请求入参
// params.set("name", "GET请求测试！");                                 // 请求名
// params.set("createTime", new DateUtils().format());                 // 请求时间
// AjaxUtils.get("./json/hello.json?aa=1", params, function (data) {
//     console.log(data);
// });