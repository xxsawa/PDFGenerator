import { Request, Response } from "express";
import PDFGEnerator from "../Generation"
import { PDFInputs } from "../Models/PDFInput";
import validateInputs from "../ErrorHandling/ErrorHandling"

const express = require('express');
const router = express.Router()

router.post('/inputs', (req : Request, res: Response) => {
  let pdfInputs = req.body as PDFInputs;

  console.log(pdfInputs)
  try{
    validateInputs(res, [pdfInputs.name, pdfInputs.date, pdfInputs.description]);
    PDFGEnerator.PersonName = pdfInputs.name;
    PDFGEnerator.Date = pdfInputs.date;
    PDFGEnerator.Description = pdfInputs.description;
    
  
    res.status(200).json({
      success: true,
      message: 'Success.'
    });
  }catch{
    return res.status(400).json({
      success: false,
      message: 'Not all required inputs were provided. Please provide name, date, and description.'
    });
  }


});


router.get('/download', (req : Request, res: Response) => {
  try{
    validateInputs(res, [PDFGEnerator.PersonName,
      PDFGEnerator.Date,
      PDFGEnerator.Description]);
    let document = new PDFGEnerator(res);
    document.setHeader();
    document.setContents();
    document.setFooter();
    document.endDocument();
  }catch{
    return res.status(400).json({
      success: false,
      message: 'Not all required inputs were provided. Please provide name, date, and description.'
    });
  }
});
  
export default router