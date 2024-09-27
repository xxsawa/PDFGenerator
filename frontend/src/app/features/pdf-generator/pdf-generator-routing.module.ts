import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfGeneratorComponent } from './pdf-generator.component';

const routes: Routes = [
  { path: '', component: PdfGeneratorComponent }, // Define the default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PdfRoutingModule { }
