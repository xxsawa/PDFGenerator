"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PDFGeneration_1 = __importDefault(require("./PDFGeneration"));
const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/pdf-generator', PDFGeneration_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
