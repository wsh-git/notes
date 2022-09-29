var express = require("express");
var path = require("path");
function start(shareFolder) {
    let app = express();
    // 访问地址中不要包含 files 字段，才能访问成功
    app.use("/", express.static(path.join(process.cwd(), shareFolder)));
    app.listen(8888, function() {
        console.log("server has started.");
    });
}
exports.start = start;