"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Generation_1 = __importDefault(require("../Generation"));
const ErrorHandling_1 = __importDefault(require("../ErrorHandling/ErrorHandling"));
const express = require('express');
const router = express.Router();
router.post('/inputs', (req, res) => {
    let pdfInputs = req.body;
    console.log(pdfInputs);
    try {
        (0, ErrorHandling_1.default)(res, [pdfInputs.name, pdfInputs.date, pdfInputs.description]);
        Generation_1.default.PersonName = pdfInputs.name;
        Generation_1.default.Date = pdfInputs.date;
        Generation_1.default.Description = pdfInputs.description;
        res.status(200).json({
            success: true,
            message: 'Success.'
        });
    }
    catch (_a) {
        return res.status(400).json({
            success: false,
            message: 'Not all required inputs were provided. Please provide name, date, and description.'
        });
    }
});
router.get('/download', (req, res) => {
    try {
        (0, ErrorHandling_1.default)(res, [Generation_1.default.PersonName,
            Generation_1.default.Date,
            Generation_1.default.Description]);
        let document = new Generation_1.default(res);
        document.setHeader();
        document.setContents();
        document.setFooter();
        document.endDocument();
    }
    catch (_a) {
        return res.status(400).json({
            success: false,
            message: 'Not all required inputs were provided. Please provide name, date, and description.'
        });
    }
});
exports.default = router;
