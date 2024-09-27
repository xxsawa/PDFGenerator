import { Request, Response } from "express";
import PDFGenerator from "./PDFGeneration"

const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors')

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use('/pdf-generator',PDFGenerator)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
