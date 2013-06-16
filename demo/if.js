var syncIf = require('if-sync').syncIf;
var path = require('path');

syncIf({
    title: 'Demo项目 - 接口文档',
    extraHtml: '这段HTML放置与接口文档顶部',
    // 数据文件和接口文档的编码
    encoding: 'utf-8', 
    // 生成的接口文档的存放路径
    savePath: path.join(__dirname, 'if.md'), 
    // 数据文件的根路径
    basePath: __dirname, 
    // 指定数据文件，无需文件扩展名
    files: [ 
        'getData'
    ]
});