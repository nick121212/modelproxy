"use strict";
var factory = require("./base.factory");
var engines = require("../engines/default");
var ModelProxy;
(function (ModelProxy) {
    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9lbmdpbmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQTBDO0FBQzFDLDRDQUE4QztBQUU5QyxJQUFpQixVQUFVLENBSTFCO0FBSkQsV0FBaUIsVUFBVTtJQUNWLHdCQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBVyxDQUFDO0lBRTNFLFdBQUEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLEVBSmdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSTFCIn0=