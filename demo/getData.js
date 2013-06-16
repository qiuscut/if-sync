/**
 * 数据接口
 *
 * @author luics (guidao)
 * @version 1.0.0
 * @date 5/20/13 5:22 PM
 */

/**
 * 兼容node和browser环境
 */
if (typeof exports === 'undefined') {
    exports = {};
}

exports.config = {// 扩展属性
    "name": "获取数据",
    "desc": ""
};

//
// 注：以下3个字段的顺序对接口文档的生成有影响，请勿改变顺序
// 

exports.request = {// 请求
    "userId": "1" // 可以有注释，比如：用户Id
};

exports.response = {// 响应 - 成功
    "success": true,
    "model": {
        "data": "一些有用的数据"
    }
};

exports.responseError = {// 响应 - 失败
    "success": false,
    "model": {}
};