import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

// Modo: 'local' | 'real'
const MODE: 'local' | 'real' = 'local';

@Injectable({ providedIn: 'root' })
export class DocumentService {

  constructor(private http: HttpClient) {}

  getXML(ticket: string): Observable<string> {
    if (MODE === 'local') {
      if (ticket === 'demo') {
        return this.http.get('assets/documents/sample.xml', { responseType: 'text' });
      }
      return throwError(() => 'Ticket no encontrado en modo local');
    }

    return this.http.get(`${environment.apiBase}/v1/xml/${ticket}`, { responseType: 'text' });
  }

  getPDF(ticket: string): Observable<Blob> {
    if (MODE === 'local') {
      if (ticket === 'demo') {
        return this.http.get('assets/documents/sample.pdf', { responseType: 'blob' });
      }
      return throwError(() => 'Ticket no encontrado en modo local');
    }

    return this.http.get(`${environment.apiBase}/v1/pdf/${ticket}`, { responseType: 'blob' });
  }

  getCDR(ticket: string): Observable<ArrayBuffer> {
    if (MODE === 'local') {
      if (ticket === 'demo') {
        return this.http.get('assets/documents/sample.cdr', { responseType: 'arraybuffer' });
      }
      return throwError(() => 'Ticket no encontrado en modo local');
    }

    return this.http.get(`${environment.apiBase}/v1/cdr/${ticket}`, { responseType: 'arraybuffer' });
  }
}
