var config = require("./config");
var accessFileServer = require("./module/accessFileServer");
accessFileServer.start(config.SHARE_FOLDER);