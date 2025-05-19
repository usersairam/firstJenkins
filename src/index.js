"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, function () { return console.log('System is running at 3020'); });
app.get('/health-check', function (req, res) { return res.status(200).json({ status: 200, message: "Success" }); });
exports.default = app;
