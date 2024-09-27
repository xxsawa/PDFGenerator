import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfGeneratorService } from '../services/pdf-generator.service';
import { PDFInputs } from '../models/PDFInput';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css','../pdf-generator.component.css']
})
export class InputFormComponent {
  userForm: FormGroup;
  error: string = "";
  response: string = "";


  constructor(private fb: FormBuilder, private pdfService: PdfGeneratorService ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted!', this.userForm.value);
      let generatorInputs: PDFInputs = this.userForm.value;
      this.pdfService.generatePdf(generatorInputs).subscribe(response => {
        console.log('PDF Generated:', response);
        this.response = "Success"
      },err => this.error = err.body.message);
    } else {
      console.log('Form is invalid');
    }
  }
}
