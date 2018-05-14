var fs = require("fs");
var path = require("path");
var workboxBuild = require("workbox-build");
var customConfig = require(path.join(process.cwd(), '/workbox-config.js'))
var book;

module.exports = {
  website: {
    assets: "./book",
    js: ["sw-register.js"]
  },
  hooks: {
    finish: function() {
      var rootDir = this.book.options.output;
      const defaultGlob = {
        globDirectory: rootDir,
        swDest: rootDir + "/service-worker.js"
      }
      const config = Object.assign(defaultGlob, customConfig)
      if (customConfig.hasOwnProperty("swSrc")) {
        workboxBuild.injectManifest(config)
      } else {
        workboxBuild.generateSW(config)
      }
    }
  }
};
