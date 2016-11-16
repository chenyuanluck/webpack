/**
 * 描述: ajax工具
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/15
 * 创建时间: 15:58
 */
class Ajax {
    constructor() {
    }

    /**
     *
     * @param params
     * @returns {{contentType: string, dataType: string, type: string, params: {}}}
     */
    getRequestParams(params) {
        let defaultParams = {                  // 默认请求入参
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            params: {}
        };
        for (let k in params) {
            if (params.hasOwnProperty(k))
                defaultParams[k] = params[k];
        }
        return defaultParams;
    }

    /**
     * 请求数据
     * @param params
     * @returns {Promise}
     */
    ajax(params) {
        params = this.getRequestParams(params);
        return new Promise((resolve, reject)=> {
            var client = new XMLHttpRequest();                                 // 创建XMLHttpRequest对象
            if (params.type.toLocaleUpperCase() == "GET") {                     // GET方式请求将参数加入到地址
                var url = [];
                for (let k in params.params) {
                    if (params.params.hasOwnProperty(k))
                        url.push(k + '=' + params.params[k]);
                }
                if (new RegExp("\\?$").test(params.url)) {
                    params.url += url.join("&");
                } else if (new RegExp("\\?[^\\?]+$").test(params.url)) {
                    params.url += "&" + url.join("&");
                } else if (new RegExp("^[^\\?]+$").test(params.url)) {
                    params.url += "?" + url.join("&");
                }
            }
            client.open(params.type, params.url);
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
            client.responseType = params.dataType;
            client.setRequestHeader("Accept", params.contentType);
            client.send(JSON.stringify(params.params));
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
        this.ajax({url: url, type: "GET", params: params}).then(successCallBack, errorCallBack);
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