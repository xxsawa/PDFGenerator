import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfGeneratorComponent } from './pdf-generator.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PdfRoutingModule } from './pdf-generator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfGeneratorService } from './services/pdf-generator.service';



@NgModule({
  declarations: [PdfGeneratorComponent, InputFormComponent,DownloadButtonComponent],
  imports: [
    CommonModule,PdfRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [PdfGeneratorService]
})
export class PdfGeneratorModule { }
