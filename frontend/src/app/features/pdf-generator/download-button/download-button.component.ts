import { Component } from '@angular/core';
import { PdfGeneratorService } from '../services/pdf-generator.service';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css',"../pdf-generator.component.css"]
})
export class DownloadButtonComponent {

  response: string = "";

  constructor(private pdfService: PdfGeneratorService) {}

  downloadPDF(){
    const reader = new FileReader(); 
    reader.onload = (e: any) => this.response = JSON.parse(e.target.result).message;
    this.pdfService.downloadPdf().subscribe(response => {
        saveAs(response, 'Example.pdf')
        this.response = ""
    },err => reader.readAsText(err.error));
  }
}
