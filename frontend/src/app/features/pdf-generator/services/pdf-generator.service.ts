import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PDFInputs } from '../models/PDFInput';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  private baseUrl: string = `${environment.apiUrl}/pdf-generator`;

  constructor(private http: HttpClient) { }

    // POST request method
    generatePdf(data: PDFInputs): Observable<any> {
      const url = `${this.baseUrl}/inputs`; // example endpoint: /pdf-generator/generate
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      
      return this.http.post(url, data, { headers });
    }
  
    // GET request method
    downloadPdf(): Observable<any> {
      const url = `${this.baseUrl}/download`; // example endpoint: /pdf-generator/status/{id}
      
      return this.http.get(url,{ responseType: 'blob' });
    }
}

