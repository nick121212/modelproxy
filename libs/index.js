"use strict";
var engineFactory = require("./libs/engine.factory");
var proxy_1 = require("./libs/proxy");
var compose = require("./libs/compose");
var index_1 = require("./schemas/index");
var base = require("./engines/base");
var baseFactory = require("./libs/base.factory");
var methodtype = require("./models/method");
var errors = require("./libs/errors");
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine,
    BaseFactory: baseFactory.ModelProxy.BaseFactory,
    errors: errors
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUF1RDtBQUN2RCxzQ0FBMEM7QUFFMUMsd0NBQTBDO0FBQzFDLHlDQUFvRDtBQUNwRCxxQ0FBdUM7QUFFdkMsaURBQW1EO0FBRW5ELDRDQUE4QztBQUM5QyxzQ0FBd0M7QUFFM0IsUUFBQSxVQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFLGtCQUFVLENBQUMsVUFBVTtJQUM1QixhQUFhLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhO0lBQ3JELE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU87SUFDbkMscUJBQXFCLEVBQUUsZUFBcUI7SUFDNUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVO0lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtJQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXO0lBQy9DLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUMifQ==