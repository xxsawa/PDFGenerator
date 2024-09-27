import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'pdf', loadChildren: () => import('./features/pdf-generator/pdf-generator.module').then(m => m.PdfGeneratorModule) },
  ];